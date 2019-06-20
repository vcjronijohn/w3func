"use strict"
var globalvar=45;
var added=0;

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
    console.log("globalvar + localvar = " + (globalvar + localvar))
    return globalvar + localvar;
}
AddItem(5, 5);
MultiItem(5, 5);
Loopit(1, 25);
Globtest(87)
console.log(added=(Globtest(11)));

(function (){
    var d1=81;
    var d2=9;
    var answer= d1/d2;
    console.log(answer);
}) ();

function uInput(){
    var input=prompt();
    var result=Math.floor((20 * Math.random()));
    if(input == result){
        console.log("You guessed correctly!!");
        console.log("You entered " + input + ", I guessed " + result);
     }
    else {
        console.log("You guessed incorrectly.");
        console.log("You entered " + input + ", I guessed " + result);
     }   
    
}
uInput();

//Use Math.random() to generate a random decimal.
//Multiply that random decimal by 20 .
//Use another function, Math.floor() to round the number down to its nearest whole number.


// create a function that takes two arguments and adds them together
// create a function that takes two arguments and multiplies them together
// create a function that takes two arguments where the first argument is the start number and the 
// second argument is the end number. The body of the function starts a loop and ends it at the second argument and logs every number between the start and end number.
// create a variable in the global scope
// create a function that takes an argument
// add the argument to the global variable
// log the return of that function
// create an IIFE that logs your success of creating an IIFE
// create a function that takes user input and compares it against a random number. If there is a match then log the success.

