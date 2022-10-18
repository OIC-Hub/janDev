// Array Destructuring

//    const [a, b, c=23, d=78]=[12, 34, 56, 79]; // Having default values
// const [a, ...b]=[12, 34, 56, 79]; //Using rest for the second variable

const [,,, r, b]=[12, 34, 56, 79];
console.log(r)
const [...a]=[134, 34, 506, 79];
const newnums =[b, a]
// [ [ 12, 34, 56, 79 ], [ 134, 34, 506, 79 ] ]
   console.log(newnums);

   /// Array Methods

   //Map
    const names=['Sunday', 'Sarah', 'Timilehin', 'Tunmbi', 'Niyi', 56];
//   const newNames= names.map((value, index)=>{
//         return value.slice(0,1).toLowerCase() + value.slice(1).toUpperCase()
//    });
//    console.log(newNames);

   // every() method
// const everystr = names.every((value, index)=>{
//     let isTrue =typeof value =='string'
//     return isTrue; 
// })
// console.log(everystr);

// Some method

const everystr = names.some((value, index)=>{
    let isTrue =typeof value =='string'
    return isTrue; 
})
console.log(everystr);

// filter
// Some method
 const nums =[34, 45, 56, 89,10]
const filterArry = nums.filter((value, index)=>{
   let newValue= value > 10
   return newValue;
    
})
console.log(filterArry);

// function sum of array

function sumOfArray(value){
   let  total=0
  for(let i=0; i<value.length; i++){
    total +=value[i];
  }
   return total;
}
console.log(sumOfArray(78))