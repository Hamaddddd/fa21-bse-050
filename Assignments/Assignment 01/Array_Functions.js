const arr1 = [1,2,3,4,5,6,7,8,9,10,11,6,6,6,12,100,140,1009];

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

//slice method --for slicing out an element from array
// creating it as a separate array

let e3 = names.slice(2,3);//slices out element on 2nd index only of array names 
console.log("Sliced element: "+e3);

let e4 = names.slice(3); //slices all the elemnts from 3 to end in a new array

//splice --used to add new element or also to replace
names.splice(1,0,"New Person 1","New Person 2");
console.log("After Splicing : "+names);

//for replacing elements in array
let e5 = names.splice(1,2,"P 1 replaced","P 2 replacesd");
console.log(names);
console.log("deleted elements: "+e5);

//Array Search Methods

const studentsArr = ["Std","Std 1","Std 2","Std 3","Std last"];

//checking index of an element --if not found then -1
console.log(studentsArr.indexOf("Std 3")); 

studentsArr.splice(1,0,"Std");
studentsArr.splice(4,0,"Std");

//accessing the last index of an entry done multiplw times
console.log(studentsArr.lastIndexOf("Std"));

//checking if an element exists or not using Includes()

console.log("Std 0 exist: "+studentsArr.includes("Std 0"));

//find and find index method

//first create a function that returns a value from arr
function TestFuction(value,index,array){
    return value > 100;
}

let f1 = arr1.find(TestFuction);
console.log(f1);

let f2 = arr1.findIndex(TestFuction);

//find last index
function TestFuction1(value,index,array){
    return value  > 1;
}

console.log(arr1.findLast(x => x > 2));

console.log("Last index of 6 : "+arr1.findLastIndex(TestFuction1));

//Sorting Methods

let new_sorted_arr = names.toSorted(); //sorts in alphabetical order
console.log(new_sorted_arr);

let new_rev_arr = names.toReversed();

//get minimum val

console.log(Math.min.apply(null,arr1));
//same for max

//Iteration Methods

//for each

let sum =0;

function myFunc(value,index,arr){
    sum += value;
    return sum;
}

arr1.forEach(myFunc);

//Map

function oneLess(val){
    return val -1;
}

arr1.map(oneLess);

//Filter

function existanceCheck(x){
    if(x == 6){
        return true;
    }
    else{return false;}
}

arr1.filter(existanceCheck);

//Reduce

function sumCalculate(x,y){
    return x+y;
}

console.log("Reduced val : "+arr1.reduce(sumCalculate ));

//reduce can also have an initial argument to start with

console.log("Reduced val : "+arr1.reduce(sumCalculate , 199));

//--the end

//JAZAKALLAH
