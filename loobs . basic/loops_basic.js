// 1- Write a program that prints numbers from 1 to 10 using a for loop.

for(let i=0 ; i<=10 ; i++){
    console.log (i);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

for(let i=1; i<=10 ; i++){
    if( i % 2 === 0)
    console.log(i);
}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

let gg = 1;
while(gg<=10){
    if(gg %2 !== 0 ){
        console.log(gg)
    }
gg++;
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

let a = 6
for(let i= 1 ; i<=10 ; i++ ){
    console.log( a + "*" + i + "=" + a * i );
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let ss = 1 ;
let sum = 0;
while(ss<=100){
sum += ss ;
ss ++
}


console.log(sum);
// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
let num12 = 5;
let factorial = 1;
for(let f = 1 ; f<=num12 ; f++ ){
factorial *= f ;
}
console.log( factorial)

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.


// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
let hh = [ 5 , 10 , 15 , 20 ];
let tt = hh.length -1 ;
while( tt>=0){ 
console.log( hh[tt] )
tt--;
}

