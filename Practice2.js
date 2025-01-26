let size = "XL";

if(size === "XL") {
    console.log("price is Rs. 250");
} else if( size === "L") {
    console.log("price is Rs. 200");
} else if(size === "M") {
    console.log("price is 100");
} else {
    console.log("price is Rs.50");
}


//QS3 Use switch statement to print the day of the week 
// using a number variable "day" with values 1 to 7
//  1 = monday, 2 = tuesday and so on

let day = 7;

switch(day) {
    case 1:
        console.log("today is monday");
        break;
    case 2:
        console.log("today is tuesday");
        break;
    case 3:
        console.log("today is wednesday");
        break;
    case 4:
        console.log("today is thrusday");
         break;
    case 5:
        console.log("today is friday");
        break; 
    case 6:
        console.log("today is saturday");
        break;  
    case 7:
        console.log("today is sunday fun day!");
        break;
    default :
        console.log("wrong day!"); 
      
    
}