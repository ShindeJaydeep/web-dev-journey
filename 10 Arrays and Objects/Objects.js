// Creating an Object 
let person = {
    name: "John",
    age: 30,
    job: "Software Engineer"
}
console.log(person.name);  //John


//Adding & Deleting Properties
person.city = "New York";
delete person.job;
console.log(person);  

//Accessing Properties
console.log(person["age"]);  //30
console.log(person.name);  //John

//Object Methods 

let car = {
    brand: "Tesla",
    start: function(){
        return "car started";
    }
};
console.log(car.start());  //car started



//Creating a Prototype
function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    return this.name + "makes a noise.";
};

let dog = new Animal("Buddy");
console.log(dog.speak());  //Buddy makes a noise.

// Overriding Prototypes
dog.speak = function(){
    return this.name + "barks.";
}
console.log(dog.speak());  //Buddy barks.


// Iterating Over Arrays
 let fruits2 = ["Apple","Banana","Mango"];
 fruits2.forEach(fruit => console.log(fruit));


 