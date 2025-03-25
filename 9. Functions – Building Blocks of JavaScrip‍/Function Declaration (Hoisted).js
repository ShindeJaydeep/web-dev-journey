//Function Declaration (Hoissted)

console.log(greet("Jaydeep")); // Works! Output: Hello, Jaydeep!

function greet(name){
    return `Hello, $(name)!`;
}

//Here, the function is declared using function greet(), and it 
// works even before the definition appears because JavaScript
//  hoists function declarations.


//Named Function Expression 

const greet = function sayHello(name){
        return `Hello, $(name)!`;
};

console.log(greet("Jaydeep"))
console.log(sayHello("Jaydeep"));  // Erorr: sayHello is not defined

//Arrow Functions and Syntax
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Jaydeep")); // Output: Hello, Jaydeep!


//Multi-line Arrow Function
const multiply = (a,b) => {
    const result = a*b;
    return result;
};

console.log(multiply(3,4));

//Arrow Function Without Parentheses
const square = num => num * num;

console.log(square(5)); // ✅ Output: 25

//Arrow Function and this Binding

const person = {
    name: "Jaydeep",
    sayName: function() {
        setTimeout(() => {
            console.log(this.name); // ✅ Arrow function inherits `this` from `sayName`
        }, 1000);
    }
};

person.sayName(); // Output after 1 sec: Jaydeep

//Closures and Function Scope

function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // ✅ Output: Outer: Hello, Inner: World


//Closures for Data Privacy

function counter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        }
    };
}

const myCounter = counter();
myCounter.increment(); // ✅ Output: Count: 1
myCounter.increment(); // ✅ Output: Count: 2
myCounter.decrement(); // ✅ Output: Count: 1
console.log(myCounter.count); // ❌ Undefined (Private variable)


//Function Scope – Lexical Scoping

function outer() {
    let outerVariable = "I am outer";

    function inner() {
        console.log(outerVariable); // ✅ Can access outerVariable
    }

    inner();
}

outer(); // Output: I am outer
