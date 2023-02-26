// Write a JS code to find the no of digits in a number

function digits(n) {
  let count = 0;
 
  if (n >= 1);
  ++count;
while(n/ 10>=1)
{
    n/=10;
    ++count;
}
console.log(count)
}
digits(123455);
