
// two way to decelare an arrys;
const myArr = [10,20,30,40];
const myHero = ["superman", "antman", "batman", "Ironman"];

const myArr2 = new Array(12,11,13);
// console.log(myArr);
// console.log(myHero[2]);

// Arrays methods;

// 1. push; => add element at last;

// myArr2.push(13);
// myArr2.push(21);
// console.log(myArr2);

// 2. pop => remove element from last;

myArr2.pop();
// console.log(myArr2);

//3. unshift => add element at first;
//4. shift  => remove element from first;

// myArr2.unshift(233);
// console.log(myArr2);

// myArr2.shift();
// console.log(myArr2);

// 5. includes => check element is present or not; return true/false;
// 6. indexof => return index of element; if not present return -1;


// 7. join => convert array to string;
// const NewArr2 =  myArr2.join();
// console.log(NewArr2);
// console.log(typeof NewArr2);

//8. slice => in a slice if we are using this then it will give the copy of the arrays form where to where we want the value;

//9. splice => but in the splice we are removing the element from the original arrays and but when you are give the index value then last value of index will also aaded;

// const myValue = [12,13,14,15,16];
// console.log(myValue);

// const newValue = myValue.slice(1,3);
// console.log(newValue);


// const myValue2 = [12,13,14,15,16];
// console.log(myValue2);


// const newValue2 = myValue2.splice(1,3);
// console.log(newValue2); 
// console.log(myValue2);


