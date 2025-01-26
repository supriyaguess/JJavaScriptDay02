let age = 17;
if(age >= 18) {
    console.log("you can vote");
} else {
    console.log("you can not vote");
}


let color = "red";

if(color === "red") {
    console.log("Stop");
} else if (color ===  "yellow") {
    console.log("slow down");
} else if ( color == "green") {
    console.log("Go");
} else {
    console.log("trffic light is broken");
}


//NESTED IF ELSE 
let marks = 45;

if(marks >= 33) {
    console.log("Pass");
    if(marks >= 80)  {
        console.log("Grade :  O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time");
}