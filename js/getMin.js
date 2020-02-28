function getMin(a, b, c) {
    let min = a;
    if (a > b)
        min = b;
    if (min > c)
        min = c;
    return min;
}

let result = getMin(1, 5,  10);
console.log(result);