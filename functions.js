"use strict"
var globalvar=45;

function AddItem(op1, op2){
//    console.log("op1 + op2 = " + (op1 + op2));
    console.log(op1 + " + " + op2 + " = " + (op1 + op2));
}

function MultiItem(item1, item2){
//    console.log("item1 * item2 = " + (item1 * item2));
    console.log(item1 + " * " + item2 + " = " + (item1 * item2));
}

function Loopit(begin, end){
    console.log("Loop from " + begin + " to " + end);
    for(var i = begin; i <= end; i++){
        console.log("Loop ", + i);
    }
}

function Globtest(localvar){
    console.log("globalvar is " + globalvar)
    console.log("localvar is " + localvar)
    console.log("globalvar + localvar = " + (globalvar + localvar));
}
AddItem(5, 5);
MultiItem(5, 5);
Loopit(1, 25);
Globtest(87)



// create a function that takes two arguments and adds them together
// create a function that takes two arguments and multiplies them together
// create a function that takes two arguments where the first argument is the start number and the 
// second argument is the end number. The body of the function starts a loop and ends it at the second argument and logs every number between the start and end number.
// create a variable in the global scope
// create a function that takes an argument
// add the argument to the global variable
// log the return of that function
// create an IIFE that logs your success of creating an IIFE
