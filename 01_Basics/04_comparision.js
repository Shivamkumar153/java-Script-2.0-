// try to compare the same data type;

// console.log(null >0);
// console.log(null >=0);
// console.log(null==0);


// == -> its only checks value 
// === -> its checks value and data type both

// kiss terha say memery ko store kerte hai or kiss terha say access kerte hai us basics p hum log apne data 
 // type ko categorize ma rhakte hai

// 1. Primitive data type       
// 2. Non-Primitive data type (reference data type)

// Primitive data type :- call  by value (matlb )
// 7 types :- String, NUmber,Boolean, null, undefined,
//symbol,BigInt


// Reference(Non - primitive data type)(call by reference);

//javaScript is a dynamically typed language means its not mandatory to define data type




// const id = Symbol('123'); // in symbol if your value is same then also its consider as different value;
// const id2 = Symbol('123');
// console.log(id==id2);



// Array, object, Function;

// arrays :-
  //const friends = ["aman","prince", "gullu"];
  // objects:-
// let myObj = {
//     name : "shivam",
//     age : 22,
//     marks : 90.0,
// }

//function:-
// function school(){
//     let objStudent ={
//         name : "xyz",
//         age : 12,
//         grade : "b"
//     }
//     console.log(objStudent);
// }
// return school();


// ***********************************************************************************

//Stack , Heap ;

// STack(Primitive) , Heap(Non-Ptimitive);

// let num1 = 6;
// num2 = 9;
// let num3 = num2 == num1;
// console.log(num3);
// console.log(num1);
// console.log(num2);


//object 
// let princeOld = {
//      name : "prince",
//      age : 23,
//      marks :98,
//      email : "prince@123gmail.com",

// }
// let princeNew = princeOld
//  princeOld.email = "prince@12112gmail.com";

// console.log(princeNew.email);
// console.log(princeOld.email);

// let amanOld ={
//     name : "Aman",
//      age : 24,
//      marks :88,
//      email : "aman@113gmail.com",
// }


