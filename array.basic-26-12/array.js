// 1-Write a function to find the largest element in an array.
let number =[2,5,8,20,200,1000];
function largestelement(number){
    if (number.length === 0 ){
        return "array is empity";
    }
    else{
    return Math.max(...number);
}
}
console.log(largestelement(number));

// 2-Write a function to find the smallest element in an array.
let str =["hi","hello", "howareyou", "fine"];
let smallestele = str.reduce(function(acc , current){
return acc.length > current.length ? acc : current;       
})
console.log(smallestele);

// 3-Write a function to find the sum of all elements in an array.

let numberr=[ 3 , 8 , 9 , 12 , 13 ];
let sum = numberr.reduce(function(acc , current ){
return acc + current ;
})
console.log(sum);

// 4-Write a function to find the average of all elements in an array.

let nnum =[ 15 , 30 , 10 , 12 , 11 ];
let summ = nnum.reduce(function(acc , current ){
    return acc + current ;});
let average = summ / nnum.length ;
console.log(average);

// 5-Write a function to find the median of all elements in an array.

function medianArray(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 != 0) {
    return arr[mid]; 
    } else {
    return (arr[mid - 1] + arr[mid]) / 2; 
    }
}

console.log(medianArray([2,3,4,5,6]));
// 6-Write a function to remove all duplicates from an array.

let chart = ["w", "@" , "a" , "r" , "@" , "@","d" ];
let remove = chart.filter(function(ele){
    return ! ele.startsWith("@");
}
);
console.log(remove);

// 7-Write a function to sort an array in ascending order.

function sorting(array){
var sort1 = array.sort((a,b) => a-b);
return sort1;
}
console.log(sorting([300,10,5,3,9,34]))



// 8-Write a function to sort an array in descending order.

function sort(arr){
var sort1 = arr.sort((a,b) => b-a);
return sort1;
}
console.log(sort([20,10,50,60,13]))

// 9-Write a function to shuffle the elements of an array randomly.

let shuffle = [3 , 5, 7, 91 , -4 ];
function randomly(){
for(let i = shuffle.length -1 ; i > 0 ; i-- ){
let j = Math.floor(Math.random() * (i +1 ));
let k = shuffle[i];
shuffle[i] = shuffle[j];
shuffle[j] = k ;
}
}
randomly();
console.log(  shuffle  );
