//logical operators
let marks = 75;

if ((marks > 33 &&  marks <= 80) || !false) {
    console.log("Pass");
} // 

//Practice Qs
//Q1. A "good string" is a string that starts with the letter
// 'a' & has a length > 3. Write a Progream to find  if a
//  string is a good or not

let str = "ample";

if(str[0] == "a" && str.length > 3) {
    console.log("Good String");
}  else {
    console.log("Not a good String");
}


let num = 12;

if((num% 3 === 0) && ((num+1 === 15) || (num-1 === 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}


//Truthy & Falsy
if(true) {
    console.log("it has true value");
} else {
    console.log("it has false value");
}


// Switch statement
let color = "red";

switch(color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
            break;
    case "green":
        console.log("go");
                break;
    default:
        console.log("light is broken");
          
}

console.log("after switch stt");