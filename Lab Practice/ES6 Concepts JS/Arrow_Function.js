
//arrow functions

//introduced in later versions of js -- simplified func creation

const arrowFunc = (x,y) => {
    return x+y;
}; //keeping it const bcz we dont want to change its ref later on

const arrowFunc2 = (x,y) => x+y; 

const arrowF3 = x => x;

const newFunc = () =>  {return {name: "Hamad"}
};
console.log(newFunc());

//JS moves the declarations of vars, funcs etc on top --just not when const used
// even if call it first then create
//eg:
// console.log(a);
// var a;


let numbs = [1,2,3,4,5,6,7];


//map through arrow func --get squared
const squareIt = x => x**2;

let squareIt2 = x => x**2;

let sq_arr = numbs.map(squareIt);

console.log("Squared numbers: "+sq_arr);

//filter --get even only
const onlyEven = x => {
    if(x%2 ==0){
        return x;
    }
    else return false
};

let onlyEven2= x => {
    if(x%2 ==0){
        return x;
    }
    else return false
};


let evenArr = numbs.filter(onlyEven2);
console.log(evenArr);

//reduce --sum
const sumIt = (x,y) => x+y;

let sumIt2 = (x,y) => x+y;

console.log("Sum is: "+numbs.reduce(sumIt2,1000));

//reduce calculate mean
var total,mean;
const meanCalculate = x => {
    total += x;
    mean = total/numbs.length;
};