// ============================================================================
// 📚 CLASS 09 - JAVASCRIPT CLASSES - COMPLETE GUIDE
// ============================================================================
// This file contains educational examples about:
// 1. Class Basics and Syntax
// 2. Constructor and Properties
// 3. Methods (Instance, Static, Private)
// 4. Getters and Setters
// 5. Inheritance (extends, super)
// 6. Static Members
// 7. Private Fields and Methods
// 8. Polymorphism
// 9. Mixins and Composition
// 10. Abstract Classes Pattern
// 11. Design Patterns with Classes
// 12. Best Practices
// ============================================================================

console.log("🚀 Starting the study of JavaScript Classes!");


// ============================================================================
// 📌 SECTION 1: CLASS BASICS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 1: CLASS BASICS");
console.log("========================================\n");

/*
 * Classes in JavaScript (ES6+) provide a cleaner syntax for creating
 * objects and implementing inheritance.
 * 
 * Key points:
 * - Classes are "syntactic sugar" over prototype-based inheritance
 * - Classes are NOT hoisted (must be defined before use)
 * - Class body runs in strict mode
 * - Classes can be expressions or declarations
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1.1 CLASS DECLARATION
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== CLASS DECLARATION ===\n");

class Person {
    // Constructor - called when creating new instance
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        return `Hello, my name is ${this.name}`;
    }

    // Method
    getInfo() {
        return `${this.name}, ${this.age} years old`;
    }
}

// Creating instances with 'new'
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.greet());   // "Hello, my name is Alice"
console.log(person2.getInfo()); // "Bob, 30 years old"

// Check instance
console.log("person1 instanceof Person:", person1 instanceof Person); // true
console.log("typeof Person:", typeof Person); // "function" (classes are functions!)

// ─────────────────────────────────────────────────────────────────────────────
// 1.2 CLASS EXPRESSION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CLASS EXPRESSION ===\n");

// Anonymous class expression
const Animal = class {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
};

const dog = new Animal("Dog");
console.log(dog.speak()); // "Dog makes a sound"

// Named class expression
const Vehicle = class VehicleClass {
    constructor(type) {
        this.type = type;
    }

    describe() {
        return `This is a ${this.type}`;
    }
};

const car = new Vehicle("car");
console.log(car.describe()); // "This is a car"

// ─────────────────────────────────────────────────────────────────────────────
// 1.3 CLASS VS CONSTRUCTOR FUNCTION
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CLASS VS CONSTRUCTOR FUNCTION ===\n");

// Old way: Constructor function
function PersonOld(name) {
    this.name = name;
}
PersonOld.prototype.greet = function () {
    return `Hello, I'm ${this.name}`;
};

// New way: Class (same behavior, cleaner syntax)
class PersonNew {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

const oldPerson = new PersonOld("Old Style");
const newPerson = new PersonNew("New Style");

console.log(oldPerson.greet()); // Works the same
console.log(newPerson.greet()); // Works the same


// ============================================================================
// 📌 SECTION 2: CONSTRUCTOR AND PROPERTIES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 2: CONSTRUCTOR & PROPERTIES");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 2.1 CONSTRUCTOR METHOD
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== CONSTRUCTOR ===\n");

class Rectangle {
    constructor(width, height) {
        // Validate inputs
        if (width <= 0 || height <= 0) {
            throw new Error("Dimensions must be positive");
        }

        // Initialize instance properties
        this.width = width;
        this.height = height;
        this.createdAt = new Date();
    }

    getArea() {
        return this.width * this.height;
    }
}

const rect = new Rectangle(10, 5);
console.log("Width:", rect.width);        // 10
console.log("Height:", rect.height);      // 5
console.log("Area:", rect.getArea());     // 50

// try {
//     const invalid = new Rectangle(-1, 5); // Throws Error
// } catch (e) {
//     console.log("Error:", e.message);
// }

// ─────────────────────────────────────────────────────────────────────────────
// 2.2 CLASS FIELDS (Public Instance Fields)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== CLASS FIELDS ===\n");

class Counter {
    // Public instance fields (ES2022)
    count = 0;
    step = 1;
    name = "My Counter";

    constructor(initialCount = 0, step = 1) {
        this.count = initialCount;
        this.step = step;
    }

    increment() {
        this.count += this.step;
        return this.count;
    }

    decrement() {
        this.count -= this.step;
        return this.count;
    }
}

const counter = new Counter(10, 2);
console.log("Initial:", counter.count);     // 10
console.log("After increment:", counter.increment()); // 12
console.log("After increment:", counter.increment()); // 14
console.log("Name:", counter.name);         // "My Counter"

// ─────────────────────────────────────────────────────────────────────────────
// 2.3 DEFAULT VALUES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== DEFAULT VALUES ===\n");

class User {
    // Default field values
    role = "user";
    isActive = true;
    createdAt = new Date();

    constructor(name, email, role = "user") {
        this.name = name;
        this.email = email;
        if (role !== "user") {
            this.role = role;
        }
    }

    getInfo() {
        return `${this.name} (${this.email}) - Role: ${this.role}`;
    }
}

const user1 = new User("John", "john@example.com");
const admin = new User("Admin", "admin@example.com", "admin");

console.log(user1.getInfo()); // John - Role: user
console.log(admin.getInfo()); // Admin - Role: admin


// ============================================================================
// 📌 SECTION 3: METHODS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 3: METHODS");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 3.1 INSTANCE METHODS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== INSTANCE METHODS ===\n");

class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    // Instance methods - operate on 'this'
    add(n) {
        this.value += n;
        return this; // Return this for chaining
    }

    subtract(n) {
        this.value -= n;
        return this;
    }

    multiply(n) {
        this.value *= n;
        return this;
    }

    divide(n) {
        if (n === 0) throw new Error("Cannot divide by zero");
        this.value /= n;
        return this;
    }

    reset() {
        this.value = 0;
        return this;
    }

    getResult() {
        return this.value;
    }
}

const calc = new Calculator(10);

// Method chaining
const result = calc
    .add(5)       // 15
    .multiply(2)  // 30
    .subtract(10) // 20
    .divide(4)    // 5
    .getResult();

console.log("Chained result:", result); // 5

// ─────────────────────────────────────────────────────────────────────────────
// 3.2 ARROW FUNCTION METHODS (Class Fields)
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== ARROW FUNCTION METHODS ===\n");

class Button {
    label = "Click me";

    // Regular method - 'this' depends on how it's called
    handleClick() {
        console.log(`Regular: ${this?.label}`);
    }

    // Arrow function field - 'this' is always bound to instance
    handleClickArrow = () => {
        console.log(`Arrow: ${this.label}`);
    }
}

const btn = new Button();

// Direct call works for both
btn.handleClick();      // "Regular: Click me"
btn.handleClickArrow(); // "Arrow: Click me"

// When passed as callback
const regularCallback = btn.handleClick;
const arrowCallback = btn.handleClickArrow;

// regularCallback(); // ❌ Would fail: this is undefined
arrowCallback();      // ✅ Works: "Arrow: Click me"

console.log("Arrow functions preserve 'this' when used as callbacks");


// ============================================================================
// 📌 SECTION 4: GETTERS AND SETTERS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 4: GETTERS AND SETTERS");
console.log("========================================\n");

/*
 * Getters and Setters allow you to define computed properties
 * and add validation when getting/setting values.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 4.1 BASIC GETTERS AND SETTERS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== BASIC GETTERS/SETTERS ===\n");

class Circle {
    constructor(radius) {
        this._radius = radius; // Convention: _ prefix for "internal" properties
    }

    // Getter - accessed like a property
    get radius() {
        return this._radius;
    }

    // Setter - assigned like a property
    set radius(value) {
        if (value <= 0) {
            throw new Error("Radius must be positive");
        }
        this._radius = value;
    }

    // Computed property (read-only getter)
    get diameter() {
        return this._radius * 2;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }

    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle = new Circle(5);

console.log("Radius:", circle.radius);           // 5
console.log("Diameter:", circle.diameter);       // 10
console.log("Area:", circle.area.toFixed(2));    // 78.54
console.log("Circumference:", circle.circumference.toFixed(2)); // 31.42

// Using setter
circle.radius = 10;
console.log("New radius:", circle.radius);       // 10
console.log("New diameter:", circle.diameter);   // 20

// ─────────────────────────────────────────────────────────────────────────────
// 4.2 VALIDATION WITH SETTERS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== VALIDATION WITH SETTERS ===\n");

class Temperature {
    constructor(celsius = 0) {
        this._celsius = celsius;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero!");
        }
        this._celsius = value;
    }

    // Fahrenheit conversion
    get fahrenheit() {
        return (this._celsius * 9 / 5) + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) * 5 / 9;
    }

    // Kelvin conversion
    get kelvin() {
        return this._celsius + 273.15;
    }

    set kelvin(value) {
        this.celsius = value - 273.15;
    }
}

const temp = new Temperature(25);
console.log(`${temp.celsius}°C = ${temp.fahrenheit}°F = ${temp.kelvin}K`);

temp.fahrenheit = 100;
console.log(`${temp.fahrenheit}°F = ${temp.celsius.toFixed(2)}°C`);

// ─────────────────────────────────────────────────────────────────────────────
// 4.3 LAZY EVALUATION WITH GETTERS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== LAZY EVALUATION ===\n");

class DataProcessor {
    constructor(data) {
        this._data = data;
        this._processedData = null; // Will be computed lazily
    }

    // Expensive computation, done only when needed
    get processedData() {
        if (this._processedData === null) {
            console.log("  Processing data...");
            // Simulate expensive operation
            this._processedData = this._data.map(x => x * 2);
        }
        return this._processedData;
    }

    // Invalidate cache when data changes
    set data(newData) {
        this._data = newData;
        this._processedData = null; // Reset cache
    }
}

const processor = new DataProcessor([1, 2, 3, 4, 5]);

console.log("First access:", processor.processedData);  // Logs "Processing..."
console.log("Second access:", processor.processedData); // Uses cached value


// ============================================================================
// 📌 SECTION 5: INHERITANCE
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 5: INHERITANCE");
console.log("========================================\n");

/*
 * Inheritance allows a class to inherit properties and methods from another.
 * - Use 'extends' keyword
 * - Use 'super' to call parent constructor/methods
 */

// ─────────────────────────────────────────────────────────────────────────────
// 5.1 BASIC INHERITANCE
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== BASIC INHERITANCE ===\n");

// Parent class (base class / superclass)
class Animal2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    sleep() {
        return `${this.name} is sleeping`;
    }

    describe() {
        return `${this.name} is ${this.age} years old`;
    }
}

// Child class (derived class / subclass)
class Dog2 extends Animal2 {
    constructor(name, age, breed) {
        // Must call super() before using 'this'
        super(name, age);
        this.breed = breed;
    }

    // New method specific to Dog
    bark() {
        return `${this.name} says: Woof!`;
    }

    // Override parent method
    describe() {
        return `${this.name} is a ${this.age} year old ${this.breed}`;
    }
}

class Cat extends Animal2 {
    constructor(name, age, isIndoor) {
        super(name, age);
        this.isIndoor = isIndoor;
    }

    meow() {
        return `${this.name} says: Meow!`;
    }
}

const dog2 = new Dog2("Buddy", 3, "Golden Retriever");
const cat = new Cat("Whiskers", 2, true);

console.log(dog2.eat());      // Inherited from Animal
console.log(dog2.bark());     // Dog-specific
console.log(dog2.describe()); // Overridden

console.log(cat.eat());       // Inherited
console.log(cat.meow());      // Cat-specific
console.log(cat.describe());  // Inherited (not overridden)

// Check inheritance
console.log("\ndog instanceof Dog2:", dog2 instanceof Dog2);     // true
console.log("dog instanceof Animal:", dog2 instanceof Animal2); // true

// ─────────────────────────────────────────────────────────────────────────────
// 5.2 SUPER KEYWORD
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== SUPER KEYWORD ===\n");

class Shape {
    constructor(color) {
        this.color = color;
    }

    describe() {
        return `A ${this.color} shape`;
    }

    getArea() {
        return 0; // Base implementation
    }
}

class Rectangle2 extends Shape {
    constructor(color, width, height) {
        super(color); // Call parent constructor
        this.width = width;
        this.height = height;
    }

    describe() {
        // Call parent method and extend it
        return `${super.describe()} - Rectangle ${this.width}x${this.height}`;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle2 {
    constructor(color, side) {
        super(color, side, side); // Reuse Rectangle constructor
    }

    describe() {
        return `A ${this.color} square with side ${this.width}`;
    }
}

const rect2 = new Rectangle2("blue", 10, 5);
const square = new Square("red", 4);

console.log(rect2.describe());  // "A blue shape - Rectangle 10x5"
console.log("Rect area:", rect2.getArea()); // 50

console.log(square.describe()); // "A red square with side 4"
console.log("Square area:", square.getArea()); // 16

// ─────────────────────────────────────────────────────────────────────────────
// 5.3 INHERITANCE CHAIN
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== INHERITANCE CHAIN ===\n");

class LivingBeing {
    isAlive = true;

    breathe() {
        return "Breathing...";
    }
}

class Mammal extends LivingBeing {
    warmBlooded = true;

    nurse() {
        return "Nursing young...";
    }
}

class Human extends Mammal {
    constructor(name) {
        super();
        this.name = name;
    }

    speak() {
        return `${this.name} is speaking`;
    }
}

const human = new Human("John");

console.log(human.breathe()); // From LivingBeing
console.log(human.nurse());   // From Mammal
console.log(human.speak());   // From Human
console.log("Is alive:", human.isAlive);         // true
console.log("Warm blooded:", human.warmBlooded); // true

// Check prototype chain
console.log("\nhuman instanceof Human:", human instanceof Human);
console.log("human instanceof Mammal:", human instanceof Mammal);
console.log("human instanceof LivingBeing:", human instanceof LivingBeing);


// ============================================================================
// 📌 SECTION 6: STATIC MEMBERS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 6: STATIC MEMBERS");
console.log("========================================\n");

/*
 * Static members belong to the class itself, not instances.
 * - Called on the class: ClassName.staticMethod()
 * - Cannot access 'this' (instance properties)
 */

// ─────────────────────────────────────────────────────────────────────────────
// 6.1 STATIC METHODS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== STATIC METHODS ===\n");

class MathUtils {
    // Static methods - utility functions
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }

    static isEven(n) {
        return n % 2 === 0;
    }

    static isOdd(n) {
        return n % 2 !== 0;
    }

    // Static method using other static methods
    static average(...numbers) {
        const sum = numbers.reduce((a, b) => MathUtils.add(a, b), 0);
        return MathUtils.divide(sum, numbers.length);
    }
}

// Call on class, not instance
console.log("MathUtils.add(5, 3):", MathUtils.add(5, 3));
console.log("MathUtils.isEven(4):", MathUtils.isEven(4));
console.log("MathUtils.average(1,2,3,4,5):", MathUtils.average(1, 2, 3, 4, 5));

// ⚠️ Cannot call on instance
// const math = new MathUtils();
// math.add(5, 3); // ❌ Error: add is not a function

// ─────────────────────────────────────────────────────────────────────────────
// 6.2 STATIC PROPERTIES
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== STATIC PROPERTIES ===\n");

class Config {
    // Static properties (ES2022)
    static appName = "MyApp";
    static version = "1.0.0";
    static environment = "development";
    static maxUsers = 100;

    static getInfo() {
        return `${Config.appName} v${Config.version} (${Config.environment})`;
    }

    static setEnvironment(env) {
        const validEnvs = ["development", "staging", "production"];
        if (validEnvs.includes(env)) {
            Config.environment = env;
        } else {
            throw new Error(`Invalid environment: ${env}`);
        }
    }
}

console.log("App Name:", Config.appName);
console.log("Version:", Config.version);
console.log("Info:", Config.getInfo());

Config.setEnvironment("production");
console.log("New Environment:", Config.environment);

// ─────────────────────────────────────────────────────────────────────────────
// 6.3 STATIC FACTORY METHODS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FACTORY METHODS ===\n");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Factory methods - alternative constructors
    static fromArray([x, y]) {
        return new Point(x, y);
    }

    static fromObject({ x, y }) {
        return new Point(x, y);
    }

    static fromPolar(radius, angle) {
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return new Point(x, y);
    }

    static origin() {
        return new Point(0, 0);
    }

    toString() {
        return `Point(${this.x}, ${this.y})`;
    }
}

const p1 = new Point(3, 4);
const p2 = Point.fromArray([5, 6]);
const p3 = Point.fromObject({ x: 7, y: 8 });
const p4 = Point.origin();

console.log(p1.toString()); // Point(3, 4)
console.log(p2.toString()); // Point(5, 6)
console.log(p3.toString()); // Point(7, 8)
console.log(p4.toString()); // Point(0, 0)

// ─────────────────────────────────────────────────────────────────────────────
// 6.4 STATIC INITIALIZATION BLOCKS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== STATIC INITIALIZATION BLOCKS ===\n");

class Database {
    static connection = null;
    static isInitialized = false;

    // Static initialization block (ES2022)
    static {
        console.log("  Initializing Database class...");
        // Complex initialization logic
        Database.connection = { host: "localhost", port: 5432 };
        Database.isInitialized = true;
        console.log("  Database class initialized!");
    }

    static getConnection() {
        if (!Database.isInitialized) {
            throw new Error("Database not initialized");
        }
        return Database.connection;
    }
}

console.log("Is initialized:", Database.isInitialized);
console.log("Connection:", Database.getConnection());


// ============================================================================
// 📌 SECTION 7: PRIVATE FIELDS AND METHODS
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 7: PRIVATE MEMBERS");
console.log("========================================\n");

/*
 * Private fields (ES2022) use # prefix.
 * They are truly private - not accessible outside the class.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 7.1 PRIVATE FIELDS
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== PRIVATE FIELDS ===\n");

class BankAccount {
    // Private fields - must be declared
    #balance = 0;
    #transactionHistory = [];

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.#balance = initialBalance;
        this.#addTransaction("OPEN", initialBalance);
    }

    // Private method
    #addTransaction(type, amount) {
        this.#transactionHistory.push({
            type,
            amount,
            date: new Date(),
            balance: this.#balance
        });
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance += amount;
        this.#addTransaction("DEPOSIT", amount);
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.#balance -= amount;
        this.#addTransaction("WITHDRAW", amount);
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }

    getTransactionHistory() {
        // Return copy to prevent external modification
        return [...this.#transactionHistory];
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);

console.log("Balance:", account.getBalance()); // 1300
console.log("Transactions:", account.getTransactionHistory().length); // 3

// ⚠️ Cannot access private fields from outside
// console.log(account.#balance); // ❌ SyntaxError

// ─────────────────────────────────────────────────────────────────────────────
// 7.2 PRIVATE STATIC FIELDS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== PRIVATE STATIC FIELDS ===\n");

class IdGenerator {
    static #currentId = 0;

    static generateId() {
        return ++IdGenerator.#currentId;
    }

    static getCurrentId() {
        return IdGenerator.#currentId;
    }

    static reset() {
        IdGenerator.#currentId = 0;
    }
}

console.log("ID 1:", IdGenerator.generateId()); // 1
console.log("ID 2:", IdGenerator.generateId()); // 2
console.log("ID 3:", IdGenerator.generateId()); // 3
console.log("Current:", IdGenerator.getCurrentId()); // 3

// ─────────────────────────────────────────────────────────────────────────────
// 7.3 PRIVATE METHODS
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== PRIVATE METHODS ===\n");

class PasswordValidator {
    #minLength = 8;
    #requireUppercase = true;
    #requireNumber = true;
    #requireSpecial = true;

    // Private helper methods
    #hasMinLength(password) {
        return password.length >= this.#minLength;
    }

    #hasUppercase(password) {
        return /[A-Z]/.test(password);
    }

    #hasNumber(password) {
        return /[0-9]/.test(password);
    }

    #hasSpecialChar(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }

    // Public method
    validate(password) {
        const errors = [];

        if (!this.#hasMinLength(password)) {
            errors.push(`Must be at least ${this.#minLength} characters`);
        }
        if (this.#requireUppercase && !this.#hasUppercase(password)) {
            errors.push("Must contain uppercase letter");
        }
        if (this.#requireNumber && !this.#hasNumber(password)) {
            errors.push("Must contain a number");
        }
        if (this.#requireSpecial && !this.#hasSpecialChar(password)) {
            errors.push("Must contain a special character");
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}

const validator = new PasswordValidator();

console.log(validator.validate("weak"));              // Invalid
console.log(validator.validate("StrongPass1!"));      // Valid


// ============================================================================
// 📌 SECTION 8: POLYMORPHISM
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 8: POLYMORPHISM");
console.log("========================================\n");

/*
 * Polymorphism allows objects of different classes to be treated
 * through the same interface. Same method name, different implementations.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 8.1 METHOD OVERRIDING
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== METHOD OVERRIDING ===\n");

class Shape2 {
    constructor(name) {
        this.name = name;
    }

    // Method to be overridden
    getArea() {
        throw new Error("getArea() must be implemented");
    }

    getPerimeter() {
        throw new Error("getPerimeter() must be implemented");
    }

    describe() {
        return `${this.name}: Area = ${this.getArea().toFixed(2)}, Perimeter = ${this.getPerimeter().toFixed(2)}`;
    }
}

class Circle2 extends Shape2 {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle3 extends Shape2 {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape2 {
    constructor(a, b, c) {
        super("Triangle");
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {
        // Heron's formula
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
}

// Same interface, different implementations
const shapes = [
    new Circle2(5),
    new Rectangle3(4, 6),
    new Triangle(3, 4, 5)
];

console.log("Shape descriptions:");
shapes.forEach(shape => {
    console.log(`  ${shape.describe()}`);
});

// ─────────────────────────────────────────────────────────────────────────────
// 8.2 DUCK TYPING
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== DUCK TYPING ===\n");

/*
 * "If it walks like a duck and quacks like a duck, it's a duck"
 * Objects are compatible if they have the required methods.
 */

// These don't share a common parent class
class Duck {
    quack() {
        return "Quack!";
    }
    swim() {
        return "Duck is swimming";
    }
}

class RobotDuck {
    quack() {
        return "Beep-quack!";
    }
    swim() {
        return "Robot duck is swimming mechanically";
    }
}

// Function doesn't care about class, just interface
function makeItQuack(duck) {
    console.log(`  ${duck.quack()}`);
}

function makeItSwim(duck) {
    console.log(`  ${duck.swim()}`);
}

const realDuck = new Duck();
const robotDuck = new RobotDuck();

console.log("Duck typing in action:");
makeItQuack(realDuck);   // "Quack!"
makeItQuack(robotDuck);  // "Beep-quack!"
makeItSwim(realDuck);    // "Duck is swimming"
makeItSwim(robotDuck);   // "Robot duck is swimming mechanically"


// ============================================================================
// 📌 SECTION 9: MIXINS AND COMPOSITION
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 9: MIXINS & COMPOSITION");
console.log("========================================\n");

/*
 * JavaScript only supports single inheritance.
 * Mixins allow adding functionality from multiple sources.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 9.1 MIXINS PATTERN
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== MIXINS ===\n");

// Mixin objects containing reusable functionality
const SpeakerMixin = {
    speak(text) {
        return `${this.name} says: "${text}"`;
    }
};

const WalkerMixin = {
    walk() {
        return `${this.name} is walking`;
    },
    run() {
        return `${this.name} is running`;
    }
};

const SwimmerMixin = {
    swim() {
        return `${this.name} is swimming`;
    }
};

// Apply mixins to a class
class Person2 {
    constructor(name) {
        this.name = name;
    }
}

// Add mixin methods to prototype
Object.assign(Person2.prototype, SpeakerMixin, WalkerMixin);

const person = new Person2("Alice");
console.log(person.speak("Hello!"));
console.log(person.walk());
console.log(person.run());

// ─────────────────────────────────────────────────────────────────────────────
// 9.2 MIXIN FUNCTION PATTERN
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== MIXIN FUNCTIONS ===\n");

// Mixin as a function that extends a class
const TimestampMixin = (Base) => class extends Base {
    getTimestamp() {
        return new Date().toISOString();
    }

    logWithTimestamp(message) {
        console.log(`[${this.getTimestamp()}] ${message}`);
    }
};

const SerializableMixin = (Base) => class extends Base {
    toJSON() {
        return JSON.stringify(this);
    }

    static fromJSON(json) {
        return Object.assign(new this(), JSON.parse(json));
    }
};

// Apply mixins
class BaseEntity {
    constructor(id) {
        this.id = id;
    }
}

class User2 extends SerializableMixin(TimestampMixin(BaseEntity)) {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}

const user2 = new User2(1, "John");
console.log("JSON:", user2.toJSON());
user2.logWithTimestamp("User created");

// ─────────────────────────────────────────────────────────────────────────────
// 9.3 COMPOSITION OVER INHERITANCE
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== COMPOSITION ===\n");

// Instead of inheritance, compose objects from smaller pieces

// Behavior factories
const createFlyer = (state) => ({
    fly() {
        return `${state.name} is flying`;
    }
});

const createSwimmer2 = (state) => ({
    swim() {
        return `${state.name} is swimming`;
    }
});

const createWalker = (state) => ({
    walk() {
        return `${state.name} is walking`;
    }
});

// Compose creatures with different abilities
const createDuck2 = (name) => {
    const state = { name };

    return {
        name,
        ...createFlyer(state),
        ...createSwimmer2(state),
        ...createWalker(state),
        quack() {
            return `${name} says: Quack!`;
        }
    };
};

const createPenguin = (name) => {
    const state = { name };

    return {
        name,
        ...createSwimmer2(state),
        ...createWalker(state),
        // No flying!
    };
};

const duck2 = createDuck2("Donald");
console.log(duck2.fly());
console.log(duck2.swim());
console.log(duck2.quack());

const penguin = createPenguin("Pingu");
console.log(penguin.swim());
console.log(penguin.walk());
// penguin.fly(); // ❌ undefined - penguins can't fly!


// ============================================================================
// 📌 SECTION 10: ABSTRACT CLASSES PATTERN
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 10: ABSTRACT CLASSES");
console.log("========================================\n");

/*
 * JavaScript doesn't have built-in abstract classes,
 * but we can simulate them.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 10.1 SIMULATING ABSTRACT CLASSES
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== ABSTRACT CLASS PATTERN ===\n");

class AbstractVehicle {
    constructor(name) {
        // Prevent direct instantiation
        if (new.target === AbstractVehicle) {
            throw new Error("Cannot instantiate abstract class AbstractVehicle");
        }
        this.name = name;
    }

    // Abstract method - must be implemented by subclasses
    start() {
        throw new Error("Method 'start()' must be implemented");
    }

    stop() {
        throw new Error("Method 'stop()' must be implemented");
    }

    // Concrete method - shared implementation
    describe() {
        return `Vehicle: ${this.name}`;
    }
}

class Car2 extends AbstractVehicle {
    constructor(name, fuelType) {
        super(name);
        this.fuelType = fuelType;
    }

    start() {
        return `${this.name} engine starting... Vroom!`;
    }

    stop() {
        return `${this.name} engine stopped`;
    }
}

class ElectricBike extends AbstractVehicle {
    constructor(name, batteryLevel) {
        super(name);
        this.batteryLevel = batteryLevel;
    }

    start() {
        return `${this.name} motor activated silently`;
    }

    stop() {
        return `${this.name} motor deactivated`;
    }
}

const car2 = new Car2("Tesla Model 3", "Electric");
const bike = new ElectricBike("E-Bike Pro", 100);

console.log(car2.describe());
console.log(car2.start());

console.log(bike.describe());
console.log(bike.start());

// try {
//     const vehicle = new AbstractVehicle("Generic");
// } catch (e) {
//     console.log("Error:", e.message);
// }


// ============================================================================
// 📌 SECTION 11: DESIGN PATTERNS WITH CLASSES
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 11: DESIGN PATTERNS");
console.log("========================================\n");

// ─────────────────────────────────────────────────────────────────────────────
// 11.1 SINGLETON PATTERN
// ─────────────────────────────────────────────────────────────────────────────

console.log("=== SINGLETON ===\n");

class Singleton {
    static #instance = null;

    constructor() {
        if (Singleton.#instance) {
            return Singleton.#instance;
        }
        Singleton.#instance = this;
        this.data = [];
    }

    addData(item) {
        this.data.push(item);
    }

    getData() {
        return this.data;
    }

    static getInstance() {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }
}

const s1 = new Singleton();
const s2 = new Singleton();

s1.addData("First");
s2.addData("Second");

console.log("s1 === s2:", s1 === s2); // true
console.log("Data:", s1.getData()); // ["First", "Second"]

// ─────────────────────────────────────────────────────────────────────────────
// 11.2 FACTORY PATTERN
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== FACTORY ===\n");

class Car3 {
    constructor(model) {
        this.type = "Car";
        this.model = model;
    }
}

class Truck {
    constructor(model) {
        this.type = "Truck";
        this.model = model;
    }
}

class Motorcycle {
    constructor(model) {
        this.type = "Motorcycle";
        this.model = model;
    }
}

class VehicleFactory {
    static create(type, model) {
        switch (type.toLowerCase()) {
            case "car":
                return new Car3(model);
            case "truck":
                return new Truck(model);
            case "motorcycle":
                return new Motorcycle(model);
            default:
                throw new Error(`Unknown vehicle type: ${type}`);
        }
    }
}

const car3 = VehicleFactory.create("car", "Sedan");
const truck = VehicleFactory.create("truck", "Pickup");
const moto = VehicleFactory.create("motorcycle", "Sport");

console.log(car3);  // { type: "Car", model: "Sedan" }
console.log(truck); // { type: "Truck", model: "Pickup" }
console.log(moto);  // { type: "Motorcycle", model: "Sport" }

// ─────────────────────────────────────────────────────────────────────────────
// 11.3 OBSERVER PATTERN
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== OBSERVER ===\n");

class EventEmitter {
    #listeners = {};

    on(event, callback) {
        if (!this.#listeners[event]) {
            this.#listeners[event] = [];
        }
        this.#listeners[event].push(callback);
        return () => this.off(event, callback);
    }

    off(event, callback) {
        if (this.#listeners[event]) {
            this.#listeners[event] = this.#listeners[event]
                .filter(cb => cb !== callback);
        }
    }

    emit(event, ...args) {
        if (this.#listeners[event]) {
            this.#listeners[event].forEach(callback => {
                callback(...args);
            });
        }
    }

    once(event, callback) {
        const wrapper = (...args) => {
            callback(...args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }
}

const emitter = new EventEmitter();

// Subscribe
emitter.on("message", (msg) => console.log(`  Received: ${msg}`));
emitter.once("login", (user) => console.log(`  ${user} logged in`));

// Emit
console.log("Emitting events:");
emitter.emit("message", "Hello!");
emitter.emit("message", "World!");
emitter.emit("login", "Alice");
emitter.emit("login", "Bob"); // Won't trigger (once)

// ─────────────────────────────────────────────────────────────────────────────
// 11.4 BUILDER PATTERN
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n=== BUILDER ===\n");

class QueryBuilder {
    #table = "";
    #columns = ["*"];
    #conditions = [];
    #orderBy = null;
    #limit = null;

    select(...columns) {
        this.#columns = columns.length ? columns : ["*"];
        return this;
    }

    from(table) {
        this.#table = table;
        return this;
    }

    where(condition) {
        this.#conditions.push(condition);
        return this;
    }

    orderBy(column, direction = "ASC") {
        this.#orderBy = `${column} ${direction}`;
        return this;
    }

    limit(count) {
        this.#limit = count;
        return this;
    }

    build() {
        let query = `SELECT ${this.#columns.join(", ")} FROM ${this.#table}`;

        if (this.#conditions.length) {
            query += ` WHERE ${this.#conditions.join(" AND ")}`;
        }
        if (this.#orderBy) {
            query += ` ORDER BY ${this.#orderBy}`;
        }
        if (this.#limit) {
            query += ` LIMIT ${this.#limit}`;
        }

        return query;
    }
}

const query = new QueryBuilder()
    .select("id", "name", "email")
    .from("users")
    .where("active = true")
    .where("age >= 18")
    .orderBy("name", "ASC")
    .limit(10)
    .build();

console.log("Query:", query);


// ============================================================================
// 📌 SECTION 12: BEST PRACTICES AND SUMMARY
// ============================================================================

console.log("\n\n========================================");
console.log("📌 SECTION 12: BEST PRACTICES");
console.log("========================================\n");

console.log(`
📚 CLASSES REFERENCE TABLE:

CLASS SYNTAX:
┌─────────────────────────────────────────────────────────────────────┐
│ class Name {}             │ Class declaration                      │
│ const Name = class {}     │ Class expression                       │
│ class Child extends Parent│ Inheritance                            │
└─────────────────────────────────────────────────────────────────────┘

MEMBERS:
┌─────────────────────────────────────────────────────────────────────┐
│ constructor(args)         │ Initialize instance                    │
│ method() {}               │ Instance method                        │
│ property = value          │ Instance field (ES2022)                │
│ #privateField             │ Private field (ES2022)                 │
│ #privateMethod() {}       │ Private method (ES2022)                │
│ static method() {}        │ Static method                          │
│ static property = value   │ Static field                           │
│ static #private           │ Private static                         │
│ static {}                 │ Static initialization block            │
│ get propertyName() {}     │ Getter                                 │
│ set propertyName(v) {}    │ Setter                                 │
└─────────────────────────────────────────────────────────────────────┘

INHERITANCE KEYWORDS:
┌─────────────────────────────────────────────────────────────────────┐
│ extends                   │ Inherit from parent class              │
│ super()                   │ Call parent constructor                │
│ super.method()            │ Call parent method                     │
└─────────────────────────────────────────────────────────────────────┘

✅ BEST PRACTICES:

1. NAMING:
   - Use PascalCase for class names
   - Use descriptive names (User, not U)
   - Name methods as verbs (getUser, calculateTotal)

2. CONSTRUCTOR:
   - Keep constructors simple
   - Validate parameters
   - Use factory methods for complex creation

3. ENCAPSULATION:
   - Use private fields (#) for internal state
   - Expose controlled access via getters/setters
   - Don't expose implementation details

4. INHERITANCE:
   - Prefer composition over inheritance
   - Keep inheritance hierarchies shallow
   - Always call super() first in derived constructors
   - Use abstract class pattern when needed

5. METHODS:
   - Keep methods focused (single responsibility)
   - Use arrow functions for callbacks to preserve 'this'
   - Return 'this' for method chaining when appropriate

6. STATIC MEMBERS:
   - Use for utility functions
   - Use for factory methods
   - Use for constants and configuration

7. AVOID:
   - Deep inheritance chains (max 2-3 levels)
   - God classes (too many responsibilities)
   - Exposing internal state directly
   - Using 'var' in class methods

8. PATTERNS:
   - Singleton for shared resources
   - Factory for complex object creation
   - Observer for event-driven architecture
   - Builder for complex configuration
`);

console.log("🎉 End of Class 09 - JavaScript Classes Complete Guide!");