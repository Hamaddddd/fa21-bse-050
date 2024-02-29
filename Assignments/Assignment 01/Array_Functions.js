const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,100,140,1009];

const names = ["Hamad","Ahmed","Ali","Usman","Khalid"];

const new_arr = ["n1","n2","n3"];

let arr_size = arr1.length;
console.log(arr_size);

//accessing array elements 
e1 = names[3];
e2 = names.at(2);

//pop and push

console.log(arr1.pop()); // returns the element that is popped out

arr1.push(22);
console.log(arr1);

//unshift to add val in start
names.unshift("new entry");
console.log(names);

//concatenation
let concat_Arr = names.concat(new_arr,names);
console.log(concat_Arr);

//copy with in
console.log(new_arr.copyWithin(2,0)); 

new_arr.copyWithin(2,1,2);

//slice method for slicing out an element from array
// creating it as a separate array


let e3 = names.slice(0);
console.log(e3);