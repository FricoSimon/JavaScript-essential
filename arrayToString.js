const array = ["a", "b", "c", "d", "e"];

const arrayToString = (array) => {
    const string = array.join(", ");
    return string;
}

console.log(arrayToString(array));