// Write a JS code to calculate the sum of digits in a number


var value = 353468,
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log(sum);

