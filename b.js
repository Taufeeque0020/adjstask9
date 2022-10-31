let num1 = [1, 2, 3];

let num2 = [4, 5];

num1.push.apply(num1, num2);

console.log(num1);