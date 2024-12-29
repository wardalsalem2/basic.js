// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".

let num1 = 12;
let num2 = 13;
if ( num1 > 10 && num2>10) {
    console.log("both numbers are greater than 10");
}
else{
    console.log( "At least one number is not greater than 10");
}


// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
let username = "ward";
let password = 23;
let correctusername = "ward ";
let correctpassword = 2345;
if(username===correctusername && password===correctpassword){
    console.log("Access granted" );
}
else{
    console.log("Access denied");
}



// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
let number = 80;
if(number>=10 && number<=20){
    console.log("The number is between 10 and 20");
}
else{
    console.log("The number is not between 10 and 20");
}


// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
let age = 18;
let license = "yes";
if(age >= 18 && license=="yes"){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}
// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "valid number";".
var num = 11;
if(num>10 && num<0){
    console.log("Invalid number");
}
else{
    console.log("valid number");
}
// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".
let num10 = 22;
if(     num10>=5 && num10<=10  || num10>=20 && num10<=25){
console.log("The number is valid");
}
else{
    console.log("The number is not valid");
}



// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".
let password1 = ("password");
if(password1==="secret" || password1==="password"){
    console.log("Access granted");
}
else{
    console.log("Access denied")
}


// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".

let nummm = 80;
if(nummm >= 0 && nummm <= 100 && nummm % 2 === 0){
console.log("The number is even and between 0 and 100");
}
else{
    console.log("The number is not even and/or not between 0 and 100")
}

// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
let numm2 = 3 ;
let numm3 = -6;
if(numm2 < 0 || numm3 < 0){
    console.log("At least one number is negative");
}
else{
    console.log( "Both numbers are positive");
}

// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
let age1 = 12;
let isastudent = "yes"
if (age1 < 18 || isastudent=="yes"){
console.log("You qualify for a discount")
}
else{
    console.log("You do not qualify for a discount")
}