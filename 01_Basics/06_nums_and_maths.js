// const score = 100;
// console.log(score);

// const value = new Number(200);
// console.log(value);

//i have to explor some function of number and string;
//toFixed;
//length;
//toString;
//toPrecision;
//toLocaleString;
//MAX_VALUE;
//MIN_VALUE;

//********************MATHS**************** */

//console.log(Math);
// console.log(Math.abs(-34)); // it will give the absolute value means no give negitive number;
//round;
//ceil; 
//floor;

//ranom;

// console.log(Math.random()); 
// console.log((Math.random()*10) +1);

// it will give the random value between 0 to 1;

// const min = 0;
// const max = 53;

// const MinScore = (Math.floor((Math.random()*10)+1) + min);
// const maxScore = (Math.floor((Math.random()*10)+1) - max);
// const NonNegative = Math.abs(maxScore);

// console.log(MinScore);
// console.log(NonNegative);

// we can also write like this ;

//console.log(Math.floor(Math.random() * (max - min + 1)) + min);

const min = 1; 
const max = 6;
const dice = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(dice);


