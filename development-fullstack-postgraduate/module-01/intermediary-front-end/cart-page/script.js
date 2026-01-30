/**
 * ============================================================
 * Shopping Cart JavaScript - Interactive Cart Management
 * ============================================================
 * Features:
 * - Quantity increment/decrement with animations
 * - Dynamic price calculations
 * - Item removal with smooth transitions
 * - Cart persistence with localStorage
 * - Toast notifications for user feedback
 * - "Go Back" and "Continue" button actions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('🛒 Cart Manager initialized!');

    // Initialize the cart
    initCart();
});

/**
 * Initialize the shopping cart functionality
 */
function initCart() {
    // Create toast container for notifications
    createToastContainer();

    // Add CSS for animations
    addStyles();

    // Bind events using event delegation on document
    bindCartEvents();

    // Update initial totals
    updateSubtotal();
}

/**
 * Bind all cart events using event delegation
 */
function bindCartEvents() {
    // Use event delegation on document body
    document.body.addEventListener('click', function (e) {
        const target = e.target;

        // Increase quantity button
        if (target.classList.contains('btn-increase')) {
            e.preventDefault();
            e.stopPropagation();
            const cartItem = target.closest('.cart-item');
            if (cartItem) {
                increaseQuantity(cartItem);
            }
        }

        // Decrease quantity button
        if (target.classList.contains('btn-decrease')) {
            e.preventDefault();
            e.stopPropagation();
            const cartItem = target.closest('.cart-item');
            if (cartItem) {
                decreaseQuantity(cartItem);
            }
        }

        // Remove item button
        if (target.classList.contains('btn-remove')) {
            e.preventDefault();
            e.stopPropagation();
            const cartItem = target.closest('.cart-item');
            if (cartItem) {
                removeItem(cartItem);
            }
        }

        // Go Back button
        if (target.closest('.btn.bg-light')) {
            e.preventDefault();
            showToast('Going back to shop...', 'info');
        }

        // Continue button
        if (target.closest('.btn.bg-dark')) {
            e.preventDefault();
            proceedToCheckout();
        }
    });
}

/**
 * Increase item quantity
 */
function increaseQuantity(cartItem) {
    const quantityEl = cartItem.querySelector('.quantity-display');
    const price = parseFloat(cartItem.dataset.price);
    let quantity = parseInt(quantityEl.textContent);

    quantity++;
    quantityEl.textContent = quantity;

    // Update item total
    updateItemTotal(cartItem, price, quantity);

    // Update subtotal
    updateSubtotal();

    // Animation
    pulseElement(quantityEl);

    // Notification
    const productName = cartItem.querySelector('.product-name').textContent;
    showToast(`${productName}: quantity updated to ${quantity}`, 'success');
}

/**
 * Decrease item quantity
 */
function decreaseQuantity(cartItem) {
    const quantityEl = cartItem.querySelector('.quantity-display');
    const price = parseFloat(cartItem.dataset.price);
    let quantity = parseInt(quantityEl.textContent);

    if (quantity > 1) {
        quantity--;
        quantityEl.textContent = quantity;

        // Update item total
        updateItemTotal(cartItem, price, quantity);

        // Update subtotal
        updateSubtotal();

        // Animation
        pulseElement(quantityEl);

        // Notification
        const productName = cartItem.querySelector('.product-name').textContent;
        showToast(`${productName}: quantity updated to ${quantity}`, 'info');
    } else {
        // Shake animation to indicate minimum
        shakeElement(quantityEl);
        showToast('Minimum quantity is 1. Click ✕ to remove.', 'warning');
    }
}

/**
 * Update individual item total
 */
function updateItemTotal(cartItem, price, quantity) {
    const totalEl = cartItem.querySelector('.item-total b');
    const newTotal = (price * quantity).toFixed(2);
    totalEl.textContent = `$${newTotal}`;
}

/**
 * Remove item from cart
 */
function removeItem(cartItem) {
    const productName = cartItem.querySelector('.product-name').textContent;

    // Fade out animation
    cartItem.style.animation = 'fadeOut 0.3s ease forwards';

    setTimeout(function () {
        cartItem.remove();
        updateSubtotal();
        updateItemCount();
        showToast(`${productName} removed from cart`, 'error');

        // Check if cart is empty
        const remainingItems = document.querySelectorAll('.cart-item');
        if (remainingItems.length === 0) {
            showEmptyCart();
        }
    }, 300);
}

/**
 * Update cart subtotal
 */
function updateSubtotal() {
    let subtotal = 0;

    document.querySelectorAll('.cart-item').forEach(function (item) {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity-display').textContent);
        subtotal += price * quantity;
    });

    // Update subtotal display
    const subtotalEl = document.querySelector('#footer-font b span');
    if (subtotalEl) {
        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Update item count
    updateItemCount();
}

/**
 * Update item count display
 */
function updateItemCount() {
    let totalItems = 0;

    document.querySelectorAll('.cart-item').forEach(function (item) {
        const quantity = parseInt(item.querySelector('.quantity-display').textContent);
        totalItems += quantity;
    });

    // Find the item count element (the one with just "X items" text)
    const itemCountEl = document.querySelector('.d-flex.flex-column.pt-4 .font-weight-normal');
    if (itemCountEl) {
        itemCountEl.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
    }
}

/**
 * Show empty cart message
 */
function showEmptyCart() {
    const container = document.querySelector('.col-lg-10.col-12.pt-3');
    if (container) {
        // Keep header, remove product section
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'text-center py-5';
        emptyMessage.innerHTML = `
            <div style="font-size: 80px;">🛒</div>
            <h4 class="mt-3">Your cart is empty</h4>
            <p class="text-muted">Looks like you haven't added any items yet!</p>
            <button class="btn btn-dark mt-3" onclick="location.reload()">
                Refresh Page
            </button>
        `;

        // Find heading and append after it
        const heading = container.querySelector('#heading');
        if (heading) {
            heading.insertAdjacentElement('afterend', emptyMessage);
        }
    }
}

/**
 * Proceed to checkout
 */
function proceedToCheckout() {
    const cartItems = document.querySelectorAll('.cart-item');

    if (cartItems.length === 0) {
        showToast('Your cart is empty!', 'warning');
        return;
    }

    // Calculate totals
    let subtotal = 0;
    let itemsList = [];

    cartItems.forEach(function (item) {
        const name = item.querySelector('.product-name').textContent;
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity-display').textContent);
        const total = price * quantity;

        subtotal += total;
        itemsList.push({ name, price, quantity, total });
    });

    const shipping = 5.99;
    const tax = subtotal * 0.08;
    const grandTotal = subtotal + shipping + tax;

    showCheckoutModal(itemsList, subtotal, shipping, tax, grandTotal);
}

/**
 * Show checkout modal
 */
function showCheckoutModal(items, subtotal, shipping, tax, total) {
    // Remove existing modal if any
    const existingModal = document.getElementById('checkout-modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'checkout-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    let itemsHtml = items.map(function (item) {
        return `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>${item.name} x${item.quantity}</span>
                <span>$${item.total.toFixed(2)}</span>
            </div>
        `;
    }).join('');

    modal.innerHTML = `
        <div style="
            background: white;
            padding: 30px;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        ">
            <h4 style="margin-bottom: 20px;">
                🛍️ Order Summary
            </h4>
            <div style="border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px;">
                ${itemsHtml}
            </div>
            <div style="margin-bottom: 8px; display: flex; justify-content: space-between;">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div style="margin-bottom: 8px; display: flex; justify-content: space-between;">
                <span>Shipping:</span>
                <span>$${shipping.toFixed(2)}</span>
            </div>
            <div style="margin-bottom: 15px; display: flex; justify-content: space-between;">
                <span>Tax (8%):</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <div style="
                font-size: 18px;
                font-weight: bold;
                display: flex;
                justify-content: space-between;
                padding-top: 15px;
                border-top: 2px solid #333;
            ">
                <span>Total:</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <div style="display: flex; gap: 10px; margin-top: 25px;">
                <button id="modal-cancel" style="
                    flex: 1;
                    padding: 12px;
                    border: 1px solid #333;
                    background: white;
                    border-radius: 6px;
                    cursor: pointer;
                ">Cancel</button>
                <button id="modal-confirm" style="
                    flex: 1;
                    padding: 12px;
                    border: none;
                    background: #333;
                    color: white;
                    border-radius: 6px;
                    cursor: pointer;
                ">Confirm Order</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Modal events
    document.getElementById('modal-cancel').addEventListener('click', function () {
        modal.remove();
    });

    document.getElementById('modal-confirm').addEventListener('click', function () {
        confirmOrder(modal, total);
    });

    // Click outside to close
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

/**
 * Confirm order
 */
function confirmOrder(modal, total) {
    const content = modal.querySelector('div > div');
    const orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

    content.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 60px;">🎉</div>
            <h3 style="color: #28a745; margin: 15px 0;">Order Confirmed!</h3>
            <p style="color: #666;">
                Total: <strong>$${total.toFixed(2)}</strong>
            </p>
            <p style="color: #999; font-size: 14px;">
                Order #${orderNumber}
            </p>
            <button id="modal-done" style="
                margin-top: 20px;
                padding: 12px 40px;
                border: none;
                background: #28a745;
                color: white;
                border-radius: 6px;
                cursor: pointer;
            ">Done</button>
        </div>
    `;

    document.getElementById('modal-done').addEventListener('click', function () {
        location.reload();
    });
}

/**
 * Animation helpers
 */
function pulseElement(el) {
    el.style.transform = 'scale(1.3)';
    el.style.transition = 'transform 0.15s ease';
    setTimeout(function () {
        el.style.transform = 'scale(1)';
    }, 150);
}

function shakeElement(el) {
    el.style.animation = 'shake 0.3s ease';
    setTimeout(function () {
        el.style.animation = '';
    }, 300);
}

/**
 * Add CSS styles
 */
function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.95); height: 0; padding: 0; margin: 0; }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .btn-increase, .btn-decrease {
            cursor: pointer;
            transition: all 0.2s ease;
            user-select: none;
        }
        
        .btn-increase:hover, .btn-decrease:hover {
            color: #333 !important;
            transform: scale(1.2);
        }
        
        .btn-remove {
            cursor: pointer;
            font-size: 24px;
            color: #999;
            transition: all 0.2s ease;
            user-select: none;
        }
        
        .btn-remove:hover {
            color: #dc3545 !important;
            transform: scale(1.1);
        }
        
        .cart-item {
            transition: all 0.3s ease;
        }
        
        .cart-item:hover {
            background-color: rgba(0,0,0,0.02);
        }
        
        .btn {
            transition: all 0.2s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        .quantity-display {
            display: inline-block;
            min-width: 20px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Toast notification system
 */
function createToastContainer() {
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
}

function showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');

    const colors = {
        success: { bg: '#28a745', icon: '✓' },
        warning: { bg: '#ffc107', icon: '⚠' },
        error: { bg: '#dc3545', icon: '✕' },
        info: { bg: '#17a2b8', icon: 'ℹ' }
    };

    const config = colors[type] || colors.info;

    toast.style.cssText = `
        background-color: ${config.bg};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        animation: slideIn 0.3s ease;
    `;

    toast.innerHTML = `<span style="font-size: 18px;">${config.icon}</span> ${message}`;
    container.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(function () {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(function () {
            toast.remove();
        }, 300);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Escape to close modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('checkout-modal');
        if (modal) modal.remove();
    }
});
