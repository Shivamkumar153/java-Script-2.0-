// learn date function to ;
let myDate = new Date();

console.log(myDate.toString()); // prints date and time and day;
console.log(myDate.toDateString()); // prints date and day ;
console.log(myDate.toTimeString()); // give time 
console.log(typeof myDate); // object;


//if you want to decelare the specific date the;

let myTodayDate = new Date(2023, 0 , 26); // months always will 0 because here it is a string;
let myTodayDate1 = new Date(2026, 0, 26, 11 , 55);
let myTodayDate3 = new Date("2026-01-26 11:55:00");
console.log(myTodayDate3.toLocaleDateString()); // for print you have to use function tolocalstring;

// toLocaleString; read some more consept of date at last or look chai or code videos number 13 for revision; 

