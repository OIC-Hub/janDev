 // Variable classs
//  var lastName123, nu, a, b, y;
//  lastName123 = "Omolewu";
//  let firstName = "Sunday";

//  let num = 234; 
//  console.log(firstName);
//  console.log(lastName123);
//  console.log(num);

 // Data Type
 /*
 1. String 
 2. Number
 3. Boolean (True and False)
 4. Array  let names = ['Sunday', 'Omolewu', 'Opeyemi', 'Halima', 'Tunmbi', 67];
  names[2]
 5. Object let users = {name:'Sunday Opeyemi', age:23, adress: 'Osogbo'}
  users['address'];
  6. undefined 


  |Javascript Operators
  Arthmetic Operators
   +
   -
   /
   %
   *
   **
   Assignment Operators
   let add = "Sunday"
   add = add + "Omolewu";
   add += "Omolewu";
   = 
   +=
   *=
   **=
   %=
   /=
  

 */
// let firsName = "Sunday";
// let LastName = "Opeyemi";
// let fullName = "Welcome to our office " + firsName + " " + LastName;
// 12 + 45 + "Ade" + 23 + 100;
// let add = 2 * "3";
// let  age;
// age=34;
// age ="Adeojo";
// age=100;

// let sum = "OIC ";
//  sum += "Hub ";
//  sum += "Nigeria"; b 
// document.getElementById('operator').innerHTML=fullName;
// document.getElementById('suboperator').innerHTML="Assignment concatenation Operator";
// document.getElementById('ans').innerHTML="<code>let Sum=\"OIC\"</code> <br/> <code> Sum +=\"Hub\"</code><br/> <code> Sum +=\"Nigeria\"</code><br/>" +  sum;
 
/* Comparison Operators
==
>
<
>=
<=
===
!=
!==
*/
// let a = 'sunday';
// console.log((a != 'Sunday'));

/*   
  Logical Operation
  &&
  ||
  !
*/
/* Ternary Operator
*/


// let score = 80;
// let result = (score >= 70) ? "A": "Fail";
// console.log(result);

// Link Generator
let rand = Math.random();
let link= (rand < 0.5)? "<a href='https://oichub.org'>OIC Hub</a>" : "<a href='https://oicfoundation.org.ng'>OIC Foundation</a>"

// Conditional Statement

let firstName = "Opeyemi";
if(firstName == 'Sunday'){
  console.log('Welcome to javascript class ' + firstName);
}else{
   console.log("This is not your class " + firstName);
}
let score = 74;
if(score >= 70 && score <= 100){
    console.log('A')
}else if(score >= 60 && score <= 69 ){
  console.log('B');
}else if(score >= 50 && score <= 59){
  console.log('C');
}