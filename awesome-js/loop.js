
// For In Loop
const numbers = [56, 67, 53, 70, 40, 67];
let result ='';
const nums =[];
let sn =0
let output = document.getElementById('forin');
for(let i in numbers ){
    // result += numbers[i] + "<br>"
    // nums[i] = numbers[i];
    let punishmentScore = numbers[i] -5
    if(punishmentScore > 50){
        nums[i] = "Passed";
    }else{
        let avarageScore = (punishmentScore + numbers[i])/2
        if(avarageScore > 50){
            nums[i] = "Escape";
        }else{
            nums[i] = "Trapped";
        }
    }

}
output.innerHTML=nums
console.log(nums)

// random number
console.log(Math.floor(Math.random() * 100))
//  forOf Loop
console.log("Random Numbers")
const cpRandom =[]
const userP = [10, 6];
for(let i =0; i  < 6; i++ ){
   cpRandom[i] = Math.floor(Math.random() * 11)
}
const correctScore =[];
let correctindex =0
 for(let value of userP){
    if(cpRandom.includes(value)){
        correctScore[correctindex] = value;
        correctindex++
    }
 }
console.log(cpRandom)
console.log(correctScore)
if(correctScore.length >=2){
    console.log('You win')
}else{
    console.log('Oti lule')
}
// Object Looping
const users={name:"Sunday Opeyemi", address:"Osogbo", email:'sunday@gmail.com'};
for(let key in users){
    // console.log(key)
    if(key == 'name'){
        console.log('The user\s name is inside the object')
    }
   console.log(users[key])
}

// forEach Loop

 let text = "";
numbers.forEach(function(value, index, arry){
    text += value + " Index is "+ index + "\n";
 }
 )
  console.log(text)
//   function sum(){
//     //
//   }
 // Arroy function
//  const sum = () =>{

//  }
