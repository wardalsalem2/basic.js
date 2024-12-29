/*
1
Correct the syntax error
[ 1,7  9  45, ]

["Str" "alex","moh"

'the','fox' 'over' lazy, 'dog',  ];
*/

 let a = [1,7,9,45];
 let b = ["Str","alex","moh"];
 let v =  ['the','fox','over','lazy', 'dog'];  



// 2
// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]

// var fruits=["Tomato","Banana","Watermelon"];
// console.log(fruits.indexOf("Tomato"));
// console.log(fruits.indexOf("Banana"));

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var food =["shawerma","maglubeh", "kabseh","uozy","mashawee"];
var sport = [ " playbool", "sweeming","bascetbool"];
let Movie =["unknown","unknown","unknown"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let farray = [100,3,4,6];

function firstOfArray(farray){
    console.log(farray[0]);

}
firstOfArray(farray); 
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let larray = [100,3,4,6];

function lastOfArray(larray){
    console.log(larray[larray.length-1]);
}
lastOfArray(larray);
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let array = [0,5,7,9];
array.shift();
array.pop();
array.pop();
array.pop();
array.unshift(1,3,4,6,8,9);
array.push(10);
console.log(array);
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [2,3,4,6,8,9];
array2.shift();
array2.pop();
array2.unshift(1,9);
array2.push(13);
console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray (mid){
if(mid.length %2==1){
    return mid[Math.floor(mid.length/2)]
}
else{
 var middile1 = mid[mid.length/2 - 1 ];
var middile2 = mid[mid.length/2];
return ` ${middile1} and ${middile2}`;
}

}
console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]));



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ["cat", "ele" , "bird"];
console.log(animals)
animals[0]="zebra";
animals[1]= "elephant"
console.log(animals)
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums= [1,2,3,8,9];
function indexOfArray(nums,nn){
    console.log(nums[nn])
}
indexOfArray(nums,3);
indexOfArray(nums,1);
indexOfArray(nums,4);   
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
var nums = [1,2,3,8,9];
function arrayExceptLast(nums){
    nums.pop();
}
arrayExceptLast(nums);
console.log(nums);
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var numss = [1,2,3,8,9];
function addToEnd(numss){
    numss.pop();
    numss.push(55);
}
addToEnd(numss);
console.log(numss);
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// let nnumb= [1,2,3,8,9];
// function sumArray(nnumb){
//     let summ=0;
//     for(i= 0 ; i < nnumb.length ; i++ ){

//         summ+=nnumb[i]
//     }
// return summ;
// }
// console.log(sumArray(num1));

let num1= [1,2,3,8,9];

function sumarray(num1){
    let i=0;
    let sum = 0;
    while (i < num1.length) {
    sum += num1[i];
    i++;
}
return sum;
}
console.log(sumarray(num1));
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var num2= [1,2,3,8,9];

// function minInArray(num2){
//     let min = num2[0];
// for(i=1 ; i<num2.length ; i++){
// if (min>num2[i]){
//     num2[i] = min;
// }
// }
// return min;
// }
// console.log(minInArray(num2));

 var num2= [1,2,3,8,9];

function minInArray(num2){
    let min = num2[0];
    let i=1 ;
while( i<num2.length ){
if (min>num2[i]){
    num2[i] = min;
}
 i++;
}
return min;
}
console.log(minInArray(num2));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// var num3= [1,2,3,8,9];
// function removeFromArray(num3,n) {
//     for(i=0 ; i<num3.length ; i++){
// if(num3[i]==n){
//    num3.splice(i,1);
// }
//     }
//     return num3;
// }
// console.log(removeFromArray(num3,8));

// <-------while loop ----->
let i=0;
var num3= [1,2,3,8,9];
function removeFromArray(num3,n) {
while( i<num3.length ){
if(num3[i]==n){
num3.splice(i,1);
}
i++ ;
}
    return num3;
}
console.log(removeFromArray(num3,8));
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var num3= [1,2,3,8,9]
// function oddArray(num3) {
//     for (i= 0 ; i < num3.length ; i++){
//         if(num3[i] %2==0){
//             num3.splice(i,1)
//         }  
//     }
//     return num3;
// }
// console.log(oddArray(num3));

// <------- while loop ------>

var num3= [1,2,3,8,9];

function oddArray(num3) {
    let=i= 0 ;
    while ( i < num3.length ){
        if(num3[i] %2==0){
            num3.splice(i,1)
        } 
        i++; 
    }
    return num3;
}
console.log(oddArray(num3));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// var num4= [1,2,3,8,9,77];
// function aveArray(num4) {
//     let sum1=0;
//     for (i=0 ; i< num4.length ; i++){
//         sum1+= num4[i];
//     }
//     return Math.floor(sum1/num4.length);
// }
// console.log(aveArray(num4));

// <---------- while loop---------->
var num4= [1,2,3,8,9,77];
function aveArray(num4) {
    let sum1=0;
    let i=0 ; 
    while (i< num4.length ){
        sum1+= num4[i];
        i++;
    }
    
    return Math.floor(sum1/num4.length);
}
console.log(aveArray(num4));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var strings= ["alex","mercer","madrasa","rashed2","emaad","hala"];
// function shorterInArray(strings) {
// let short = strings[0];
// for(i=1 ; i<strings.length ;i++){
//     if(strings[i].length<short){
//         short=strings[i]
//     }
// }
// return short; 
// }
// console.log(shorterInArray(strings))
// <--------while loop -------->
var strings= ["alex","mercer","madrasa","rashed2","emaad","hala"];
function shorterInArray(strings) {
let i=1 ;
let short = strings[0];
while( i<strings.length ){
    if(strings[i].length<short){
        short=strings[i]
    }
    i++;
}
return short; 
}
console.log(shorterInArray(strings))

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var str= "alex mercer madrasa rashed2 emad hala"
//  function repeatChar(str ,char){
//     let cuont=0;
//     let string=str.split('');
//     for( i =0;i<string.length;i++){
//         if(string[i]==char){
//             cuont ++;
//         }
//     }return cuont;
//  }
//  console.log(repeatChar(str,"a"));

//  <------ while loop ------>
var str= "alex mercer madrasa rashed2 emad hala"
function repeatChar(str ,char){
    let cuont=0;
    let i =0;
    let string=str.split('');
    while( i<string.length){
        if(string[i]==char){
            cuont ++;
        }
        i++;
    }
    return cuont;
}
console.log(repeatChar(str,"a"));
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
// function evenIndexOddLength(string1) {
//     let bb = [];
//     for( i=0 ;i<string1.length ;i++){
//         if( i %2==0 && string1[i].length %2==1 ){
//             bb.push(string1[i]) 
//         }

//     }
//     return bb
// }
// console.log(evenIndexOddLength(strings))

// <-------- while loop ------>
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
function evenIndexOddLength(string1) {
    let bb = [];
    let i=0 ;
    while( i<string1.length ){
        if( i %2==0 && string1[i].length %2==1 ){
            bb.push(string1[i]) 
        }
        i++;
    }
    return bb
}
console.log(evenIndexOddLength(strings))
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var num5= [44, 5, 4, 3, 2, 10];
// function powerElementIndex(num5) {
//     let power = [];
//     for (i=0 ; i<num5.length ; i++){
        
//         power.push( num5[i]**i);

//         }
//         return power;
        
    
// }
// console.log(powerElementIndex(num5));

// <------while loop----->
var num5= [44, 5, 4, 3, 2, 10];
function powerElementIndex(num5) {
    let power = [];
    let i=0 ;
    while (i<num5.length){
        power.push( num5[i]**i);
        i++;
        }
        return power;
}
console.log(powerElementIndex(num5));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var num6= [5,2,2,1,8,66,55,77,34,9,55,1];
// function evenNumberEvenIndex(num6) {
//     let bb = [];
//     for( i=0 ;i<num6.length ;i++){
//         if( i %2==0 && num6[i] %2==0 ){
//             bb.push(num6[i]) 
//         }

//     }
//     return bb;
// }
// console.log(evenNumberEvenIndex(num6));

// <------- while loop ------>

var num6= [5,2,2,1,8,66,55,77,34,9,55,1];
function evenNumberEvenIndex(num6) {
    let bb = [];
    let i=0 ;
    while( i<num6.length ){
        if( i %2==0 && num6[i] %2==0 ){
            bb.push(num6[i]) 
        }
        i++;
    }
    return bb;
}
console.log(evenNumberEvenIndex(num6));
