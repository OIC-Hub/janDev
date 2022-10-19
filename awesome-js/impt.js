import { firstName, lastName }  from "./identifier.js";
// import {dataDic} from "./jsondictionary.js";
import {postData} from "./usersdata.js";

for(let data of postData){
    console.log(data.userId);
}
// console.log(postData[2].title)
console.log(firstName + lastName)
// JSON  
// Javascript Object Notation
let users = `
[
 {"name":"Sunday", "age": 10, "address":"Lagos", "isSleeping": true, "nums":[23, 34, 45, 56]}
]
`;
let data=JSON.parse(users)
console.log(data[0].age)
const user ={name:"Sunday Opeyemi", age:34, email:"sunday@oichub.org"}
let ways = document.getElementsByClassName('ways')[0];
 ways.innerHTML =JSON.stringify(user);