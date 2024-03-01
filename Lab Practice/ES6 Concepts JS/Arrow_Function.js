
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


