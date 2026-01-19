// ============================================================================
// 📚 CLASS 08 - JAVASCRIPT FUNCTIONS - COMPLETE GUIDE
// ============================================================================
// This file contains educational examples about:
// 1. Function Declarations and Expressions
// 2. Arrow Functions
// 3. Parameters and Arguments
// 4. Return Values
// 5. Scope and Closures
// 6. Higher-Order Functions
// 7. Callback Functions
// 8. Immediately Invoked Function Expressions (IIFE)
// 9. Recursion
// 10. Function Methods (call, apply, bind)
// 11. Generator Functions
// 12. Async Functions
// 13. Best Practices
// ============================================================================

console.log("🚀 Starting the study of JavaScript Functions!");


// ============================================================================
// 📌 SECTION 1: FUNCTION DECLARATIONS AND EXPRESSIONS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 1: FUNCTION DECLARATIONS");
console.log("========================================\n");

/*
 * Functions are reusable blocks of code that perform a specific task.
 * They are fundamental building blocks in JavaScript.
 * 
 * Functions can:
 * - Accept input (parameters)
 * - Process data
 * - Return output (return value)
 * - Be assigned to variables
 * - Be passed as arguments
 * - Be returned from other functions
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1.1 FUNCTION DECLARATION
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== FUNCTION DECLARATION ===\n");

// Syntax: function name(parameters) { body }
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob"));   // "Hello, Bob!"

// Function declarations are HOISTED (can be called before definition)
console.log("Hoisting demo:", hoistedFunction());

function hoistedFunction() {
    return "I was called before my definition!";
}

// Function without parameters
function sayHello() {
    console.log("Hello, World!");
}
sayHello();

// Function with multiple parameters
function add(a, b) {
    return a + b;
}
console.log("add(5, 3) =", add(5, 3)); // 8

// ─────────────────────────────────────────────────────────────────────────────
// 1.2 FUNCTION EXPRESSION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FUNCTION EXPRESSION ===\n");

// Function stored in a variable
const multiply = function (a, b) {
    return a * b;
};

console.log("multiply(4, 5) =", multiply(4, 5)); // 20

// Function expressions are NOT hoisted
// console.log(notHoisted()); // ❌ Error: notHoisted is not defined
const notHoisted = function () {
    return "I must be defined before being called";
};
console.log(notHoisted());

// ─────────────────────────────────────────────────────────────────────────────
// 1.3 NAMED FUNCTION EXPRESSION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== NAMED FUNCTION EXPRESSION ===\n");

// Named function expressions are useful for recursion and debugging
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // Can reference itself by name
};

console.log("factorial(5) =", factorial(5)); // 120

// The name is only accessible inside the function
// console.log(fact(5)); // ❌ Error: fact is not defined


// ============================================================================
// 📌 SECTION 2: ARROW FUNCTIONS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 2: ARROW FUNCTIONS");
console.log("========================================\n");

/*
 * Arrow functions (ES6) provide a shorter syntax.
 * Key differences from regular functions:
 * - No own 'this' binding (inherits from parent scope)
 * - No 'arguments' object
 * - Cannot be used as constructors
 * - No 'prototype' property
 */

// ─────────────────────────────────────────────────────────────────────────────
// 2.1 BASIC ARROW FUNCTION SYNTAX
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== ARROW FUNCTION SYNTAX ===\n");

// Full syntax
const addArrow = (a, b) => {
    return a + b;
};
console.log("addArrow(3, 4) =", addArrow(3, 4));

// Implicit return (single expression)
const addShort = (a, b) => a + b;
console.log("addShort(5, 6) =", addShort(5, 6));

// Single parameter (parentheses optional)
const double = x => x * 2;
console.log("double(7) =", double(7));

// No parameters (parentheses required)
const getPI = () => 3.14159;
console.log("getPI() =", getPI());

// Multiple statements (braces and return required)
const processNumber = n => {
    const doubled = n * 2;
    const squared = n ** 2;
    return { doubled, squared };
};
console.log("processNumber(5) =", processNumber(5));

// ─────────────────────────────────────────────────────────────────────────────
// 2.2 RETURNING OBJECTS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== RETURNING OBJECTS ===\n");

// ⚠️ Wrap object literal in parentheses for implicit return
const createPerson = (name, age) => ({ name, age });
console.log("createPerson:", createPerson("John", 30));

// Common mistake (doesn't work as expected)
// const wrong = () => { name: "John" }; // Returns undefined!

// ─────────────────────────────────────────────────────────────────────────────
// 2.3 ARROW FUNCTIONS VS REGULAR FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARROW VS REGULAR FUNCTIONS ===\n");

// 'this' binding difference
const obj = {
    name: "MyObject",

    // Regular function: 'this' refers to the object
    regularMethod: function () {
        console.log("Regular 'this':", this.name);
    },

    // Arrow function: 'this' inherited from enclosing scope
    arrowMethod: () => {
        console.log("Arrow 'this':", this.name); // undefined (global/module scope)
    },

    // Common use case: arrow in callback
    delayedGreet: function () {
        setTimeout(() => {
            // Arrow inherits 'this' from delayedGreet
            console.log("Delayed greeting from:", this.name);
        }, 100);
    }
};

obj.regularMethod(); // "MyObject"
obj.arrowMethod();   // undefined
obj.delayedGreet();  // "MyObject" (after 100ms)

// No 'arguments' object in arrow functions
function regularWithArgs() {
    console.log("Regular arguments:", arguments.length);
}
regularWithArgs(1, 2, 3); // 3

const arrowWithArgs = (...args) => {
    // Use rest parameters instead
    console.log("Arrow rest args:", args.length);
};
arrowWithArgs(1, 2, 3); // 3


// ============================================================================
// 📌 SECTION 3: PARAMETERS AND ARGUMENTS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 3: PARAMETERS & ARGUMENTS");
console.log("========================================\n");

/*
 * Parameters: Variables listed in function definition
 * Arguments: Actual values passed when calling function
 */

// ─────────────────────────────────────────────────────────────────────────────
// 3.1 DEFAULT PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== DEFAULT PARAMETERS ===\n");

// ES6 default parameters
function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());                    // "Hello, Guest!"
console.log(greetWithDefault("Alice"));             // "Hello, Alice!"
console.log(greetWithDefault("Bob", "Hi"));         // "Hi, Bob!"
console.log(greetWithDefault(undefined, "Hey"));    // "Hey, Guest!"

// Default with expressions
function createTimestamp(date = new Date()) {
    return date.toISOString();
}
console.log("Timestamp:", createTimestamp());

// Default using previous parameters
function createFullName(first, last, full = `${first} ${last}`) {
    return full;
}
console.log(createFullName("John", "Doe")); // "John Doe"

// ─────────────────────────────────────────────────────────────────────────────
// 3.2 REST PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== REST PARAMETERS ===\n");

// Collect remaining arguments into an array
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log("sum(1, 2, 3) =", sum(1, 2, 3));       // 6
console.log("sum(1, 2, 3, 4, 5) =", sum(1, 2, 3, 4, 5)); // 15

// Mix regular and rest parameters
function introduce(greeting, ...names) {
    return `${greeting} ${names.join(", ")}!`;
}
console.log(introduce("Hello", "Alice", "Bob", "Charlie"));

// Rest must be last parameter
// function wrong(...args, last) {} // ❌ SyntaxError

// ─────────────────────────────────────────────────────────────────────────────
// 3.3 SPREAD OPERATOR IN FUNCTION CALLS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SPREAD IN FUNCTION CALLS ===\n");

function addThree(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log("Spread call:", addThree(...numbers)); // 6

// Combining values
console.log("Max:", Math.max(...[5, 10, 3, 8])); // 10

// ─────────────────────────────────────────────────────────────────────────────
// 3.4 DESTRUCTURING PARAMETERS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== DESTRUCTURING PARAMETERS ===\n");

// Object destructuring in parameters
function printUser({ name, age, city = "Unknown" }) {
    console.log(`${name}, ${age} years old, from ${city}`);
}

printUser({ name: "Alice", age: 25, city: "NYC" });
printUser({ name: "Bob", age: 30 }); // Uses default for city

// Array destructuring in parameters
function getFirstTwo([first, second]) {
    return `First: ${first}, Second: ${second}`;
}
console.log(getFirstTwo([1, 2, 3, 4])); // "First: 1, Second: 2"

// Named parameters pattern (options object)
function createUser({
    name,
    email,
    role = "user",
    active = true
} = {}) {
    return { name, email, role, active };
}

console.log(createUser({ name: "John", email: "john@example.com" }));

// ─────────────────────────────────────────────────────────────────────────────
// 3.5 ARGUMENTS OBJECT (Legacy)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARGUMENTS OBJECT ===\n");

// Available in regular functions (not arrow functions)
function showArguments() {
    console.log("Arguments:", arguments);
    console.log("Length:", arguments.length);
    console.log("First:", arguments[0]);

    // Convert to array (legacy way)
    const argsArray = Array.from(arguments);
    console.log("As array:", argsArray);
}

showArguments("a", "b", "c");

// ⚠️ Prefer rest parameters over arguments object


// ============================================================================
// 📌 SECTION 4: RETURN VALUES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 4: RETURN VALUES");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 4.1 BASIC RETURN
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== BASIC RETURN ===\n");

function square(n) {
    return n * n;
}
console.log("square(5) =", square(5)); // 25

// Function without return (returns undefined)
function noReturn() {
    console.log("Doing something...");
}
console.log("noReturn() =", noReturn()); // undefined

// Empty return (returns undefined)
function earlyExit(x) {
    if (x < 0) return; // Early exit
    return x * 2;
}
console.log("earlyExit(-5) =", earlyExit(-5)); // undefined
console.log("earlyExit(5) =", earlyExit(5));   // 10

// ─────────────────────────────────────────────────────────────────────────────
// 4.2 RETURNING MULTIPLE VALUES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== RETURNING MULTIPLE VALUES ===\n");

// Return as array
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = minMax([3, 1, 4, 1, 5, 9]);
console.log(`Min: ${min}, Max: ${max}`);

// Return as object
function getStats(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return {
        sum,
        avg: sum / numbers.length,
        count: numbers.length
    };
}

const stats = getStats([1, 2, 3, 4, 5]);
console.log("Stats:", stats);

// Destructure returned object
const { sum: totalSum, avg } = getStats([10, 20, 30]);
console.log(`Sum: ${totalSum}, Avg: ${avg}`);

// ─────────────────────────────────────────────────────────────────────────────
// 4.3 RETURNING FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== RETURNING FUNCTIONS ===\n");

// Function that returns a function
function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("triple(5) =", triple(5));     // 15
console.log("quadruple(5) =", quadruple(5)); // 20

// Arrow function version
const createAdder = amount => n => n + amount;
const addTen = createAdder(10);
console.log("addTen(5) =", addTen(5)); // 15


// ============================================================================
// 📌 SECTION 5: SCOPE AND CLOSURES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 5: SCOPE AND CLOSURES");
console.log("========================================\n");

/*
 * Scope determines the visibility/accessibility of variables.
 * 
 * Types of scope:
 * - Global scope: accessible everywhere
 * - Function scope: accessible within the function
 * - Block scope: accessible within {} (let, const)
 */

// ─────────────────────────────────────────────────────────────────────────────
// 5.1 TYPES OF SCOPE
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== TYPES OF SCOPE ===\n");

// Global scope
const globalVar = "I'm global";

function scopeDemo() {
    // Function scope
    const functionVar = "I'm function-scoped";

    if (true) {
        // Block scope
        const blockVar = "I'm block-scoped";
        var varScoped = "I'm function-scoped (var)";

        console.log(globalVar);   // ✅ Accessible
        console.log(functionVar); // ✅ Accessible
        console.log(blockVar);    // ✅ Accessible
    }

    console.log(varScoped);       // ✅ var is function-scoped
    // console.log(blockVar);     // ❌ Not accessible (block-scoped)
}

scopeDemo();
console.log(globalVar); // ✅ Accessible
// console.log(functionVar); // ❌ Not accessible

// ─────────────────────────────────────────────────────────────────────────────
// 5.2 LEXICAL SCOPE
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== LEXICAL SCOPE ===\n");

// Functions can access variables from their outer scope
const outerVar = "outer";

function outerFunction() {
    const middleVar = "middle";

    function innerFunction() {
        const innerVar = "inner";

        // Can access all outer scopes
        console.log(outerVar);  // ✅
        console.log(middleVar); // ✅
        console.log(innerVar);  // ✅
    }

    innerFunction();
}

outerFunction();

// ─────────────────────────────────────────────────────────────────────────────
// 5.3 CLOSURES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CLOSURES ===\n");

/*
 * A closure is a function that remembers the variables from
 * its outer scope even after the outer function has finished executing.
 */

function createCounter() {
    let count = 0; // This variable is "closed over"

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
console.log("Increment:", counter.increment()); // 1
console.log("Increment:", counter.increment()); // 2
console.log("Increment:", counter.increment()); // 3
console.log("Decrement:", counter.decrement()); // 2
console.log("Count:", counter.getCount());      // 2

// Each call creates a new closure with its own count
const counter2 = createCounter();
console.log("Counter2:", counter2.getCount()); // 0 (independent)

// ─────────────────────────────────────────────────────────────────────────────
// 5.4 PRACTICAL CLOSURE EXAMPLES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== PRACTICAL CLOSURE EXAMPLES ===\n");

// Private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited $${amount}. New balance: $${balance}`;
            }
            return "Invalid amount";
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew $${amount}. New balance: $${balance}`;
            }
            return "Invalid or insufficient funds";
        },
        getBalance() {
            return `Balance: $${balance}`;
        }
    };
}

const account = createBankAccount(100);
console.log(account.getBalance());      // $100
console.log(account.deposit(50));       // $150
console.log(account.withdraw(30));      // $120
// console.log(account.balance);        // undefined (private!)

// Function factory with closure
function createGreeter(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHi = createGreeter("Hi");
const sayHola = createGreeter("Hola");

console.log(sayHi("Alice"));   // "Hi, Alice!"
console.log(sayHola("Carlos")); // "Hola, Carlos!"

// Memoization with closure
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] === undefined) {
            console.log("  Computing...");
            cache[key] = fn(...args);
        } else {
            console.log("  From cache!");
        }
        return cache[key];
    };
}

const expensiveCalc = memoize((n) => {
    // Simulate expensive calculation
    return n * n;
});

console.log("First call:", expensiveCalc(5));  // Computing... 25
console.log("Second call:", expensiveCalc(5)); // From cache! 25


// ============================================================================
// 📌 SECTION 6: HIGHER-ORDER FUNCTIONS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 6: HIGHER-ORDER FUNCTIONS");
console.log("========================================\n");

/*
 * Higher-order functions are functions that:
 * - Accept functions as arguments, OR
 * - Return functions as results
 */

// ─────────────────────────────────────────────────────────────────────────────
// 6.1 FUNCTIONS AS ARGUMENTS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== FUNCTIONS AS ARGUMENTS ===\n");

// Custom higher-order function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const addFn = (x, y) => x + y;
const subtractFn = (x, y) => x - y;
const multiplyFn = (x, y) => x * y;

console.log("Apply add:", applyOperation(10, 5, addFn));      // 15
console.log("Apply subtract:", applyOperation(10, 5, subtractFn)); // 5
console.log("Apply multiply:", applyOperation(10, 5, multiplyFn)); // 50

// Array methods are higher-order functions
const nums = [1, 2, 3, 4, 5];
console.log("map:", nums.map(n => n * 2));       // [2, 4, 6, 8, 10]
console.log("filter:", nums.filter(n => n > 2)); // [3, 4, 5]
console.log("reduce:", nums.reduce((a, b) => a + b, 0)); // 15

// ─────────────────────────────────────────────────────────────────────────────
// 6.2 FUNCTIONS RETURNING FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FUNCTIONS RETURNING FUNCTIONS ===\n");

// Currying example
function multiply2(a) {
    return function (b) {
        return a * b;
    };
}

console.log("multiply(3)(4) =", multiply2(3)(4)); // 12

const multiplyBy5 = multiply2(5);
console.log("multiplyBy5(6) =", multiplyBy5(6)); // 30

// Arrow function currying
const power = base => exponent => base ** exponent;
console.log("power(2)(3) =", power(2)(3)); // 8

const square2 = power(2);
console.log("square2(10) =", square2(10)); // 1024 (2^10)

// ─────────────────────────────────────────────────────────────────────────────
// 6.3 FUNCTION COMPOSITION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FUNCTION COMPOSITION ===\n");

// Compose: right to left
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// Pipe: left to right
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const double2 = x => x * 2;
const square3 = x => x * x;

// compose: square(double(addOne(5))) = square(double(6)) = square(12) = 144
const composed = compose(square3, double2, addOne);
console.log("compose(square, double, addOne)(5) =", composed(5)); // 144

// pipe: addOne -> double -> square: 6 -> 12 -> 144
const piped = pipe(addOne, double2, square3);
console.log("pipe(addOne, double, square)(5) =", piped(5)); // 144


// ============================================================================
// 📌 SECTION 7: CALLBACK FUNCTIONS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 7: CALLBACK FUNCTIONS");
console.log("========================================\n");

/*
 * A callback is a function passed as an argument to another function,
 * to be called later (often after an async operation completes).
 */

// ─────────────────────────────────────────────────────────────────────────────
// 7.1 SYNCHRONOUS CALLBACKS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== SYNCHRONOUS CALLBACKS ===\n");

// forEach uses a synchronous callback
const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(function (fruit, index) {
    console.log(`  ${index}: ${fruit}`);
});

// Custom function with callback
function processArray(arr, callback) {
    const result = [];
    for (const item of arr) {
        result.push(callback(item));
    }
    return result;
}

const doubled = processArray([1, 2, 3], x => x * 2);
console.log("Processed:", doubled); // [2, 4, 6]

// ─────────────────────────────────────────────────────────────────────────────
// 7.2 ASYNCHRONOUS CALLBACKS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ASYNCHRONOUS CALLBACKS ===\n");

// setTimeout - executes callback after delay
console.log("Before setTimeout");

setTimeout(function () {
    console.log("Inside setTimeout (after 100ms)");
}, 100);

console.log("After setTimeout (but before callback runs)");

// setInterval - executes callback repeatedly
let intervalCount = 0;
const intervalId = setInterval(function () {
    intervalCount++;
    console.log(`  Interval tick ${intervalCount}`);

    if (intervalCount >= 3) {
        clearInterval(intervalId); // Stop after 3 ticks
        console.log("  Interval stopped");
    }
}, 200);

// ─────────────────────────────────────────────────────────────────────────────
// 7.3 ERROR-FIRST CALLBACKS (Node.js pattern)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ERROR-FIRST CALLBACKS ===\n");

// Node.js style callback: (error, result) => {}
function simulateAsync(shouldFail, callback) {
    setTimeout(() => {
        if (shouldFail) {
            callback(new Error("Something went wrong"), null);
        } else {
            callback(null, { data: "Success!" });
        }
    }, 50);
}

simulateAsync(false, (err, result) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log("Result:", result);
    }
});

// ─────────────────────────────────────────────────────────────────────────────
// 7.4 CALLBACK HELL (and how to avoid it)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CALLBACK HELL ===\n");

// The problem: deeply nested callbacks
/*
getUser(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            getPayment(details.paymentId, (payment) => {
                // More nesting...
            });
        });
    });
});
*/

console.log("Callback hell is solved with:");
console.log("1. Promises (then/catch)");
console.log("2. async/await");
console.log("See Section 12 for async functions");


// ============================================================================
// 📌 SECTION 8: IIFE (Immediately Invoked Function Expression)
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 8: IIFE");
console.log("========================================\n");

/*
 * IIFE is a function that runs immediately after being defined.
 * Useful for creating private scope and avoiding global pollution.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 8.1 BASIC IIFE SYNTAX
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== BASIC IIFE ===\n");

// Traditional IIFE
(function () {
    const privateVar = "I'm private";
    console.log("IIFE executed:", privateVar);
})();

// console.log(privateVar); // ❌ Not accessible

// IIFE with parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("World");

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE executed");
})();

// IIFE returning a value
const result2 = (function () {
    return 2 + 2;
})();
console.log("IIFE result:", result2); // 4

// ─────────────────────────────────────────────────────────────────────────────
// 8.2 IIFE FOR MODULE PATTERN
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== IIFE MODULE PATTERN ===\n");

const Calculator = (function () {
    // Private variables
    let history = [];

    // Private function
    function addToHistory(operation, result) {
        history.push({ operation, result, time: new Date() });
    }

    // Public API
    return {
        add(a, b) {
            const result = a + b;
            addToHistory(`${a} + ${b}`, result);
            return result;
        },
        subtract(a, b) {
            const result = a - b;
            addToHistory(`${a} - ${b}`, result);
            return result;
        },
        getHistory() {
            return [...history]; // Return copy
        }
    };
})();

console.log("add(5, 3):", Calculator.add(5, 3));
console.log("subtract(10, 4):", Calculator.subtract(10, 4));
console.log("History:", Calculator.getHistory());


// ============================================================================
// 📌 SECTION 9: RECURSION
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 9: RECURSION");
console.log("========================================\n");

/*
 * Recursion is when a function calls itself.
 * Every recursive function needs:
 * 1. Base case (termination condition)
 * 2. Recursive case (calls itself with modified input)
 */

// ─────────────────────────────────────────────────────────────────────────────
// 9.1 BASIC RECURSION
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== BASIC RECURSION ===\n");

// Factorial: n! = n * (n-1)!
function factorialRecursive(n) {
    // Base case
    if (n <= 1) return 1;

    // Recursive case
    return n * factorialRecursive(n - 1);
}

console.log("5! =", factorialRecursive(5)); // 120

// Countdown
function countdown(n) {
    if (n <= 0) {
        console.log("  Liftoff! 🚀");
        return;
    }
    console.log(`  ${n}...`);
    countdown(n - 1);
}

countdown(5);

// ─────────────────────────────────────────────────────────────────────────────
// 9.2 RECURSIVE DATA STRUCTURES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== RECURSIVE DATA STRUCTURES ===\n");

// Sum nested arrays
function sumNested(arr) {
    let total = 0;
    for (const item of arr) {
        if (Array.isArray(item)) {
            total += sumNested(item); // Recursive call
        } else {
            total += item;
        }
    }
    return total;
}

const nestedNums = [1, [2, 3], [4, [5, 6]]];
console.log("Sum nested:", sumNested(nestedNums)); // 21

// Flatten deeply nested array
function flattenDeep(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(
            Array.isArray(item) ? flattenDeep(item) : item
        );
    }, []);
}

console.log("Flatten:", flattenDeep(nestedNums)); // [1, 2, 3, 4, 5, 6]

// Deep clone object
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const cloned = deepClone(original);
cloned.b.c = 999;
console.log("Original:", original.b.c); // 2 (unchanged)
console.log("Cloned:", cloned.b.c);     // 999

// ─────────────────────────────────────────────────────────────────────────────
// 9.3 FIBONACCI WITH RECURSION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FIBONACCI ===\n");

// Simple (inefficient - exponential time)
function fibSimple(n) {
    if (n <= 1) return n;
    return fibSimple(n - 1) + fibSimple(n - 2);
}

console.log("fib(10) simple:", fibSimple(10)); // 55

// Optimized with memoization
function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.log("fib(40) memoized:", fibMemo(40)); // 102334155 (fast!)

// ─────────────────────────────────────────────────────────────────────────────
// 9.4 TAIL RECURSION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== TAIL RECURSION ===\n");

// Not tail-recursive (stack grows)
function factorialNormal(n) {
    if (n <= 1) return 1;
    return n * factorialNormal(n - 1);
}

// Tail-recursive (can be optimized by engine)
function factorialTail(n, accumulator = 1) {
    if (n <= 1) return accumulator;
    return factorialTail(n - 1, n * accumulator);
}

console.log("Tail factorial(10):", factorialTail(10)); // 3628800


// ============================================================================
// 📌 SECTION 10: FUNCTION METHODS (call, apply, bind)
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 10: call, apply, bind");
console.log("========================================\n");

/*
 * These methods allow you to control 'this' when calling functions.
 * - call: invoke with specific 'this' and arguments
 * - apply: like call, but arguments as array
 * - bind: create new function with bound 'this'
 */

// ─────────────────────────────────────────────────────────────────────────────
// 10.1 CALL METHOD
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== CALL ===\n");

function introduce2(greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Using call to invoke with different 'this'
console.log(introduce2.call(person1, "Hello", "!"));  // "Hello, I'm Alice!"
console.log(introduce2.call(person2, "Hi there", ".")); // "Hi there, I'm Bob."

// Borrowing methods
const nums2 = { 0: "a", 1: "b", 2: "c", length: 3 }; // Array-like object
const result3 = Array.prototype.join.call(nums2, "-");
console.log("Join array-like:", result3); // "a-b-c"

// ─────────────────────────────────────────────────────────────────────────────
// 10.2 APPLY METHOD
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== APPLY ===\n");

// Same as call, but arguments as array
console.log(introduce2.apply(person1, ["Hey", "!"])); // "Hey, I'm Alice!"

// Useful for variadic functions
const numbers2 = [5, 6, 2, 3, 7];
console.log("Max (apply):", Math.max.apply(null, numbers2)); // 7

// Modern alternative: spread operator
console.log("Max (spread):", Math.max(...numbers2)); // 7

// ─────────────────────────────────────────────────────────────────────────────
// 10.3 BIND METHOD
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== BIND ===\n");

// bind returns a new function with 'this' permanently bound
const aliceIntro = introduce2.bind(person1);
console.log(aliceIntro("Hello", "!")); // "Hello, I'm Alice!"

// Partial application with bind
function greet2(greeting, name) {
    return `${greeting}, ${name}!`;
}

const sayHello2 = greet2.bind(null, "Hello"); // Pre-fill first argument
console.log(sayHello2("World")); // "Hello, World!"
console.log(sayHello2("Alice")); // "Hello, Alice!"

// Event handlers with bind
const button = {
    content: "Click me",
    click: function () {
        console.log("Button says:", this.content);
    }
};

const boundClick = button.click.bind(button);
// Can now pass boundClick to event listeners without losing 'this'

// ─────────────────────────────────────────────────────────────────────────────
// 10.4 COMPARING call, apply, bind
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== COMPARISON ===\n");

function showInfo(city, country) {
    return `${this.name} from ${city}, ${country}`;
}

const user = { name: "John" };

// call - immediate execution, comma-separated args
console.log("call:", showInfo.call(user, "NYC", "USA"));

// apply - immediate execution, array of args
console.log("apply:", showInfo.apply(user, ["NYC", "USA"]));

// bind - returns new function, doesn't execute
const boundShowInfo = showInfo.bind(user, "NYC", "USA");
console.log("bind:", boundShowInfo());


// ============================================================================
// 📌 SECTION 11: GENERATOR FUNCTIONS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 11: GENERATOR FUNCTIONS");
console.log("========================================\n");

/*
 * Generator functions can pause and resume execution.
 * They use function* syntax and yield keyword.
 * Return an iterator when called.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 11.1 BASIC GENERATORS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== BASIC GENERATORS ===\n");

function* simpleGenerator() {
    console.log("  Before first yield");
    yield 1;
    console.log("  Before second yield");
    yield 2;
    console.log("  Before third yield");
    yield 3;
    console.log("  Generator done");
}

const gen = simpleGenerator();
console.log("First:", gen.next()); // { value: 1, done: false }
console.log("Second:", gen.next()); // { value: 2, done: false }
console.log("Third:", gen.next()); // { value: 3, done: false }
console.log("Fourth:", gen.next()); // { value: undefined, done: true }

// ─────────────────────────────────────────────────────────────────────────────
// 11.2 ITERATING GENERATORS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ITERATING GENERATORS ===\n");

function* countUp(max) {
    for (let i = 1; i <= max; i++) {
        yield i;
    }
}

// Using for...of
console.log("for...of:");
for (const num of countUp(5)) {
    console.log(`  ${num}`);
}

// Using spread
console.log("Spread:", [...countUp(5)]);

// ─────────────────────────────────────────────────────────────────────────────
// 11.3 INFINITE GENERATORS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== INFINITE GENERATORS ===\n");

function* infiniteCounter() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const counter3 = infiniteCounter();
console.log("Infinite 1:", counter3.next().value); // 0
console.log("Infinite 2:", counter3.next().value); // 1
console.log("Infinite 3:", counter3.next().value); // 2

// Fibonacci generator
function* fibonacciGen() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fib = fibonacciGen();
console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
    console.log(`  ${fib.next().value}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 11.4 GENERATOR DELEGATION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== GENERATOR DELEGATION ===\n");

function* innerGenerator() {
    yield 'A';
    yield 'B';
}

function* outerGenerator() {
    yield 1;
    yield* innerGenerator(); // Delegate to inner
    yield 2;
}

console.log("Delegated:", [...outerGenerator()]); // [1, 'A', 'B', 2]


// ============================================================================
// 📌 SECTION 12: ASYNC FUNCTIONS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 12: ASYNC FUNCTIONS");
console.log("========================================\n");

/*
 * async/await provides a cleaner way to work with Promises.
 * - async function always returns a Promise
 * - await pauses execution until Promise resolves
 */

// ─────────────────────────────────────────────────────────────────────────────
// 12.1 BASIC ASYNC/AWAIT
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== BASIC ASYNC/AWAIT ===\n");

// Promise-based function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function
async function delayedGreeting(name) {
    console.log("  Starting...");
    await delay(100); // Pause until delay resolves
    console.log(`  Hello, ${name}!`);
    return `Greeted ${name}`;
}

// Calling async function
delayedGreeting("Alice").then(result => {
    console.log("  Result:", result);
});

// ─────────────────────────────────────────────────────────────────────────────
// 12.2 ERROR HANDLING
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ASYNC ERROR HANDLING ===\n");

function fetchData(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Failed to fetch"));
            } else {
                resolve({ data: "Success!" });
            }
        }, 50);
    });
}

async function getData() {
    try {
        const result = await fetchData(false);
        console.log("  Data:", result);
    } catch (error) {
        console.log("  Error:", error.message);
    } finally {
        console.log("  Cleanup done");
    }
}

getData();

// ─────────────────────────────────────────────────────────────────────────────
// 12.3 PARALLEL EXECUTION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== PARALLEL EXECUTION ===\n");

async function parallelDemo() {
    // Sequential (slower)
    const start1 = Date.now();
    await delay(100);
    await delay(100);
    console.log(`  Sequential: ${Date.now() - start1}ms`);

    // Parallel (faster)
    const start2 = Date.now();
    await Promise.all([delay(100), delay(100)]);
    console.log(`  Parallel: ${Date.now() - start2}ms`);
}

parallelDemo();

// ─────────────────────────────────────────────────────────────────────────────
// 12.4 ASYNC ITERATION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ASYNC ITERATION ===\n");

async function* asyncGenerator() {
    for (let i = 1; i <= 3; i++) {
        await delay(50);
        yield i;
    }
}

async function consumeAsync() {
    console.log("  Async iteration:");
    for await (const value of asyncGenerator()) {
        console.log(`    Value: ${value}`);
    }
}

consumeAsync();


// ============================================================================
// 📌 SECTION 13: BEST PRACTICES AND SUMMARY
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 13: BEST PRACTICES");
console.log("========================================\n");

console.log(`
📚 FUNCTIONS REFERENCE TABLE:

FUNCTION TYPES:
┌─────────────────────────────────────────────────────────────────────┐
│ Function Declaration    │ function name() {}    │ Hoisted          │
│ Function Expression     │ const f = function(){}│ Not hoisted      │
│ Arrow Function         │ const f = () => {}    │ No 'this' binding │
│ Generator Function     │ function* name() {}   │ Can pause/resume  │
│ Async Function         │ async function() {}   │ Returns Promise   │
│ IIFE                   │ (function() {})()    │ Runs immediately  │
└─────────────────────────────────────────────────────────────────────┘

PARAMETERS:
┌─────────────────────────────────────────────────────────────────────┐
│ Default Parameters     │ function(a = 1) {}    │ Fallback values   │
│ Rest Parameters        │ function(...args) {}  │ Collect remaining │
│ Destructuring          │ function({a, b}) {}   │ Extract from obj  │
└─────────────────────────────────────────────────────────────────────┘

FUNCTION METHODS:
┌─────────────────────────────────────────────────────────────────────┐
│ fn.call(this, a, b)    │ Call with 'this' and args                 │
│ fn.apply(this, [a, b]) │ Call with 'this' and args array           │
│ fn.bind(this, a)       │ Return new function with bound 'this'     │
└─────────────────────────────────────────────────────────────────────┘

✅ BEST PRACTICES:

1. NAMING:
   - Use descriptive verb-based names (getUserData, calculateTotal)
   - Use camelCase for function names
   - Use UPPERCASE for constants

2. FUNCTION SIZE:
   - Keep functions small and focused (single responsibility)
   - If > 20 lines, consider breaking into smaller functions
   - If > 3 parameters, consider using options object

3. ARROW FUNCTIONS:
   - Use for callbacks and simple expressions
   - Avoid for methods that need 'this'
   - Avoid for functions that need 'arguments'

4. PARAMETERS:
   - Use default parameters instead of || for fallbacks
   - Use rest parameters instead of 'arguments'
   - Use destructuring for options objects

5. CLOSURES:
   - Be mindful of memory (closures hold references)
   - Use for creating private state
   - Avoid unintentional closures in loops

6. ASYNC:
   - Prefer async/await over callbacks or .then()
   - Always handle errors with try/catch
   - Use Promise.all() for parallel operations

7. PURE FUNCTIONS:
   - Prefer pure functions (no side effects)
   - Same input → same output
   - Easier to test and debug

8. AVOID:
   - Global functions when possible
   - 'eval' and 'new Function()'
   - Arrow functions as methods
   - Excessive nesting (callback hell)
`);

console.log("🎉 End of Class 08 - JavaScript Functions Complete Guide!");
