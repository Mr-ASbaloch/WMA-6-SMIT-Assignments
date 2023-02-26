// Write a JS code to find duplicate values in a given array

let array=[1,3,5,5,7,8,9]

// if has duplicate then return true 
let duplicate= (array) => array.length !== new Set(array).size;
console.log(duplicate(array))


const s1 = ['hello','goodbye','hey'].some((e, i, arr) => arr.indexOf(e) !== i)
console.log(s1)