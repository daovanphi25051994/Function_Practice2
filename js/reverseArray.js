function reverseArray(array) {
    let array1 = [];
    for (let i = array.length - 1; i >= 0; i--) {
        array1.push(array[i]);
    }
    return array1;
}

let array1 = [1, 3, 5, 7, 3, 5, 9, 42, 85, -33, 1];
let array2 = reverseArray(array1);
console.log(array2);
