str_1 = "Hamad Ahmed 1234 here again 56789()"

str_2 = " New String 1 New";

//length
str_length = str_1.length;
console.log("Length: "+str_length);

//chatAt
let new_c = str_1.charAt(4);
console.log("Char At index 4: "+new_c);

//charCodeAt
let char_code = str_1.charCodeAt(4);
console.log("Char Code At index 4: "+char_code);

//at
let s1 = str_1.at(4); //same as char At
console.log("Char At index 4: "+s1);

//indexing
let s2 = str_1[2];
console.log(s2);

//slice
let s3 = str_1.slice(5,15);
console.log("Slicing from index 5 to 15"+s3);

let s4 = str_1.slice(5);
console.log(s4); //slicing all after 5

//using negative indexes
let s5 = str_1.slice(-5,-7);

//substring
let s6 = str_1.substring(5,10);

//substr
let s7 = str_1.substr(10,16);

let s8 = str_1.substr(16);

let s9 = str_1.substr(-10);

//UpperCase
let p1 = str_1.toUpperCase();
console.log(p1);

let new_str_11 = str_1.substring(0,11).toUpperCase();

//concat and lower case
let p3 = new_str_11.concat(str_2.toLowerCase());
console.log("New Concatenatd String: "+p3);

//trim
//removes white spaces

str_2.trim();
str_1.trimStart();
str_1.trimEnd();

//padding with string till index 5
let p4 = str_1.padStart(10,"pkkkkk");
console.log("After padding :: "+p4); //not working here

//repeat --creating 3 copies of a string
let p5 = str_1.repeat(3);
console.log(p5);

//replace
let r1 = str_1.replace("1234","changed");
console.log(r1);
//replacing all New in str_2
let r2 = str_2.replace(/New/g,"replaced");
console.log(r2);
//replace without case sensiivity 
let r3 = str_2.replace(/NEW/i,"replaced");
console.log(r3);

//replaceAll
let r4 = str_2.replaceAll(/New/g,"all replacement");

//split --used to convert a string to an array
// either as a whole or in parts
let r5 = str_1.split(""); 
console.log(r5); //each letter on separate index

let r6 = str_1.split(" ");
console.log(r6); //separating elements based on space in between
 
//index of
let n1 = str_1.indexOf("Hamad");
console.log(n1);

//searching from a specific index = 6
str_1.indexOf("Hamad",6);
//returns -1 if not found

//search
let n2 = str_1.search("1234");

//match
let n3 = str_1.match("Ahmed");
console.log("Match "+n3);














