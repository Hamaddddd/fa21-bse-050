//rest is used to group separate elements in an array
//to recieve indefinite no of args
function f1(...ps){return ps};
f1(1,2,3);
console.log(f1(12,122,122,122221,221));


//spread is the opp, it takes elements outside an arr

let arr1 = [1,2,3,3,4];
let arr2 = [232,23232,233];

let arr3 = [...arr1, ...arr2];

console.log(arr3);
console.log(... arr3);



//mid paper question using rest and reduce method
function multiply(...params){//rest parameters
    if(params.length==0){
        return 0;
    }

    function getProd(product,value){
        console.log(product);
        return product * value;
    }

    finalOutput = params.reduce(getProd,1);
    return finalOutput;
}

console.log(multiply(2,3,4));

console.log(multiply());

