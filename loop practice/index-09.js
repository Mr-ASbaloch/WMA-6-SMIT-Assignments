// Write a JS code to print the Fibonacci series for a given value of N

let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 0; i <= 10; i++) {
  let tamp = a + b;
  console.log(tamp);
  a = b;
  b = tamp;
}



