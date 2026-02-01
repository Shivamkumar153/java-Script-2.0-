// obejct literals
// constroctores => Object.create;
// singleton => 
// object ko deceler kerna ka 2 tarika hota hai 


// object literals ;
// deceletration of object;
const logo = Symbol("mylogo"); 

const JsUser ={
    name: "shivam",
    age: 18,
    email: "shivamkuamr@123gmail.com",
    [logo]: "mylogo",
    isLoggedIn: false,
    LastLoginDays:["monday", "Saturday"]
}

// access of the object value;

// console.log(JsUser.name); // job hum object ka under value "name": "shivam" likha ga to kaam nhi kera ga ;
// console.log(JsUser["email"]);
// console.log(JsUser[logo]);


// JsUser.email = "shivam@122@gmail.com"
// console.log(JsUser);

// Object.email(JsUser)
// JsUser.email ="raj@123gmail.com"
// console.log(JsUser);



// JsUser.greeting = function(){
//     console.log("hello world");
    
// }
// JsUser.greeting();
