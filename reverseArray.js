const array = [1, 2, 3, 4, 5];

// first method
const reverseArray = (array) => {
    const reversed = [];

    for (const item of array) {
        reversed.unshift(item);
    }

    return reversed;
}

console.log(reverseArray(array));

//second method
const reverseArray2 = (array) => {
    const reversed = array.reverse();

    return reversed;
}

console.log(reverseArray2(array));