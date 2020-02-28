function getBoutCharOfArray(character, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (character === array[i])
            count++;
    }
    if (count === 0)
        return -1
    return count;
}

let array = ["d", "a", "o", " ", "v", "a", "n"];
let result = getBoutCharOfArray("", array);
console.log(result);
