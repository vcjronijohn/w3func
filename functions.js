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
    return console.log("globalvar + localvar = " + (globalvar + localvar));
    //return globalvar + localvar;
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

// function uInput(){
//     var input=prompt();
//     var result=Math.floor((20 * Math.random()));
//     if(input == result){
//         console.log("You guessed correctly!!");
//         console.log("You entered " + input + ", I guessed " + result);
//      }
//     else {
//         console.log("You guessed incorrectly.");
//         console.log("You entered " + input + ", I guessed " + result);
//      }   
    
// }
// uInput();

// function uInput(){
//     var input=prompt("Enter a number:");
//     var result=Math.floor((20 * Math.random()));
//     var success=false;
//     var retry=3;
//     while(success==false ){
//     if(input == result){
//         console.log("You guessed correctly!!");
//         console.log("You entered " + input + ", I guessed " + result);
//         success=true;
//     }
//     else if(input < result && 0 <= retry >0){
//         console.log("You guessed too low. You have " + retry + " turns left.");
//         console.log("You entered " + input );
//         input=prompt("Enter a number:");
//         retry--;
//     }   
//     else if(input > result && retry > 0){
//         console.log("You guessed too high. You have " + retry + " turns left.");
//         console.log("You entered " + input );
//         input=prompt("Enter a number:");
//         retry--;
//     }"S O R R Y..."
    
// }}
// uInput();

function grocery(){
    var
    inventory = ["bread", "peanut butter", "eggs", "butter", "avocado", "coffee", "tea", "half and half", "chicken" , "steak"];
    //System.out.println(inventory[0]);
    for(var i=0; i<= ( inventory.length -1 ); i++){
        console.log(inventory[i]);
    }
}
grocery();

function strUpcase(){
    var upcase=prompt("Enter a string:");
    for(var i=0; i<= ( upcase.length - 1) ; i++){
        console.log(upcase[i].toUpperCase());
    }

}
strUpcase();
//var
//    inventory = [["bread", 3],["juice", 5], ["peanut butter", 5], ["eggs", 10], ["butter", 3], ["avocado", 20], ["coffee", 10], ["tea", 15], ["half&half", 20], ["chicken", 12], ["steak", 2]];

function grocInv(){
    var wannabuy="";
    var key, value
    var item=[];
    var
    inventory = [["bread", 3],["juice", 5], ["peanut butter", 5], ["eggs", 10], ["butter", 3], ["avocado", 20], ["coffee", 10], ["tea", 15], ["half&half", 20], ["chicken", 12], ["steak", 2]];

    for(var i=0; i< ( inventory.length ); i++){
        for(var j=0; j< ( inventory[i].length ); j++){
           // key = inventory[i][j][0]                      // extract property key name
           // value = inventory[i][j][1]
            //console.log(inventory[i][j][0], inventory[i][j][1]);
            item=inventory[i];
            console.log(item);
        }
    }
    // console.log(inventory[0][0], inventory[0][1]);
    // console.log(inventory[1][0], inventory[1][1]);
    // console.log(inventory[2][0], inventory[2][1]);
    // console.log(inventory[3][0], inventory[3][1]);
    // console.log(inventory[4][0], inventory[4][1]);
    // console.log(inventory[5][0], inventory[5][1]);

//    wannabuy=prompt(Would you like to make a purchase? Y/N);
//    if(wannabuy == "y" || "Y"){
//        item=prompt("What would you like?");
//        for(var i=0; i<= ( inventory.length - 1 ); i++){
//            if(inventory[i][0]== item[0]){

 //           };
 //       }
 //   }
//}
//    item=prompt()
//}
grocInv();
}

function transformEmployeeData(data) {
    var result = []                              // new array to hold transformed data
    var key, value
    for (var i = 0; i < data.length; i++) {      // loop over employees
      var employee = {}                          // new object for current employee
      for (var j = 0; j < data[i].length; j++) { // loop over current employee details
        key = data[i][j][0]                      // extract property key name
        value = data[i][j][1]                    // and value
        employee[key] = value                    // add property to object
      }
      result.push(employee)                      // add new object to array
    }
    return result
  }
  
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

//make an array of 10 grocery store items loop through that array and log each item.

//loop through a string at least 10 characters long and log each character
//make that string upper case
//
//Create an inventory array and associate a number with each item. Then get user input that purchases items (subtracts one from the item).

// Grocery Store app
// functions:
// add to inventory
// subtract from inventory
// Notify when out of stock
// data:
// inventory
// inventory count


//var i = 0;
//console.log("i is "  + i);
//function ReturnTen() {
//    return 10;
//}
//i = ReturnTen();
//console.log("i is "  + i);
