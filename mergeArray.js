const arrayA = [1, 2, 3, 4, 5];
const arrayB = ["a", "b", "c", "d", "e"];

// first method using spread 
const mergeArray = (arrayA, arrayB) => {
    const newArray = [...arrayA, ...arrayB];

    return newArray;
}

console.log(mergeArray(arrayA, arrayB));

// first method using spread 
const mergeArray2 = (arrayA, arrayB) => {
    const newArray = arrayA.concat(arrayB);

    return newArray;
}

console.log(mergeArray2(arrayA, arrayB));