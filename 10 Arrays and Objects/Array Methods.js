//push() – Adds an element to the end

let fruits = ["Apple", "Banana"];
fruits.push("Mango", "Orange", "Grapes");
console.log(fruits); 
// Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

//pop() – Removes the last element
let numbers = [1,2,3,4,5]
numbers.pop()
console.log(numbers); // Output: [1,2,3,4]

//shift() – Removes the first element
let color = ["Red","Blue","Green"]
color.shift()
console.log(color); // Output: ["Blue","Green"]

// unshift() – Adds an element at the beginning
let names = ["John", "Doe"]
names.unshift("Jane")
console.log(names); // Output: ["Jane", "John", "Doe"]

// splice() – Adds, removes, or replaces elements
let cars = ["Toyota", "Honda","Ford"]
cars.splice(1,0,"Nissan")
console.log(cars); // Output: ["Toyota", "Nissan", "Honda","Ford"]


// sort() – Sorts elements
let scores = [40,100,1,5,25]
scores.sort((a,b)=> a - b);
console.log(scores); // Output: [1, 5, 25, 40,100];


// Accessor Methods (Do Not Modify Original Array)
// concat() – Merges arrays
let arr1 = [1,2]
let arr2 = [3,4]
let combined = arr1.combined(arr2);
console.log(combined); // Output: [1,2,3,4]

// slice() – Extracts elements
let words = ["Hello","World","JavaScripts"]
let newwords = words.slice(1,3);
console.log(newwords);

//indexOf() – Finds index of an element
let animals = ["cat","Dog","Horse"]
console.log(animals.indexOf("Dog"));   //1


// includes() – Checks if an element exists
let cities = ["Mumbai", "Delhi", "Pune"];
console.log(cities.includes("Mumbai")); // Output: true

//Iteration Methods
// forEach() – Iterates over each element
let arr = [1,2,3];
arr.forEach(num => console.log(num*2));  // 2,4,6

// map() – Transforms elements into a new array
let numbers2 = [1,2,3]
let doubleNumbers = numbers2.map(num => num*2);
console.log(doubleNumbers); // Output: [2,4,6]

// filter() – Filters elements based on a condition

let ages = [18,25,30,15]
let adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18,25,30]

// reduce() – Reduces array to a single value
let nums = [1,2,3,4,5];
let sum = nums.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15
