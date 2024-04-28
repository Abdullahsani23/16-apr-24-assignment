// task 1
//Declare and initialize an empty multidimensional array.
//(Array of arrays)

// var arr =[]
// var multidimensionalArray =[[], [],[]]


// task 2
//Declare and initialize a multidimensional array
//representing the following matrix:


// var NumArr = [[0,1,2,3],"<br>",[1,0,1,2],"<br>",[2,1,0,1]]
// document.write(NumArr);
// document.write("<br>")
// document.write("<br>")
// task 3
//Write a program to print numeric counting from 1 to 10.

// for(var i=1; i<=10; i++)

// document.write(i, "<br>")

document.write("<br>")

// task 4
//Write a program to print multiplication table of any
//number using for loop. Table number & length should be
//taken as an input from user.

// var table =prompt("enter the table num")
// var tableLength =prompt("enter the table lenght")

// for(var i = 1; i <= tableLength ; i++){
    // document.write(table*[i], "<br>")
// }

document.write("<br>")

// var tableNum = 6
// var tableLen = 12

// for(var i=1; i<=tableLen; i++){
    // document.write(tableNum*[i], "<br>")
// }

document.write("<br>")

//task 5
//Write a program to print items of the following array
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,
//“strawberry”]

var fruits = ["apple", "banana", "mango", "orange","straberry"]

for(var i=0; i<fruits.length; i++){
    document.write(fruits[i], "<br>")
}

document.write("<br>")

//task 6
//Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//b reverse counting

// for(var i=10; i>=1; i--){
    // document.write(i, "<br>")
// }

// document.write("<br>")
//c even num

for(var j =2; j<=20; j+=2){
    document.write(j, "<br>")
}
document.write("<br>")
//d odd num

for(var k =1; k<=20; k+=2){
    document.write(k, "<br>")
}
document.write("<br>")

