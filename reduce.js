//Reduce method is used to perform arithmetic operation in the array.

const numbers = [1,2,3,4,5,6,7,8,9];

const total = numbers.reduce((acc, current)=> acc + current, 0)

console.log(total);