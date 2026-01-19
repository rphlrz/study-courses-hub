// ============================================================================
// 📚 CLASS 10 - MANIPULATING THE DOM - COMPLETE GUIDE
// ============================================================================
// This file contains educational examples about:
// 1. What is the DOM?
// 2. Selecting Elements
// 3. Traversing the DOM
// 4. Modifying Element Content
// 5. Modifying Attributes and Properties
// 6. Modifying Styles and Classes
// 7. Creating and Inserting Elements
// 8. Removing and Replacing Elements
// 9. Event Handling
// 10. Event Delegation
// 11. Form Handling
// 12. Performance Tips
// ============================================================================

console.log("🚀 Starting the study of DOM Manipulation!");

/*
 * ⚠️ IMPORTANT NOTE:
 * This file contains DOM manipulation examples.
 * To run these examples, you need to:
 * 1. Create an HTML file that includes this script
 * 2. Open the HTML file in a browser
 * 3. Check the browser console for output
 * 
 * Example HTML structure is provided in comments throughout.
 */


// ============================================================================
// 📌 SECTION 1: WHAT IS THE DOM?
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 1: WHAT IS THE DOM?");
console.log("========================================\n");

/*
 * DOM (Document Object Model) is a programming interface for web documents.
 * 
 * Key Concepts:
 * - The browser parses HTML and creates a tree of objects (nodes)
 * - Each HTML element becomes a node in the tree
 * - JavaScript can access and modify this tree
 * - Changes to the DOM are reflected in the browser immediately
 * 
 * DOM Tree Structure:
 * 
 *                     document
 *                        |
 *                      <html>
 *                     /      \
 *                 <head>    <body>
 *                   |         |
 *                <title>   <div id="app">
 *                   |         |
 *                "Title"   <p class="text">
 *                             |
 *                        "Hello World"
 * 
 * Node Types:
 * - Document node (the entire document)
 * - Element nodes (HTML elements)
 * - Text nodes (text content)
 * - Attribute nodes (element attributes)
 * - Comment nodes (HTML comments)
 */

// Accessing the document object
console.log("Document object:", typeof document);
console.log("Document title:", document.title);
console.log("Document URL:", document.URL);
console.log("Document doctype:", document.doctype);

// The document object provides access to the entire DOM
console.log("HTML element:", document.documentElement); // <html>
console.log("Head element:", document.head);            // <head>
console.log("Body element:", document.body);            // <body>


// ============================================================================
// 📌 SECTION 2: SELECTING ELEMENTS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 2: SELECTING ELEMENTS");
console.log("========================================\n");

/*
 * HTML for examples:
 * 
 * <div id="container">
 *     <h1 class="title">Welcome</h1>
 *     <p class="text">First paragraph</p>
 *     <p class="text">Second paragraph</p>
 *     <ul id="list">
 *         <li class="item">Item 1</li>
 *         <li class="item">Item 2</li>
 *         <li class="item active">Item 3</li>
 *     </ul>
 *     <input type="text" name="username" data-validate="required">
 * </div>
 */

// ─────────────────────────────────────────────────────────────────────────────
// 2.1 getElementById() - Select by ID (returns single element or null)
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== getElementById ===\n");

const container = document.getElementById("container");
console.log("Container:", container);

// Returns null if not found
const notFound = document.getElementById("nonexistent");
console.log("Not found:", notFound); // null

// ─────────────────────────────────────────────────────────────────────────────
// 2.2 getElementsByClassName() - Select by class (returns HTMLCollection)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== getElementsByClassName ===\n");

const textElements = document.getElementsByClassName("text");
console.log("Text elements:", textElements);
console.log("Length:", textElements.length);
console.log("First text:", textElements[0]);

// HTMLCollection is live - updates automatically when DOM changes
// Convert to array for array methods:
const textArray = Array.from(textElements);
textArray.forEach(el => console.log("  -", el.textContent));

// ─────────────────────────────────────────────────────────────────────────────
// 2.3 getElementsByTagName() - Select by tag name
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== getElementsByTagName ===\n");

const paragraphs = document.getElementsByTagName("p");
console.log("All paragraphs:", paragraphs);

const listItems = document.getElementsByTagName("li");
console.log("All list items:", listItems);

// Select all elements
const allElements = document.getElementsByTagName("*");
console.log("Total elements:", allElements.length);

// ─────────────────────────────────────────────────────────────────────────────
// 2.4 querySelector() - Select first match (CSS selector)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== querySelector (RECOMMENDED) ===\n");

// By ID
const containerQ = document.querySelector("#container");

// By class
const firstText = document.querySelector(".text");

// By tag
const firstParagraph = document.querySelector("p");

// Complex selectors
const activeItem = document.querySelector(".item.active");
const nestedItem = document.querySelector("#list .item");
const inputByAttr = document.querySelector("input[name='username']");
const dataAttr = document.querySelector("[data-validate='required']");

console.log("Active item:", activeItem);
console.log("Input by attribute:", inputByAttr);

// ─────────────────────────────────────────────────────────────────────────────
// 2.5 querySelectorAll() - Select all matches (returns NodeList)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== querySelectorAll (RECOMMENDED) ===\n");

// Returns static NodeList (doesn't update when DOM changes)
const allTexts = document.querySelectorAll(".text");
console.log("All .text elements:", allTexts);

// Can use forEach directly (unlike HTMLCollection)
allTexts.forEach((el, index) => {
    console.log(`  ${index}: ${el.textContent}`);
});

// Complex selectors
const allItemsInList = document.querySelectorAll("#list > li");
const oddItems = document.querySelectorAll("li:nth-child(odd)");
const multipleSelectors = document.querySelectorAll("h1, h2, h3");

// ─────────────────────────────────────────────────────────────────────────────
// 2.6 Other Selection Methods
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Other Selection Methods ===\n");

// By name attribute (for forms)
const inputsByName = document.getElementsByName("username");
console.log("Inputs by name:", inputsByName);

// Special collections
console.log("All forms:", document.forms);
console.log("All images:", document.images);
console.log("All links:", document.links);
console.log("All scripts:", document.scripts);

// Active element (currently focused)
console.log("Active element:", document.activeElement);


// ============================================================================
// 📌 SECTION 3: TRAVERSING THE DOM
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 3: TRAVERSING THE DOM");
console.log("========================================\n");

/*
 * DOM Navigation Properties:
 * 
 * Element-only (skip text/comment nodes):    All nodes:
 * - parentElement                            - parentNode
 * - children                                 - childNodes
 * - firstElementChild                        - firstChild
 * - lastElementChild                         - lastChild
 * - nextElementSibling                       - nextSibling
 * - previousElementSibling                   - previousSibling
 */

// ─────────────────────────────────────────────────────────────────────────────
// 3.1 Parent Navigation
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== PARENT NAVIGATION ===\n");

const item = document.querySelector(".item");
if (item) {
    console.log("Item:", item);
    console.log("Parent element:", item.parentElement);
    console.log("Parent node:", item.parentNode);

    // Go up multiple levels
    console.log("Grandparent:", item.parentElement?.parentElement);

    // Closest ancestor matching selector
    console.log("Closest #container:", item.closest("#container"));
    console.log("Closest ul:", item.closest("ul"));
}

// ─────────────────────────────────────────────────────────────────────────────
// 3.2 Child Navigation
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CHILD NAVIGATION ===\n");

const list = document.querySelector("#list");
if (list) {
    // Element children only
    console.log("Children (elements):", list.children);
    console.log("First element child:", list.firstElementChild);
    console.log("Last element child:", list.lastElementChild);
    console.log("Children count:", list.childElementCount);

    // All child nodes (including text, comments)
    console.log("Child nodes (all):", list.childNodes);
    console.log("First child node:", list.firstChild);
    console.log("Last child node:", list.lastChild);

    // Check if has children
    console.log("Has child nodes:", list.hasChildNodes());
}

// ─────────────────────────────────────────────────────────────────────────────
// 3.3 Sibling Navigation
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SIBLING NAVIGATION ===\n");

const secondItem = document.querySelector(".item:nth-child(2)");
if (secondItem) {
    console.log("Current:", secondItem);
    console.log("Previous sibling:", secondItem.previousElementSibling);
    console.log("Next sibling:", secondItem.nextElementSibling);
}

// Get all siblings
function getSiblings(element) {
    return Array.from(element.parentElement.children)
        .filter(child => child !== element);
}

console.log("All siblings:", getSiblings(secondItem));


// ============================================================================
// 📌 SECTION 4: MODIFYING ELEMENT CONTENT
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 4: MODIFYING CONTENT");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 4.1 textContent - Plain text
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== textContent ===\n");

const element = document.querySelector(".title");
if (element) {
    // Get text content
    console.log("Original text:", element.textContent);

    // Set text content (escapes HTML)
    element.textContent = "New Title";
    console.log("After change:", element.textContent);

    // HTML entities are escaped
    element.textContent = "<strong>Bold</strong>"; // Shows as literal text
}

// ─────────────────────────────────────────────────────────────────────────────
// 4.2 innerHTML - HTML content
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== innerHTML ===\n");

const container2 = document.querySelector("#container");
if (container2) {
    // Get HTML content
    console.log("Original HTML:", container2.innerHTML.substring(0, 100) + "...");

    // Set HTML content (parses HTML)
    // ⚠️ WARNING: Be careful with user input - XSS risk!
    container2.innerHTML = `
        <h2>Updated Content</h2>
        <p>This is <strong>new</strong> HTML content</p>
    `;

    // Append HTML
    container2.innerHTML += "<p>Appended paragraph</p>";
}

// ─────────────────────────────────────────────────────────────────────────────
// 4.3 outerHTML - Include element itself
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== outerHTML ===\n");

const para = document.querySelector("p");
if (para) {
    // Get outer HTML (includes the element itself)
    console.log("outerHTML:", para.outerHTML);

    // Replace entire element
    para.outerHTML = "<div class='replaced'>I replaced the paragraph</div>";
}

// ─────────────────────────────────────────────────────────────────────────────
// 4.4 innerText vs textContent
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== innerText vs textContent ===\n");

/*
 * textContent:
 * - Returns ALL text content including hidden elements
 * - Faster (doesn't trigger reflow)
 * - Preserves whitespace formatting
 * 
 * innerText:
 * - Returns VISIBLE text only
 * - Slower (triggers reflow to calculate visibility)
 * - Removes extra whitespace
 */

const hiddenExample = document.createElement("div");
hiddenExample.innerHTML = `
    <p>Visible text</p>
    <p style="display: none">Hidden text</p>
`;
document.body.appendChild(hiddenExample);

console.log("textContent:", hiddenExample.textContent);
console.log("innerText:", hiddenExample.innerText);


// ============================================================================
// 📌 SECTION 5: MODIFYING ATTRIBUTES AND PROPERTIES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 5: ATTRIBUTES & PROPERTIES");
console.log("========================================\n");

/*
 * Attributes vs Properties:
 * - Attributes: Defined in HTML (initial values)
 * - Properties: Current values in the DOM object
 * 
 * They can differ! For example:
 * <input value="initial"> -> attribute: "initial"
 * After user types "hello" -> property: "hello", attribute: still "initial"
 */

// ─────────────────────────────────────────────────────────────────────────────
// 5.1 getAttribute() / setAttribute() / removeAttribute()
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== Attribute Methods ===\n");

const input = document.querySelector("input");
if (input) {
    // Get attribute
    console.log("type attribute:", input.getAttribute("type"));
    console.log("name attribute:", input.getAttribute("name"));

    // Set attribute
    input.setAttribute("placeholder", "Enter your username");
    input.setAttribute("maxlength", "50");

    // Check if attribute exists
    console.log("Has required?:", input.hasAttribute("required"));

    // Remove attribute
    input.removeAttribute("data-validate");

    // Get all attributes
    console.log("All attributes:", input.attributes);
    for (const attr of input.attributes) {
        console.log(`  ${attr.name} = ${attr.value}`);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// 5.2 Direct Property Access
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Direct Properties ===\n");

const link = document.createElement("a");
link.href = "https://example.com/page?query=1";

// Attribute returns what's in HTML
link.setAttribute("href", "/page");
console.log("getAttribute('href'):", link.getAttribute("href")); // "/page"

// Property returns computed value
console.log("link.href property:", link.href); // Full URL

// Common properties
console.log("link.id:", link.id);
console.log("link.className:", link.className);
console.log("link.tagName:", link.tagName);

// Boolean properties
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = true;
checkbox.disabled = false;

console.log("checkbox.checked:", checkbox.checked);
console.log("checkbox.disabled:", checkbox.disabled);

// ─────────────────────────────────────────────────────────────────────────────
// 5.3 Data Attributes
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Data Attributes ===\n");

/*
 * HTML: <div id="user" data-user-id="123" data-role="admin" data-is-active="true">
 */

const userElement = document.createElement("div");
userElement.dataset.userId = "123";
userElement.dataset.role = "admin";
userElement.dataset.isActive = "true";

// Access via dataset (camelCase)
console.log("dataset.userId:", userElement.dataset.userId);
console.log("dataset.role:", userElement.dataset.role);

// Note: data-* becomes camelCase
// data-user-id -> dataset.userId
// data-is-active -> dataset.isActive

// All data attributes
console.log("All data attributes:", userElement.dataset);

// Set new data attribute
userElement.dataset.createdAt = Date.now();

// Remove data attribute
delete userElement.dataset.isActive;


// ============================================================================
// 📌 SECTION 6: MODIFYING STYLES AND CLASSES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 6: STYLES & CLASSES");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 6.1 Inline Styles (element.style)
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== Inline Styles ===\n");

const box = document.createElement("div");
document.body.appendChild(box);

// Set individual properties (camelCase)
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "20px";
box.style.margin = "10px";
box.style.borderRadius = "5px";
box.style.fontSize = "16px";

// CSS property names become camelCase
// background-color -> backgroundColor
// font-size -> fontSize
// border-radius -> borderRadius

// Set multiple styles at once
box.style.cssText = "width: 200px; height: 100px; text-align: center;";

// Get style value
console.log("Background:", box.style.backgroundColor);

// Remove style
box.style.margin = "";  // Empty string removes
box.style.removeProperty("padding");

// ─────────────────────────────────────────────────────────────────────────────
// 6.2 Computed Styles
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Computed Styles ===\n");

// Get actual computed style (includes CSS files, inherited styles)
const computedStyle = getComputedStyle(box);

console.log("Computed width:", computedStyle.width);
console.log("Computed height:", computedStyle.height);
console.log("Computed display:", computedStyle.display);
console.log("Computed font:", computedStyle.fontFamily);

// Get pseudo-element styles
// const beforeStyle = getComputedStyle(element, "::before");

// ─────────────────────────────────────────────────────────────────────────────
// 6.3 classList API
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== classList API (RECOMMENDED) ===\n");

const card = document.createElement("div");
card.className = "card"; // Initial class

// Add class(es)
card.classList.add("active");
card.classList.add("featured", "highlighted"); // Multiple
console.log("After add:", card.className);

// Remove class(es)
card.classList.remove("highlighted");
console.log("After remove:", card.className);

// Toggle class
card.classList.toggle("active");    // Remove (was present)
console.log("After toggle off:", card.className);

card.classList.toggle("active");    // Add (was absent)
console.log("After toggle on:", card.className);

// Toggle with condition
card.classList.toggle("dark", true);  // Force add
card.classList.toggle("light", false); // Force remove

// Check if has class
console.log("Has 'card'?:", card.classList.contains("card"));    // true
console.log("Has 'hidden'?:", card.classList.contains("hidden")); // false

// Replace class
card.classList.replace("featured", "premium");
console.log("After replace:", card.className);

// Iterate classes
console.log("All classes:");
card.classList.forEach(cls => console.log(`  - ${cls}`));

// ─────────────────────────────────────────────────────────────────────────────
// 6.4 className Property
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== className Property ===\n");

// Get all classes as string
console.log("className:", card.className);

// Set all classes (replaces existing)
card.className = "new-class another-class";
console.log("After set:", card.className);

// Check class with string methods (less reliable)
const hasCard = card.className.split(" ").includes("card");


// ============================================================================
// 📌 SECTION 7: CREATING AND INSERTING ELEMENTS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 7: CREATING & INSERTING");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 7.1 Creating Elements
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== Creating Elements ===\n");

// Create element
const newDiv = document.createElement("div");
newDiv.id = "new-element";
newDiv.className = "box created";
newDiv.textContent = "I was created with JavaScript!";

// Create text node
const textNode = document.createTextNode("Plain text node");

// Create document fragment (for batch operations)
const fragment = document.createDocumentFragment();
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

// Clone element
const clone = newDiv.cloneNode(true);  // true = deep clone (with children)
clone.id = "cloned-element";

console.log("Created div:", newDiv);
console.log("Cloned div:", clone);

// ─────────────────────────────────────────────────────────────────────────────
// 7.2 Inserting Elements - appendChild / insertBefore
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== appendChild / insertBefore ===\n");

const parent = document.createElement("div");
parent.id = "parent";

const child1 = document.createElement("p");
child1.textContent = "First child";

const child2 = document.createElement("p");
child2.textContent = "Second child";

const child3 = document.createElement("p");
child3.textContent = "Third child";

// appendChild - adds to end
parent.appendChild(child1);
parent.appendChild(child3);

// insertBefore - insert before reference element
parent.insertBefore(child2, child3);

console.log("Parent HTML:", parent.innerHTML);

// Append fragment (efficient batch insert)
const list2 = document.createElement("ul");
list2.appendChild(fragment); // All items added at once

// ─────────────────────────────────────────────────────────────────────────────
// 7.3 Modern Insertion Methods
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Modern Methods (RECOMMENDED) ===\n");

const container3 = document.createElement("div");
container3.id = "modern-container";
container3.innerHTML = "<p>Original content</p>";

// append() - add to end (can add multiple, including strings)
container3.append("Text after ", document.createElement("span"), " more text");

// prepend() - add to beginning
const header = document.createElement("h1");
header.textContent = "Header";
container3.prepend(header);

// before() - insert before element
const para2 = container3.querySelector("p");
const newPara = document.createElement("p");
newPara.textContent = "Inserted before";
para2.before(newPara);

// after() - insert after element
const afterPara = document.createElement("p");
afterPara.textContent = "Inserted after";
para2.after(afterPara);

console.log("Final HTML:", container3.innerHTML);

// ─────────────────────────────────────────────────────────────────────────────
// 7.4 insertAdjacentHTML / insertAdjacentElement / insertAdjacentText
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== insertAdjacent Methods ===\n");

/*
 * Positions:
 * 'beforebegin' - Before the element
 * 'afterbegin'  - Inside, before first child
 * 'beforeend'   - Inside, after last child
 * 'afterend'    - After the element
 * 
 * <!-- beforebegin -->
 * <div>
 *   <!-- afterbegin -->
 *   content
 *   <!-- beforeend -->
 * </div>
 * <!-- afterend -->
 */

const target = document.createElement("div");
target.id = "target";
target.innerHTML = "<span>Original</span>";

// Insert HTML string
target.insertAdjacentHTML("beforeend", "<p>Before end</p>");
target.insertAdjacentHTML("afterbegin", "<p>After begin</p>");

// Insert element
const newSpan = document.createElement("span");
newSpan.textContent = "New span";
target.insertAdjacentElement("beforeend", newSpan);

// Insert text
target.insertAdjacentText("beforeend", " Some text");

console.log("Result:", target.innerHTML);


// ============================================================================
// 📌 SECTION 8: REMOVING AND REPLACING ELEMENTS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 8: REMOVING & REPLACING");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 8.1 Removing Elements
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== Removing Elements ===\n");

const removeContainer = document.createElement("div");
removeContainer.innerHTML = `
    <p id="remove-me">Remove me</p>
    <p id="keep-me">Keep me</p>
    <p id="also-remove">Also remove</p>
`;

// Modern: element.remove()
const toRemove = removeContainer.querySelector("#remove-me");
toRemove.remove();
console.log("After remove():", removeContainer.innerHTML);

// Legacy: parent.removeChild(child)
const alsoRemove = removeContainer.querySelector("#also-remove");
removeContainer.removeChild(alsoRemove);
console.log("After removeChild():", removeContainer.innerHTML);

// Remove all children
removeContainer.innerHTML = ""; // Quick way
// OR
while (removeContainer.firstChild) {
    removeContainer.removeChild(removeContainer.firstChild);
}

// ─────────────────────────────────────────────────────────────────────────────
// 8.2 Replacing Elements
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Replacing Elements ===\n");

const replaceContainer = document.createElement("div");
replaceContainer.innerHTML = `
    <p id="old-para">Old paragraph</p>
`;

const oldPara = replaceContainer.querySelector("#old-para");

// Modern: element.replaceWith()
const newElement = document.createElement("div");
newElement.textContent = "Replaced with div";
oldPara.replaceWith(newElement);
console.log("After replaceWith():", replaceContainer.innerHTML);

// Can replace with multiple nodes
// oldElement.replaceWith(node1, node2, "text");

// Legacy: parent.replaceChild(new, old)
const anotherNew = document.createElement("span");
anotherNew.textContent = "Replaced again";
replaceContainer.replaceChild(anotherNew, newElement);
console.log("After replaceChild():", replaceContainer.innerHTML);

// ─────────────────────────────────────────────────────────────────────────────
// 8.3 Reordering Elements
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Reordering Elements ===\n");

const listContainer = document.createElement("ul");
listContainer.innerHTML = `
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
`;

const items = listContainer.querySelectorAll("li");

// Move last to first
listContainer.prepend(items[2]);
console.log("Last to first:", listContainer.innerHTML);

// Move first to last
listContainer.append(items[0]);
console.log("First to last:", listContainer.innerHTML);


// ============================================================================
// 📌 SECTION 9: EVENT HANDLING
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 9: EVENT HANDLING");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 9.1 Adding Event Listeners
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== addEventListener (RECOMMENDED) ===\n");

const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// Basic syntax
button.addEventListener("click", function (event) {
    console.log("Button clicked!");
    console.log("Event type:", event.type);
    console.log("Target:", event.target);
});

// Arrow function
button.addEventListener("click", (e) => {
    console.log("Arrow handler:", e.target.textContent);
});

// Named function (can be removed later)
function handleClick(e) {
    console.log("Named handler");
}
button.addEventListener("click", handleClick);

// Options
button.addEventListener("click", () => {
    console.log("Once handler (runs only once)");
}, { once: true });

button.addEventListener("click", () => {
    console.log("Capture phase handler");
}, { capture: true });

// ─────────────────────────────────────────────────────────────────────────────
// 9.2 Removing Event Listeners
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== removeEventListener ===\n");

// Must use same function reference
button.removeEventListener("click", handleClick);

// Common mistake:
// button.removeEventListener("click", () => {}); // Won't work!

// Using AbortController (modern approach)
const controller = new AbortController();

button.addEventListener("click", () => {
    console.log("Abortable handler");
}, { signal: controller.signal });

// Remove later
controller.abort(); // Removes the listener

// ─────────────────────────────────────────────────────────────────────────────
// 9.3 Event Object
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Event Object ===\n");

const eventDemo = document.createElement("div");
eventDemo.innerHTML = '<button id="event-btn">Event Demo</button>';
document.body.appendChild(eventDemo);

const eventBtn = eventDemo.querySelector("#event-btn");
eventBtn.addEventListener("click", function (event) {
    // Event properties
    console.log("type:", event.type);              // "click"
    console.log("target:", event.target);          // Element clicked
    console.log("currentTarget:", event.currentTarget); // Element with listener
    console.log("timeStamp:", event.timeStamp);    // When event occurred
    console.log("isTrusted:", event.isTrusted);    // User-initiated?

    // Mouse event properties
    console.log("clientX/Y:", event.clientX, event.clientY); // Viewport position
    console.log("pageX/Y:", event.pageX, event.pageY);       // Page position
    console.log("button:", event.button);          // 0=left, 1=middle, 2=right

    // Modifier keys
    console.log("ctrlKey:", event.ctrlKey);
    console.log("shiftKey:", event.shiftKey);
    console.log("altKey:", event.altKey);
    console.log("metaKey:", event.metaKey);        // Cmd on Mac
});

// ─────────────────────────────────────────────────────────────────────────────
// 9.4 Common Events
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Common Events ===\n");

/*
 * MOUSE EVENTS:
 * click, dblclick, mousedown, mouseup, mousemove
 * mouseenter, mouseleave (don't bubble)
 * mouseover, mouseout (bubble)
 * contextmenu (right-click)
 * 
 * KEYBOARD EVENTS:
 * keydown, keyup (keypress is deprecated)
 * 
 * FOCUS EVENTS:
 * focus, blur (don't bubble)
 * focusin, focusout (bubble)
 * 
 * FORM EVENTS:
 * submit, reset, change, input
 * 
 * WINDOW/DOCUMENT EVENTS:
 * load, DOMContentLoaded, unload, beforeunload
 * resize, scroll
 * 
 * TOUCH EVENTS (mobile):
 * touchstart, touchmove, touchend, touchcancel
 * 
 * DRAG EVENTS:
 * dragstart, drag, dragend
 * dragenter, dragover, dragleave, drop
 */

// Keyboard event example
document.addEventListener("keydown", (e) => {
    console.log(`Key: ${e.key}, Code: ${e.code}`);

    if (e.ctrlKey && e.key === "s") {
        e.preventDefault(); // Prevent browser default
        console.log("Custom save!");
    }
});

// ─────────────────────────────────────────────────────────────────────────────
// 9.5 Event Propagation
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Event Propagation ===\n");

/*
 * Event Phases:
 * 1. Capture phase: Window -> Document -> HTML -> ... -> Target
 * 2. Target phase: Event reaches target
 * 3. Bubble phase: Target -> ... -> HTML -> Document -> Window
 * 
 * Most events bubble (trigger on parent elements)
 */

const outer = document.createElement("div");
outer.id = "outer";
outer.innerHTML = `
    <div id="inner">
        <button id="btn">Click</button>
    </div>
`;
document.body.appendChild(outer);

outer.addEventListener("click", () => console.log("Outer clicked"));
outer.querySelector("#inner").addEventListener("click", () => console.log("Inner clicked"));
outer.querySelector("#btn").addEventListener("click", () => console.log("Button clicked"));

// Click button -> logs: "Button clicked", "Inner clicked", "Outer clicked"

// Stop propagation
outer.querySelector("#btn").addEventListener("click", (e) => {
    console.log("Stopping propagation");
    e.stopPropagation(); // Prevents bubbling
});

// Prevent default behavior
const linkDemo = document.createElement("a");
linkDemo.href = "https://example.com";
linkDemo.textContent = "Link";
linkDemo.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents navigation
    console.log("Link click prevented");
});


// ============================================================================
// 📌 SECTION 10: EVENT DELEGATION
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 10: EVENT DELEGATION");
console.log("========================================\n");

/*
 * Event Delegation: Instead of adding listeners to each child,
 * add ONE listener to a parent and check the target.
 * 
 * Benefits:
 * - Better performance (fewer listeners)
 * - Works with dynamically added elements
 * - Less memory usage
 */

console.log("=== Event Delegation ===\n");

const todoList = document.createElement("ul");
todoList.id = "todo-list";
todoList.innerHTML = `
    <li data-id="1">Task 1 <button class="delete">X</button></li>
    <li data-id="2">Task 2 <button class="delete">X</button></li>
    <li data-id="3">Task 3 <button class="delete">X</button></li>
`;
document.body.appendChild(todoList);

// ❌ Bad: Individual listeners
// todoList.querySelectorAll('.delete').forEach(btn => {
//     btn.addEventListener('click', handleDelete);
// });

// ✅ Good: Event delegation
todoList.addEventListener("click", (e) => {
    // Check if clicked element is a delete button
    if (e.target.classList.contains("delete")) {
        const li = e.target.closest("li");
        const id = li.dataset.id;
        console.log(`Deleting task ${id}`);
        li.remove();
    }

    // Check if clicked on li (to toggle complete)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
        console.log("Toggled:", e.target.dataset.id);
    }
});

// Works with dynamically added items!
function addTodo(text) {
    const newLi = document.createElement("li");
    newLi.dataset.id = Date.now();
    newLi.innerHTML = `${text} <button class="delete">X</button>`;
    todoList.appendChild(newLi);
}

addTodo("New dynamic task");

// ─────────────────────────────────────────────────────────────────────────────
// Delegation with matches()
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== matches() for Delegation ===\n");

document.addEventListener("click", (e) => {
    // Check if element matches selector
    if (e.target.matches(".btn-primary")) {
        console.log("Primary button clicked");
    }

    if (e.target.matches("[data-action='submit']")) {
        console.log("Submit action clicked");
    }
});


// ============================================================================
// 📌 SECTION 11: FORM HANDLING
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 11: FORM HANDLING");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 11.1 Accessing Form Elements
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== Form Access ===\n");

const form = document.createElement("form");
form.id = "signup-form";
form.innerHTML = `
    <input type="text" name="username" id="username" placeholder="Username">
    <input type="email" name="email" id="email" placeholder="Email">
    <input type="password" name="password" id="password" placeholder="Password">
    <select name="role" id="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
    </select>
    <input type="checkbox" name="terms" id="terms"> Accept Terms
    <button type="submit">Submit</button>
`;
document.body.appendChild(form);

// Access form by ID
const signupForm = document.getElementById("signup-form");

// Access form via document.forms
console.log("All forms:", document.forms);
console.log("Form by name:", document.forms["signup-form"]);

// Access elements by name
console.log("Username input:", signupForm.elements.username);
console.log("Email input:", signupForm.elements["email"]);

// ─────────────────────────────────────────────────────────────────────────────
// 11.2 Getting and Setting Values
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Form Values ===\n");

const usernameInput = form.querySelector("#username");
const emailInput = form.querySelector("#email");
const roleSelect = form.querySelector("#role");
const termsCheckbox = form.querySelector("#terms");

// Text inputs
usernameInput.value = "john_doe";
console.log("Username:", usernameInput.value);

// Select dropdown
roleSelect.value = "admin";
console.log("Role:", roleSelect.value);
console.log("Selected text:", roleSelect.options[roleSelect.selectedIndex].text);

// Checkbox
termsCheckbox.checked = true;
console.log("Terms accepted:", termsCheckbox.checked);

// Get all form data at once
const formData = new FormData(form);
console.log("FormData entries:");
for (const [key, value] of formData.entries()) {
    console.log(`  ${key}: ${value}`);
}

// Convert to object
const formObject = Object.fromEntries(formData);
console.log("Form as object:", formObject);

// ─────────────────────────────────────────────────────────────────────────────
// 11.3 Form Events
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Form Events ===\n");

// Submit event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const data = new FormData(form);
    console.log("Form submitted:", Object.fromEntries(data));

    // Validate
    if (!data.get("username")) {
        console.log("Username is required!");
        return;
    }

    // Submit via fetch
    // fetch('/api/signup', { method: 'POST', body: data });
});

// Input event (fires on every keystroke)
usernameInput.addEventListener("input", (e) => {
    console.log("Typing:", e.target.value);
});

// Change event (fires when value changes and loses focus)
roleSelect.addEventListener("change", (e) => {
    console.log("Role changed to:", e.target.value);
});

// Focus and blur
emailInput.addEventListener("focus", () => {
    console.log("Email input focused");
});

emailInput.addEventListener("blur", () => {
    console.log("Email input lost focus");
    // Validate on blur
    if (!emailInput.value.includes("@")) {
        console.log("Invalid email!");
    }
});

// ─────────────────────────────────────────────────────────────────────────────
// 11.4 Form Validation
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Form Validation ===\n");

// HTML5 Validation attributes:
// required, minlength, maxlength, pattern, type, min, max

const validationForm = document.createElement("form");
validationForm.innerHTML = `
    <input type="text" name="name" required minlength="2" maxlength="50">
    <input type="email" name="email" required>
    <input type="tel" name="phone" pattern="[0-9]{10}">
    <input type="number" name="age" min="18" max="100">
    <button type="submit">Submit</button>
`;

// Check validity
const nameInput = validationForm.querySelector("[name='name']");
nameInput.value = "A";

console.log("Is valid:", nameInput.checkValidity());
console.log("Validity state:", nameInput.validity);
// validity.valueMissing, validity.tooShort, validity.patternMismatch, etc.

// Custom validation message
nameInput.setCustomValidity("Please enter a valid name");

// Report validity (shows browser validation UI)
// nameInput.reportValidity();

// Clear custom validation
nameInput.setCustomValidity("");


// ============================================================================
// 📌 SECTION 12: PERFORMANCE TIPS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 12: PERFORMANCE TIPS");
console.log("========================================\n");

console.log(`
📚 DOM MANIPULATION PERFORMANCE TIPS:

1. MINIMIZE DOM ACCESS:
   ❌ for (let i = 0; i < list.children.length; i++) { }
   ✅ const len = list.children.length;
      for (let i = 0; i < len; i++) { }

2. BATCH DOM UPDATES:
   ❌ items.forEach(item => container.appendChild(item));
   ✅ const fragment = document.createDocumentFragment();
      items.forEach(item => fragment.appendChild(item));
      container.appendChild(fragment);

3. USE EFFICIENT SELECTORS:
   ❌ document.querySelectorAll("div .item .text")
   ✅ document.getElementById("container").querySelectorAll(".text")

4. AVOID LAYOUT THRASHING:
   ❌ elements.forEach(el => {
        el.style.width = el.offsetWidth + 10 + 'px'; // Read + Write
      });
   ✅ const widths = elements.map(el => el.offsetWidth); // Read all
      elements.forEach((el, i) => el.style.width = widths[i] + 10 + 'px'); // Write all

5. USE EVENT DELEGATION:
   ❌ items.forEach(item => item.addEventListener('click', handler));
   ✅ container.addEventListener('click', (e) => {
        if (e.target.matches('.item')) handler(e);
      });

6. USE CLASSLIST OVER CLASSNAME:
   ❌ element.className = element.className + ' active';
   ✅ element.classList.add('active');

7. USE TEXTCONTENT OVER INNERHTML:
   ❌ element.innerHTML = userInput; // XSS risk!
   ✅ element.textContent = userInput;

8. CACHE REFERENCES:
   ❌ function update() {
        document.querySelector('#status').textContent = 'Loading';
      }
   ✅ const status = document.querySelector('#status');
      function update() { status.textContent = 'Loading'; }

9. USE CSS CLASSES FOR STYLING:
   ❌ el.style.color = 'red';
      el.style.fontSize = '16px';
      el.style.fontWeight = 'bold';
   ✅ el.classList.add('highlighted');

10. DEBOUNCE EXPENSIVE HANDLERS:
    ❌ window.addEventListener('scroll', expensiveHandler);
    ✅ window.addEventListener('scroll', debounce(expensiveHandler, 100));
`);


// ============================================================================
// 📌 SECTION 13: SUMMARY AND REFERENCE
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 13: SUMMARY");
console.log("========================================\n");

console.log(`
📚 DOM MANIPULATION REFERENCE TABLE:

SELECTING ELEMENTS:
┌─────────────────────────────────────────────────────────────────────┐
│ getElementById(id)              │ Single element or null           │
│ getElementsByClassName(class)   │ Live HTMLCollection              │
│ getElementsByTagName(tag)       │ Live HTMLCollection              │
│ querySelector(css)              │ First match or null (RECOMMENDED)│
│ querySelectorAll(css)           │ Static NodeList (RECOMMENDED)    │
└─────────────────────────────────────────────────────────────────────┘

TRAVERSING:
┌─────────────────────────────────────────────────────────────────────┐
│ parentElement / parentNode      │ Go up                            │
│ children / childNodes           │ Go down (all children)           │
│ firstElementChild / lastElementChild │ First/last child            │
│ nextElementSibling / previousElementSibling │ Go sideways          │
│ closest(selector)               │ Nearest ancestor matching        │
└─────────────────────────────────────────────────────────────────────┘

MODIFYING CONTENT:
┌─────────────────────────────────────────────────────────────────────┐
│ textContent                     │ Plain text (safer)               │
│ innerHTML                       │ HTML content (XSS risk)          │
│ outerHTML                       │ Element + content                │
└─────────────────────────────────────────────────────────────────────┘

ATTRIBUTES:
┌─────────────────────────────────────────────────────────────────────┐
│ getAttribute(name)              │ Get attribute value              │
│ setAttribute(name, value)       │ Set attribute                    │
│ removeAttribute(name)           │ Remove attribute                 │
│ hasAttribute(name)              │ Check existence                  │
│ dataset.propertyName            │ Access data-* attributes         │
└─────────────────────────────────────────────────────────────────────┘

CLASSES:
┌─────────────────────────────────────────────────────────────────────┐
│ classList.add(class)            │ Add class                        │
│ classList.remove(class)         │ Remove class                     │
│ classList.toggle(class)         │ Toggle class                     │
│ classList.contains(class)       │ Check class                      │
│ classList.replace(old, new)     │ Replace class                    │
└─────────────────────────────────────────────────────────────────────┘

CREATING/INSERTING:
┌─────────────────────────────────────────────────────────────────────┐
│ createElement(tag)              │ Create element                   │
│ createTextNode(text)            │ Create text node                 │
│ cloneNode(deep)                 │ Clone element                    │
│ append() / prepend()            │ Add to end/start (RECOMMENDED)   │
│ before() / after()              │ Insert adjacent                  │
│ insertAdjacentHTML(pos, html)   │ Insert HTML at position          │
└─────────────────────────────────────────────────────────────────────┘

REMOVING/REPLACING:
┌─────────────────────────────────────────────────────────────────────┐
│ element.remove()                │ Remove element (RECOMMENDED)     │
│ parent.removeChild(child)       │ Remove child (legacy)            │
│ element.replaceWith(new)        │ Replace element                  │
└─────────────────────────────────────────────────────────────────────┘

EVENTS:
┌─────────────────────────────────────────────────────────────────────┐
│ addEventListener(type, handler) │ Add listener (RECOMMENDED)       │
│ removeEventListener(type, fn)   │ Remove listener                  │
│ e.preventDefault()              │ Prevent default action           │
│ e.stopPropagation()             │ Stop bubbling                    │
│ e.target                        │ Element that triggered event     │
│ e.currentTarget                 │ Element with listener            │
└─────────────────────────────────────────────────────────────────────┘
`);

console.log("🎉 End of Class 10 - DOM Manipulation Complete Guide!");