const array = [1, 2, 3, 4, 4, 4, 5, 5, 6];
let input = 4;

// count element by input 
const countElement = (array, input) => {
    let count = 0;

    for (const item of array) {
        if (item === input) {
            count += 1;
        }
    }

    return count;
}

console.log(countElement(array, input));


// count element by input 
const countElement2 = (array, input) => {
    let count = 0;

    for (const item of array) {
        if (item === input) {
            count += 1;
        }
    }

    return count;
}

console.log(countElement2(array, input));