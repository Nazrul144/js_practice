const numbers = [10,20,30,40,50];

const findResult = numbers.find(number => number> 20);

console.log(findResult);

// The output will be 30 because the find method will return the first matches element in the array. but filter return all matches number in the array.