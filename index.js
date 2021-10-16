const ps = require("prompt-sync");
 const prompt = ps(); 

let name = prompt("Enter your name: ");
console.log(`Hello ${name}`);

function add() {
    console.log("\nAddation of two numbers");
var add1 = prompt("Enter first number for Addition: ");
var add2 = prompt("Enter second number for Addition: ");
console.log(parseInt(add1)+parseInt(add2));
}

function sub()
{
    console.log("\nSubtraction of two numbers");
var sub1 = prompt("Enter first number for Subtraction: ");
var sub2 = prompt("Enter second number for Subtraction: ");
console.log(parseInt(sub1)-parseInt(sub2));
}

function div()
{
    console.log("\nDivide of two numbers");
var div1 = prompt("Enter Divisor: ");10
var div2 = prompt("Enter Dividend: ");
console.log(parseInt(div1)/parseInt(div2));
}

function mul()
{
    console.log("\nMultiplication of two numbers");
    var mul1 = prompt("Enter first number for multiplication: ");
    var mul2 = prompt("Enter second number for multiplication: ");
    console.log(parseInt(mul1)*parseInt(mul2));
}

function mod()
{
    console.log("\n Modulus  of two numbers");
var mod1 = prompt("Enter Divisor: ");
var mod2 = prompt("Enter Dividend: ");
console.log(parseInt(mod1)%parseInt(mod2)); 

}

// function calling here

add();
sub();
div(); 
mul();
mod();

hello pakaj












