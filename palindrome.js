const strings = ["madam", "lol", "apple", "ama"];

const isPalindrome = (strings) => {
    const result = [];

    for (const item of strings) {
        const check = item.split("").reverse().join("");
        if (check === item) {
            result.push(check);
        }
    }

    return result;
}

console.log(isPalindrome(strings));