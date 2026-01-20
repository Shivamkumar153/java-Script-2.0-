const accontId = 12345;
let accountEmail = "shiavm@123.gmail.com"
var accountPassword = "1234"
accountCity = "naubatpur"
let accountCountry; // undefined

accountEmail = "rathor@123.com"
accountPassword = "43333354";
accountCity = "patna";

// accontId = 3; in the const i can change the value;
//accountPassword = "abcd"; in 
console.log(accountPassword);
console.table([accontId,accountEmail,accountPassword,accountCity, accountCountry]);

/*
   never use var in js because of issus in block scope and functional scop 
*/