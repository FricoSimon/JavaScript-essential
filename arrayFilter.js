// filter method, return a new array with all elements that pass the requiremenets

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon'];

// filter out odd numbers
const oddNumbers = (arr) => {
    return arr.filter((item) => item % 2 === 0);
}

// filter out numbers greater than 5
const bigNumbers = (arr) => {
    return arr.filter((item) => item > 5);
}

// filter out numbers greater than 5 and even (combined)
const combineNumbers = (arr) => {
    return arr.filter((item) => item > 5 && item % 2 === 0);
}

console.log(oddNumbers(arr)); // [2, 4, 6, 8, 10]
console.log(bigNumbers(arr)); // [6, 7, 8, 9, 10]
console.log(combineNumbers(arr)); // [6, 8, 10]

const bigFruit = (arr2) => {
    return arr2.filter((item) => item.length > 5);
}

const fruitStartsWithA = (arr2) => {
    return arr2.filter((item) => item[0].toUpperCase() === "A");
}

const fruitEndsWithE = (arr2) => {
    return arr2.filter((item) => item.charAt(item.length - 1).toUpperCase() === "E");
}

console.log(bigFruit(arr2)); // ['banana', 'cherry', 'elderberry', 'honeydew', 'lemon']
console.log(fruitStartsWithA(arr2)); // ['apple']
console.log(fruitEndsWithE(arr2)); // [apple, date, grape]