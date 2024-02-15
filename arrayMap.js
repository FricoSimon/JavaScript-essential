// map method returns a new array that has been modified by a function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberSquare = (arr) => {
    return arr.map(item => Math.pow(item, 2));
}

console.log(numberSquare(arr)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]