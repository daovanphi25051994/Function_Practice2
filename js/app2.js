function squareCircle(radius) {
    return Math.PI * (Math.pow(radius, 2));
}

function perimeterCircle(radius) {
    return 2 * Math.PI * radius;
}

let result1 = squareCircle(4);
let result2 = perimeterCircle(4);
console.log(result1);
console.log(result2);
