// the new why to concat string is 
const name = "shivam";
const repoCount = 12;

// old way 
//console.log(name + repoCount + "");

// new way 

//console.log(`.....${name}.... ${repoCount}...`);

// new why to create the string;

const gameName = new String("Ravina"); // object 
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // method;
console.log(gameName.charAt(4)); // to find the value ;
console.log(gameName.indexOf("v")); // to find the index of the value ;

const newString = gameName.substring(0,5); // you cant give negitive value
console.log(newString);

const oneMore = gameName.slice(-6 ,3); // you can give negitive value
console.log(oneMore);

const yourName = "      hello shiavm       ";
console.log(yourName)
console.log(yourName.trim()); // to remove the extra spaces;