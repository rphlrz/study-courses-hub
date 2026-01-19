// ============================================================================
// 📚 CLASS 07 - JAVASCRIPT ARRAYS - COMPLETE GUIDE
// ============================================================================
// This file contains educational examples about:
// 1. Creating Arrays
// 2. Accessing and Modifying Elements
// 3. Array Properties and Basic Methods
// 4. Adding and Removing Elements
// 5. Searching and Finding Elements
// 6. Transforming Arrays (map, filter, reduce)
// 7. Iterating Over Arrays
// 8. Sorting and Reversing
// 9. Combining and Slicing Arrays
// 10. Multidimensional Arrays
// 11. Destructuring and Spread Operator
// 12. Practical Examples
// ============================================================================

console.log("🚀 Starting the study of JavaScript Arrays!");


// ============================================================================
// 📌 SECTION 1: CREATING ARRAYS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 1: CREATING ARRAYS");
console.log("========================================\n");

/*
 * Arrays are ordered collections that can store multiple values.
 * In JavaScript, arrays are:
 * - Zero-indexed (first element is at index 0)
 * - Dynamic (can grow or shrink)
 * - Can contain mixed types (strings, numbers, objects, etc.)
 * - Actually objects (typeof [] === 'object')
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1.1 ARRAY LITERAL (Recommended)
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== ARRAY LITERAL ===\n");

const fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits array:", fruits);

const numbers = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers);

const emptyArray = [];
console.log("Empty array:", emptyArray);

// Mixed types (allowed but not always recommended)
const mixed = [1, "text", true, null, { name: "John" }, [1, 2, 3]];
console.log("Mixed array:", mixed);

// ─────────────────────────────────────────────────────────────────────────────
// 1.2 ARRAY CONSTRUCTOR
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARRAY CONSTRUCTOR ===\n");

// Using new Array() - less common
const colors = new Array("Red", "Green", "Blue");
console.log("Colors (constructor):", colors);

// ⚠️ Be careful with single number argument
const arrayWith5Slots = new Array(5); // Creates array with 5 empty slots
console.log("Array with 5 empty slots:", arrayWith5Slots);
console.log("Length:", arrayWith5Slots.length); // 5

// ─────────────────────────────────────────────────────────────────────────────
// 1.3 ARRAY.FROM() - Create from iterable
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARRAY.FROM() ===\n");

// From string
const letters = Array.from("Hello");
console.log("From string 'Hello':", letters); // ['H', 'e', 'l', 'l', 'o']

// From Set (removes duplicates)
const uniqueNumbers = Array.from(new Set([1, 2, 2, 3, 3, 3]));
console.log("From Set (unique):", uniqueNumbers); // [1, 2, 3]

// With mapping function
const doubled = Array.from([1, 2, 3], x => x * 2);
console.log("From with mapping:", doubled); // [2, 4, 6]

// Create array with range of numbers
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Range 1-5:", range); // [1, 2, 3, 4, 5]

// ─────────────────────────────────────────────────────────────────────────────
// 1.4 ARRAY.OF() - Create from arguments
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARRAY.OF() ===\n");

// Unlike new Array(7), Array.of(7) creates [7]
const singleElement = Array.of(7);
console.log("Array.of(7):", singleElement); // [7]

const multiElements = Array.of(1, 2, 3);
console.log("Array.of(1, 2, 3):", multiElements); // [1, 2, 3]

// ─────────────────────────────────────────────────────────────────────────────
// 1.5 FILL() - Create array with same value
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FILL() ===\n");

const zeros = new Array(5).fill(0);
console.log("Array filled with 0:", zeros); // [0, 0, 0, 0, 0]

const defaultValues = new Array(3).fill("default");
console.log("Array filled with 'default':", defaultValues);


// ============================================================================
// 📌 SECTION 2: ACCESSING AND MODIFYING ELEMENTS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 2: ACCESSING & MODIFYING");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 2.1 ACCESSING ELEMENTS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== ACCESSING ELEMENTS ===\n");

const animals = ["Dog", "Cat", "Bird", "Fish", "Rabbit"];

// By index (zero-based)
console.log("First element [0]:", animals[0]);       // "Dog"
console.log("Third element [2]:", animals[2]);       // "Bird"
console.log("Last element:", animals[animals.length - 1]); // "Rabbit"

// Using at() - supports negative indices (ES2022)
console.log("at(0):", animals.at(0));                // "Dog"
console.log("at(-1) - last:", animals.at(-1));       // "Rabbit"
console.log("at(-2) - second to last:", animals.at(-2)); // "Fish"

// Accessing non-existent index
console.log("Non-existent [10]:", animals[10]);      // undefined

// ─────────────────────────────────────────────────────────────────────────────
// 2.2 MODIFYING ELEMENTS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MODIFYING ELEMENTS ===\n");

const cities = ["New York", "London", "Tokyo"];
console.log("Original:", cities);

// Modify by index
cities[1] = "Paris";
console.log("After cities[1] = 'Paris':", cities);

// Add element at specific index (creates sparse array if gap exists)
cities[5] = "Sydney";
console.log("After cities[5] = 'Sydney':", cities);
console.log("Length:", cities.length); // 6 (has empty slots)

// ─────────────────────────────────────────────────────────────────────────────
// 2.3 ARRAY LENGTH PROPERTY
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== LENGTH PROPERTY ===\n");

const items = [1, 2, 3, 4, 5];
console.log("Items:", items);
console.log("Length:", items.length); // 5

// Truncate array by setting length
items.length = 3;
console.log("After length = 3:", items); // [1, 2, 3]

// Expand array by setting length
items.length = 5;
console.log("After length = 5:", items); // [1, 2, 3, empty, empty]


// ============================================================================
// 📌 SECTION 3: ARRAY PROPERTIES AND BASIC METHODS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 3: BASIC METHODS");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 3.1 CHECKING IF ARRAY
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== CHECKING IF ARRAY ===\n");

console.log("Array.isArray([1,2,3]):", Array.isArray([1, 2, 3])); // true
console.log("Array.isArray('hello'):", Array.isArray("hello"));   // false
console.log("Array.isArray({}):", Array.isArray({}));             // false
console.log("typeof []:", typeof []);                              // "object" (not reliable!)

// ─────────────────────────────────────────────────────────────────────────────
// 3.2 CONVERTING TO STRING
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CONVERTING TO STRING ===\n");

const langs = ["JavaScript", "Python", "Java"];

// toString() - converts to comma-separated string
console.log("toString():", langs.toString()); // "JavaScript,Python,Java"

// join() - converts with custom separator
console.log("join(' - '):", langs.join(" - "));  // "JavaScript - Python - Java"
console.log("join(''):", langs.join(""));         // "JavaScriptPythonJava"
console.log("join():", langs.join());             // "JavaScript,Python,Java" (default comma)


// ============================================================================
// 📌 SECTION 4: ADDING AND REMOVING ELEMENTS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 4: ADDING & REMOVING");
console.log("========================================\n");

/*
 * MUTATING METHODS (modify original array):
 * - push/pop: add/remove from END
 * - unshift/shift: add/remove from BEGINNING
 * - splice: add/remove from ANYWHERE
 */

// ─────────────────────────────────────────────────────────────────────────────
// 4.1 PUSH() and POP() - End of array
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== PUSH & POP (End) ===\n");

const stack = ["A", "B", "C"];
console.log("Original:", stack);

// push() - adds to end, returns new length
const newLength = stack.push("D");
console.log("After push('D'):", stack);
console.log("New length:", newLength); // 4

// Push multiple elements
stack.push("E", "F");
console.log("After push('E', 'F'):", stack);

// pop() - removes from end, returns removed element
const removed = stack.pop();
console.log("After pop():", stack);
console.log("Removed element:", removed); // "F"

// ─────────────────────────────────────────────────────────────────────────────
// 4.2 UNSHIFT() and SHIFT() - Beginning of array
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== UNSHIFT & SHIFT (Beginning) ===\n");

const queue = [2, 3, 4];
console.log("Original:", queue);

// unshift() - adds to beginning, returns new length
queue.unshift(1);
console.log("After unshift(1):", queue);

queue.unshift(-1, 0);
console.log("After unshift(-1, 0):", queue);

// shift() - removes from beginning, returns removed element
const first = queue.shift();
console.log("After shift():", queue);
console.log("Removed element:", first); // -1

// ─────────────────────────────────────────────────────────────────────────────
// 4.3 SPLICE() - Add/Remove anywhere
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SPLICE (Anywhere) ===\n");

/*
 * splice(startIndex, deleteCount, ...itemsToAdd)
 * - startIndex: where to start
 * - deleteCount: how many to remove
 * - itemsToAdd: elements to insert
 * Returns: array of removed elements
 */

const months = ["Jan", "Feb", "Apr", "May"];
console.log("Original:", months);

// Insert without removing (deleteCount = 0)
months.splice(2, 0, "Mar");
console.log("Insert 'Mar' at index 2:", months);

// Remove elements
const removedMonths = months.splice(3, 2);
console.log("Remove 2 elements at index 3:", months);
console.log("Removed:", removedMonths);

// Replace elements
months.splice(1, 1, "February");
console.log("Replace index 1:", months);

// Remove from end using negative index
const letters2 = ["a", "b", "c", "d", "e"];
letters2.splice(-2, 2);
console.log("Remove last 2 elements:", letters2);

// ─────────────────────────────────────────────────────────────────────────────
// 4.4 DELETE operator (Not recommended)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== DELETE (Not Recommended) ===\n");

const deleteExample = [1, 2, 3, 4, 5];
delete deleteExample[2]; // Creates hole, doesn't change length
console.log("After delete [2]:", deleteExample);
console.log("Length still:", deleteExample.length); // 5
console.log("⚠️ Use splice() instead of delete!");


// ============================================================================
// 📌 SECTION 5: SEARCHING AND FINDING ELEMENTS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 5: SEARCHING & FINDING");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 5.1 indexOf() and lastIndexOf()
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== indexOf & lastIndexOf ===\n");

const searchArray = ["apple", "banana", "orange", "banana", "grape"];

// indexOf() - returns first index or -1 if not found
console.log("indexOf('banana'):", searchArray.indexOf("banana"));     // 1
console.log("indexOf('mango'):", searchArray.indexOf("mango"));       // -1
console.log("indexOf('banana', 2):", searchArray.indexOf("banana", 2)); // 3 (start from index 2)

// lastIndexOf() - returns last index
console.log("lastIndexOf('banana'):", searchArray.lastIndexOf("banana")); // 3

// ─────────────────────────────────────────────────────────────────────────────
// 5.2 includes() - Check if exists
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== includes ===\n");

console.log("includes('orange'):", searchArray.includes("orange")); // true
console.log("includes('mango'):", searchArray.includes("mango"));   // false
console.log("includes('banana', 4):", searchArray.includes("banana", 4)); // false (start from index 4)

// ─────────────────────────────────────────────────────────────────────────────
// 5.3 find() - Find first matching element
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== find ===\n");

const numbersFind = [5, 12, 8, 130, 44];

// find() returns the VALUE of first element that passes test
const firstLarge = numbersFind.find(num => num > 10);
console.log("First number > 10:", firstLarge); // 12

const notFound = numbersFind.find(num => num > 200);
console.log("Number > 200:", notFound); // undefined

// With objects
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

const user = users.find(u => u.id === 2);
console.log("User with id 2:", user); // { id: 2, name: "Jane" }

// ─────────────────────────────────────────────────────────────────────────────
// 5.4 findIndex() - Find index of first match
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== findIndex ===\n");

const findIndexArray = [5, 12, 8, 130, 44];

// findIndex() returns the INDEX of first element that passes test
const index = findIndexArray.findIndex(num => num > 10);
console.log("Index of first > 10:", index); // 1

const notFoundIndex = findIndexArray.findIndex(num => num > 200);
console.log("Index of > 200:", notFoundIndex); // -1

// ─────────────────────────────────────────────────────────────────────────────
// 5.5 findLast() and findLastIndex() (ES2023)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== findLast & findLastIndex (ES2023) ===\n");

const nums = [5, 12, 50, 130, 44];

// findLast() - find from the end
const lastLarge = nums.findLast(n => n > 40);
console.log("Last number > 40:", lastLarge); // 44

const lastLargeIndex = nums.findLastIndex(n => n > 40);
console.log("Index of last > 40:", lastLargeIndex); // 4

// ─────────────────────────────────────────────────────────────────────────────
// 5.6 some() and every() - Testing conditions
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== some & every ===\n");

const testNums = [1, 2, 3, 4, 5];

// some() - returns true if AT LEAST ONE element passes test
console.log("some(n => n > 3):", testNums.some(n => n > 3));   // true
console.log("some(n => n > 10):", testNums.some(n => n > 10)); // false

// every() - returns true if ALL elements pass test
console.log("every(n => n > 0):", testNums.every(n => n > 0)); // true
console.log("every(n => n > 3):", testNums.every(n => n > 3)); // false


// ============================================================================
// 📌 SECTION 6: TRANSFORMING ARRAYS (map, filter, reduce)
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 6: TRANSFORMING ARRAYS");
console.log("========================================\n");

/*
 * These methods DON'T modify the original array.
 * They return a NEW array with the results.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 6.1 map() - Transform each element
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== map ===\n");

const originalNums = [1, 2, 3, 4, 5];

// Double each number
const doubledNums = originalNums.map(num => num * 2);
console.log("Original:", originalNums);
console.log("Doubled:", doubledNums); // [2, 4, 6, 8, 10]

// Square each number
const squared = originalNums.map(num => num ** 2);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// With index parameter
const withIndex = originalNums.map((num, i) => `${i}: ${num}`);
console.log("With index:", withIndex);

// Transform objects
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

const productNames = products.map(p => p.name);
console.log("Product names:", productNames);

const discountedPrices = products.map(p => ({
    ...p,
    discountedPrice: p.price * 0.9
}));
console.log("With discount:", discountedPrices);

// ─────────────────────────────────────────────────────────────────────────────
// 6.2 filter() - Select elements that pass a test
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== filter ===\n");

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evenNumbers = allNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]

// Filter odd numbers
const oddNumbers = allNumbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers); // [1, 3, 5, 7, 9]

// Filter by condition
const greaterThan5 = allNumbers.filter(num => num > 5);
console.log("Greater than 5:", greaterThan5); // [6, 7, 8, 9, 10]

// Filter objects
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 15 }
];

const adults = people.filter(p => p.age >= 18);
console.log("Adults:", adults);

// Remove falsy values
const withFalsy = [0, 1, "", "hello", null, undefined, false, true];
const truthy = withFalsy.filter(Boolean);
console.log("Truthy values:", truthy); // [1, "hello", true]

// ─────────────────────────────────────────────────────────────────────────────
// 6.3 reduce() - Reduce to a single value
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== reduce ===\n");

/*
 * reduce(callback, initialValue)
 * callback(accumulator, currentValue, index, array)
 */

const reduceNums = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = reduceNums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 15

// Multiply all numbers
const product = reduceNums.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // 120

// Find maximum
const max = reduceNums.reduce((acc, curr) => Math.max(acc, curr));
console.log("Maximum:", max); // 5

// Count occurrences
const fruits2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits2.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log("Fruit count:", fruitCount);

// Flatten nested array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened:", flattened); // [1, 2, 3, 4, 5, 6]

// Group by property
const groupedByAge = people.reduce((groups, person) => {
    const key = person.age >= 18 ? "adult" : "minor";
    groups[key] = groups[key] || [];
    groups[key].push(person);
    return groups;
}, {});
console.log("Grouped by age:", groupedByAge);

// ─────────────────────────────────────────────────────────────────────────────
// 6.4 reduceRight() - Reduce from right to left
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== reduceRight ===\n");

const words = ["World", " ", "Hello"];
const reversed = words.reduceRight((acc, word) => acc + word, "");
console.log("Reduced right:", reversed); // "Hello World"

// ─────────────────────────────────────────────────────────────────────────────
// 6.5 flat() and flatMap()
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== flat & flatMap ===\n");

// flat() - flattens nested arrays
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log("flat(1):", nestedArray.flat());      // [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", nestedArray.flat(2));     // [1, 2, 3, 4, 5, 6]
console.log("flat(Infinity):", nestedArray.flat(Infinity)); // Flattens all levels

// flatMap() - map + flat(1) in one step
const sentences = ["Hello World", "How are you"];
const wordsArray = sentences.flatMap(s => s.split(" "));
console.log("flatMap split:", wordsArray); // ["Hello", "World", "How", "are", "you"]


// ============================================================================
// 📌 SECTION 7: ITERATING OVER ARRAYS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 7: ITERATING ARRAYS");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 7.1 forEach() - Execute function for each element
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== forEach ===\n");

const forEachFruits = ["Apple", "Banana", "Orange"];

// Basic forEach
console.log("forEach with value only:");
forEachFruits.forEach(fruit => {
    console.log(`  - ${fruit}`);
});

// With index and array
console.log("\nforEach with index:");
forEachFruits.forEach((fruit, index, arr) => {
    console.log(`  ${index + 1}/${arr.length}: ${fruit}`);
});

// ⚠️ forEach doesn't return anything (returns undefined)
// ⚠️ Can't use break/continue - use for...of instead

// ─────────────────────────────────────────────────────────────────────────────
// 7.2 for...of Loop
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== for...of ===\n");

const colors2 = ["Red", "Green", "Blue"];

console.log("Basic for...of:");
for (const color of colors2) {
    console.log(`  Color: ${color}`);
}

// With entries() for index
console.log("\nfor...of with entries():");
for (const [index, color] of colors2.entries()) {
    console.log(`  ${index}: ${color}`);
}

// Can use break and continue
console.log("\nfor...of with break:");
for (const color of colors2) {
    if (color === "Green") break;
    console.log(`  ${color}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 7.3 entries(), keys(), values()
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== entries, keys, values ===\n");

const iterArray = ["a", "b", "c"];

// entries() - returns [index, value] pairs
console.log("entries():", [...iterArray.entries()]);

// keys() - returns indices
console.log("keys():", [...iterArray.keys()]);

// values() - returns values
console.log("values():", [...iterArray.values()]);


// ============================================================================
// 📌 SECTION 8: SORTING AND REVERSING
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 8: SORTING & REVERSING");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 8.1 sort() - Sort elements
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== sort ===\n");

// ⚠️ IMPORTANT: sort() MODIFIES the original array!

// Default sort (alphabetical/string based)
const letters3 = ["d", "b", "a", "c"];
letters3.sort();
console.log("Sorted letters:", letters3); // ["a", "b", "c", "d"]

// ⚠️ Default sort with numbers doesn't work as expected!
const numbersSort = [10, 5, 40, 25, 1000, 1];
numbersSort.sort();
console.log("Default sort (wrong):", numbersSort); // Sorted as strings!

// Numeric sort - use compare function
const numbersCorrect = [10, 5, 40, 25, 1000, 1];
numbersCorrect.sort((a, b) => a - b); // Ascending
console.log("Numeric sort (ascending):", numbersCorrect);

const numbersDesc = [10, 5, 40, 25, 1000, 1];
numbersDesc.sort((a, b) => b - a); // Descending
console.log("Numeric sort (descending):", numbersDesc);

// Sort objects by property
const sortUsers = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
];

sortUsers.sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sortUsers);

// Sort strings (case-insensitive)
const names = ["john", "Jane", "bob", "Alice"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Sorted names (case-insensitive):", names);

// ─────────────────────────────────────────────────────────────────────────────
// 8.2 toSorted() - Non-mutating sort (ES2023)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== toSorted (ES2023) ===\n");

const original = [3, 1, 4, 1, 5];
const sorted = original.toSorted((a, b) => a - b);
console.log("Original:", original); // Unchanged
console.log("Sorted copy:", sorted);

// ─────────────────────────────────────────────────────────────────────────────
// 8.3 reverse() - Reverse array
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== reverse ===\n");

const toReverse = [1, 2, 3, 4, 5];
toReverse.reverse();
console.log("Reversed:", toReverse); // [5, 4, 3, 2, 1]

// ─────────────────────────────────────────────────────────────────────────────
// 8.4 toReversed() - Non-mutating reverse (ES2023)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== toReversed (ES2023) ===\n");

const original2 = [1, 2, 3, 4, 5];
const reversed2 = original2.toReversed();
console.log("Original:", original2); // Unchanged
console.log("Reversed copy:", reversed2);


// ============================================================================
// 📌 SECTION 9: COMBINING AND SLICING ARRAYS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 9: COMBINING & SLICING");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 9.1 concat() - Combine arrays
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== concat ===\n");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// Combine two arrays
const combined = arr1.concat(arr2);
console.log("arr1.concat(arr2):", combined); // [1, 2, 3, 4, 5, 6]

// Combine multiple arrays
const allCombined = arr1.concat(arr2, arr3);
console.log("Combine all:", allCombined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Add individual elements
const withElements = arr1.concat(4, 5);
console.log("With elements:", withElements); // [1, 2, 3, 4, 5]

// ─────────────────────────────────────────────────────────────────────────────
// 9.2 Spread operator [...] - Modern alternative
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== Spread operator [...] ===\n");

const spread1 = [1, 2, 3];
const spread2 = [4, 5, 6];

// Combine with spread
const combinedSpread = [...spread1, ...spread2];
console.log("Spread combine:", combinedSpread);

// Add elements in between
const withMiddle = [...spread1, "middle", ...spread2];
console.log("With middle:", withMiddle);

// Clone array
const clone = [...spread1];
console.log("Clone:", clone);
console.log("Are same?:", clone === spread1); // false (different reference)

// ─────────────────────────────────────────────────────────────────────────────
// 9.3 slice() - Extract portion of array
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== slice ===\n");

const sliceArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// slice(start, end) - end is not included
console.log("slice(2, 5):", sliceArr.slice(2, 5));     // [2, 3, 4]
console.log("slice(5):", sliceArr.slice(5));           // [5, 6, 7, 8, 9]
console.log("slice(-3):", sliceArr.slice(-3));         // [7, 8, 9]
console.log("slice(-5, -2):", sliceArr.slice(-5, -2)); // [5, 6, 7]
console.log("slice():", sliceArr.slice());             // Full copy

// Original is unchanged
console.log("Original:", sliceArr);

// ─────────────────────────────────────────────────────────────────────────────
// 9.4 toSpliced() - Non-mutating splice (ES2023)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== toSpliced (ES2023) ===\n");

const originalArr = [1, 2, 3, 4, 5];
const splicedCopy = originalArr.toSpliced(2, 1, "a", "b");
console.log("Original:", originalArr);    // Unchanged
console.log("Spliced copy:", splicedCopy); // [1, 2, "a", "b", 4, 5]

// ─────────────────────────────────────────────────────────────────────────────
// 9.5 with() - Replace single element (ES2023)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== with (ES2023) ===\n");

const originalWith = [1, 2, 3, 4, 5];
const replaced = originalWith.with(2, 99);
console.log("Original:", originalWith); // Unchanged
console.log("With index 2 = 99:", replaced); // [1, 2, 99, 4, 5]


// ============================================================================
// 📌 SECTION 10: MULTIDIMENSIONAL ARRAYS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 10: MULTIDIMENSIONAL ARRAYS");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 10.1 Creating 2D Arrays
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== 2D ARRAYS ===\n");

// Matrix (2D array)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);
console.log("Row 0:", matrix[0]);           // [1, 2, 3]
console.log("Element [1][2]:", matrix[1][2]); // 6

// Iterating 2D array
console.log("\nMatrix elements:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`  [${i}][${j}] = ${matrix[i][j]}`);
    }
}

// Using forEach
console.log("\nUsing forEach:");
matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
        console.log(`  [${i}][${j}] = ${cell}`);
    });
});

// Using flat() to convert to 1D
console.log("\nFlattened:", matrix.flat());

// ─────────────────────────────────────────────────────────────────────────────
// 10.2 Creating Dynamic 2D Arrays
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== DYNAMIC 2D ARRAYS ===\n");

// Create 3x3 matrix filled with zeros
const rows = 3;
const cols = 3;
const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
);
console.log("3x3 Zero matrix:", grid);

// Create with specific pattern
const pattern = Array.from({ length: 3 }, (_, i) =>
    Array.from({ length: 3 }, (_, j) => i * 3 + j + 1)
);
console.log("Pattern matrix:", pattern);


// ============================================================================
// 📌 SECTION 11: DESTRUCTURING AND SPREAD
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 11: DESTRUCTURING & SPREAD");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 11.1 Array Destructuring
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== ARRAY DESTRUCTURING ===\n");

const coordinates = [10, 20, 30];

// Basic destructuring
const [x, y, z] = coordinates;
console.log(`x=${x}, y=${y}, z=${z}`);

// Skip elements
const [first2, , third] = coordinates;
console.log(`first=${first2}, third=${third}`);

// Default values
const [a2, b2, c, d = 0] = [1, 2, 3];
console.log(`a=${a2}, b=${b2}, c=${c}, d=${d}`);

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("head:", head);  // 1
console.log("tail:", tail);  // [2, 3, 4, 5]

// Swap variables
let swap1 = "A";
let swap2 = "B";
[swap1, swap2] = [swap2, swap1];
console.log(`After swap: swap1=${swap1}, swap2=${swap2}`);

// ─────────────────────────────────────────────────────────────────────────────
// 11.2 Spread Operator in Function Calls
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SPREAD IN FUNCTIONS ===\n");

const numbersSpread = [5, 10, 15, 20, 25];

// Math functions
console.log("Max:", Math.max(...numbersSpread)); // 25
console.log("Min:", Math.min(...numbersSpread)); // 5

// Passing as individual arguments
function sum3(a3, b3, c3) {
    return a3 + b3 + c3;
}
console.log("Sum of first 3:", sum3(...numbersSpread)); // 30

// ─────────────────────────────────────────────────────────────────────────────
// 11.3 Rest Parameters
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== REST PARAMETERS ===\n");

function sumAll(...numbers2) {
    return numbers2.reduce((acc, num) => acc + num, 0);
}
console.log("sumAll(1,2,3,4,5):", sumAll(1, 2, 3, 4, 5)); // 15

function logFirst(first3, ...rest) {
    console.log("First:", first3);
    console.log("Rest:", rest);
}
logFirst("A", "B", "C", "D");


// ============================================================================
// 📌 SECTION 12: PRACTICAL EXAMPLES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 12: PRACTICAL EXAMPLES");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 12.1 Remove Duplicates
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== REMOVE DUPLICATES ===\n");

const withDuplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// Using Set
const unique = [...new Set(withDuplicates)];
console.log("Using Set:", unique);

// Using filter
const uniqueFilter = withDuplicates.filter((item, index, arr) =>
    arr.indexOf(item) === index
);
console.log("Using filter:", uniqueFilter);

// ─────────────────────────────────────────────────────────────────────────────
// 12.2 Array Statistics
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARRAY STATISTICS ===\n");

const dataNumbers = [23, 45, 67, 12, 89, 34, 56];

const stats = {
    array: dataNumbers,
    sum: dataNumbers.reduce((a, b) => a + b, 0),
    average: dataNumbers.reduce((a, b) => a + b, 0) / dataNumbers.length,
    min: Math.min(...dataNumbers),
    max: Math.max(...dataNumbers),
    count: dataNumbers.length
};

console.log("Statistics:", stats);

// ─────────────────────────────────────────────────────────────────────────────
// 12.3 Chunk Array
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CHUNK ARRAY ===\n");

function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Chunk by 3:", chunkArray(longArray, 3));
console.log("Chunk by 4:", chunkArray(longArray, 4));

// ─────────────────────────────────────────────────────────────────────────────
// 12.4 Shuffle Array
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SHUFFLE ARRAY ===\n");

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const ordered = [1, 2, 3, 4, 5];
console.log("Original:", ordered);
console.log("Shuffled:", shuffleArray(ordered));

// ─────────────────────────────────────────────────────────────────────────────
// 12.5 Group By Property
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== GROUP BY ===\n");

const students = [
    { name: "John", grade: "A" },
    { name: "Jane", grade: "B" },
    { name: "Bob", grade: "A" },
    { name: "Alice", grade: "B" },
    { name: "Charlie", grade: "C" }
];

// Using Object.groupBy (ES2024) or reduce
const groupedByGrade = students.reduce((groups, student) => {
    const grade = student.grade;
    groups[grade] = groups[grade] || [];
    groups[grade].push(student);
    return groups;
}, {});

console.log("Grouped by grade:", groupedByGrade);

// ─────────────────────────────────────────────────────────────────────────────
// 12.6 Intersection from two arrays
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARRAY INTERSECTION ===\n");

const array1I = [1, 2, 3, 4, 5];
const array2I = [3, 4, 5, 6, 7];

const intersection = array1I.filter(item => array2I.includes(item));
console.log("Intersection:", intersection); // [3, 4, 5]

// ─────────────────────────────────────────────────────────────────────────────
// 12.7 Difference between arrays
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARRAY DIFFERENCE ===\n");

const difference = array1I.filter(item => !array2I.includes(item));
console.log("Difference (in arr1 but not arr2):", difference); // [1, 2]

// Symmetric difference (in either but not both)
const symmetricDiff = [
    ...array1I.filter(x => !array2I.includes(x)),
    ...array2I.filter(x => !array1I.includes(x))
];
console.log("Symmetric difference:", symmetricDiff); // [1, 2, 6, 7]


// ============================================================================
// 📌 SECTION 13: SUMMARY AND BEST PRACTICES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SUMMARY AND BEST PRACTICES");
console.log("========================================\n");

console.log(`
📚 ARRAY METHODS REFERENCE TABLE:

MUTATING METHODS (modify original):
┌─────────────────────────────────────────────────────────────────────┐
│ push(item)           → Add to end, returns new length              │
│ pop()                → Remove from end, returns removed            │
│ unshift(item)        → Add to beginning, returns new length        │
│ shift()              → Remove from beginning, returns removed      │
│ splice(i, n, ...add) → Remove/add at index, returns removed        │
│ sort(fn)             → Sort in place                               │
│ reverse()            → Reverse in place                            │
│ fill(value)          → Fill with value                             │
│ copyWithin()         → Copy within array                           │
└─────────────────────────────────────────────────────────────────────┘

NON-MUTATING METHODS (return new array):
┌─────────────────────────────────────────────────────────────────────┐
│ map(fn)              → Transform each element                      │
│ filter(fn)           → Select elements that pass test              │
│ reduce(fn, init)     → Reduce to single value                      │
│ slice(start, end)    → Extract portion                             │
│ concat(...arrays)    → Combine arrays                              │
│ flat(depth)          → Flatten nested arrays                       │
│ flatMap(fn)          → Map + flat(1)                               │
│ toSorted(fn)         → Sorted copy (ES2023)                        │
│ toReversed()         → Reversed copy (ES2023)                      │
│ toSpliced()          → Spliced copy (ES2023)                       │
│ with(i, value)       → Copy with element replaced (ES2023)         │
└─────────────────────────────────────────────────────────────────────┘

SEARCH METHODS:
┌─────────────────────────────────────────────────────────────────────┐
│ indexOf(item)        → First index of item (-1 if not found)       │
│ lastIndexOf(item)    → Last index of item                          │
│ includes(item)       → Boolean if includes                         │
│ find(fn)             → First element passing test                  │
│ findIndex(fn)        → Index of first passing                      │
│ findLast(fn)         → Last element passing (ES2023)               │
│ findLastIndex(fn)    → Index of last passing (ES2023)              │
│ some(fn)             → True if any pass                            │
│ every(fn)            → True if all pass                            │
└─────────────────────────────────────────────────────────────────────┘

ITERATION METHODS:
┌─────────────────────────────────────────────────────────────────────┐
│ forEach(fn)          → Execute fn for each (no return)             │
│ for...of             → Loop over values                            │
│ entries()            → Iterator of [index, value]                  │
│ keys()               → Iterator of indices                         │
│ values()             → Iterator of values                          │
└─────────────────────────────────────────────────────────────────────┘

✅ BEST PRACTICES:

1. IMMUTABILITY: Prefer non-mutating methods when possible
   - Use [...arr] or slice() to clone before mutating
   - Use toSorted(), toReversed(), toSpliced() (ES2023)

2. CHOOSE THE RIGHT METHOD:
   - map: when transforming each element
   - filter: when selecting elements
   - reduce: when computing a single value
   - find/findIndex: when searching for one element
   - some/every: when testing conditions

3. PERFORMANCE:
   - for loop is fastest but less readable
   - forEach cannot be broken early
   - Use for...of when you need break/continue

4. CHECKING:
   - Use Array.isArray() instead of typeof
   - Use includes() instead of indexOf() !== -1

5. MODERN FEATURES:
   - Use spread [...] for cloning and combining
   - Use destructuring for extracting values
   - Use at() for negative indexing
`);

console.log("🎉 End of Class 07 - JavaScript Arrays Complete Guide!");
