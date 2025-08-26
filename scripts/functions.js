console.log ("function.js");

//1.Function Declaration (creating a function)
function sayHello(){
    //body of the function
    console.log("Hello Cohort 61");
}

//2. Call/Trigger/Run/Execute the function (code, console, user)
sayHello();
sayHello();

// Example 2 with 1 parameter  (input)
function greet(name){
    console.log("Hello " + name);
}

greet ("Jeuan");
greet ("Brant");
greet ("Micah");

//Example 3 with 2 parameters
function greet2(fname,lname){
    console.log ("Welcome to the system " + fname + " " + lname);
}

greet2("Eric", "Dorsey");

//Challenge 1: Double the NUmber
//Task:
//- CreateCreate a function called doubleNumber that takes one number as a parameter.
//The function should return the number multiplied by 2.
//Print the result when you call the function with 3 different numbers.

function doubleNumber(num){
    console.log(num * 2);
}

doubleNumber(5);
doubleNumber(34);
doubleNumber(100);

//Example 4 with the prompt
function Welcome(){
    let name = prompt("Enter your name:");
    console.log("Welcome " + name);
}

//run from the console (welcome() + enter

//Example 5 with default parameters
function add(num1=0,num2=0){
    let total = num1 + num2;
    console.log("The total is: " + total);
}
add();
add(5);
add(5,10);

//Challenge 2:
//Create a function called combineNames that takes two parameters: firstName and lastName .
//The function should return the full name in the format: "firstName lastName" .
//If either parameter is missing, it should use the default value "Unknown" for that parameter.

function combineNames(firstName ="Unknown", lastName = "Unknown"){
    console.log(`${firstName} ${lastName}`);
}

combineNames();
combineNames("Patrick");
combineNames("Patrick", "Fitzgerald")

//Challenge 3: Convert Minutes to Seconds

function convertToSeconds(){
    let mins = Number(prompt("Enter the mins:"));
    let sec = mins*60;
    document.getElementById("results").innerHTML+=`
    <li class="conv"> ${mins} min are ${sec}s </li>
    `;
}
   

