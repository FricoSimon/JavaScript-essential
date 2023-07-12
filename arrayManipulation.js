const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

let input = 3; // change this value to test

const arrayCombined = arrayOne.concat(arrayTwo);
console.log(arrayCombined);
console.log(arrayCombined.length); // (6)

const arrayFind = arrayCombined.find((item => item > input))
console.log(arrayFind); // 4 return first item only

const arrayIndex = arrayCombined.findIndex((item => item > input))
console.log(arrayIndex); // 3 return index of first item

const arrayFilter = arrayCombined.filter((item => item > input))
console.log(arrayFilter); // (3) [4, 5, 6] return all items

// const arrayForEach = arrayCombined.forEach((item => console.log(item))); // 1 2 3 4 5 6

console.log(arrayCombined.includes(input)); // true
console.log(arrayCombined.indexOf(input)); // 2

const arrayMap = arrayCombined.map((item => item * 2))
console.log(arrayMap); // [2, 4, 6, 8, 10, 12]

arrayCombined.pop(); // remove last item (6)
console.log(arrayCombined);

arrayCombined.push(7); // add item to end of array
console.log(arrayCombined);

const arrayReversed = arrayCombined.reverse();
console.log(arrayReversed);

const arrayShift = arrayCombined.shift(); // remove first item 
console.log(arrayCombined);

const arrayReversed2 = arrayCombined.reverse();

const arraySlice = arrayCombined.slice(0, 4); // only included index 0 - 3, end not included
console.log(arraySlice);

const arrayThree = [7, 15, 9, 0, 75, 25];

const arraySort = arrayThree.sort((a, b) => (a - b)) // if positive number, b comes first, if negative number, a comes first
console.log(arraySort);

const arraySplice = arrayCombined.splice(4, 1, 5); // remove 1 item at index 4 and add 5
console.log(arrayCombined);

const arrayUnshift = arrayCombined.unshift(0); // add item to beginning of array
console.log(arrayCombined);