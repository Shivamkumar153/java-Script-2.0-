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
    emil: "shivamkuamr@123gmail.com",
    [logo]: "mylogo",
    isLoggedIn: false,
    LastLoginDays:["monday", "Saturday"]
}

// access of the object value;

console.log(JsUser.name); // job hum object ka under value "name": "shivam" likha ga to kaam nhi kera ga ;
console.log(JsUser["emil"]);
console.log(JsUser[logo]);


