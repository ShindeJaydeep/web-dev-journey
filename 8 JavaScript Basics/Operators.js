// USing if - else
let marks = 85;

if (marks >= 90){
    console.log("Grade : A");
} else if (marks>= 75){
    console.log("Grade : B")
} else{
    console.log("Grade: C");
}

// Using Switch-case
let day = "Monday";

switch (day){
    case "Monday":
        console.log("Start of the week!");
        break;
        case "Friday":
            console.log("Weekend is near!");
        default:
            console.log("Another day")

}


//Ternary Operator

let isRaining = true;
let message = isRaining? "Take an Unbrella": "Enjoy the sun *";

console.log(message);


//Variable Declarations

var x = 10;
let y = 20;
const z = 30;
x = 15  //Allowed
y = 25 //Allowed
z = 35 //Not Allowed    
console.log(x,y,z)


