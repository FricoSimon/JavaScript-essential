const array = [1, 2, 3, 4, 5, 6]; // array length = 5, array index = 5 - 1

// best method
const loopArray = (array) => {
    let count = 0;
    for (const item of array) {
        count++;
    }
    return count;
}

console.log(loopArray(array));

// original method
const loopArray2 = (array) => {
    let count = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        count++;
    }
    return count;
}

console.log(loopArray2(array));