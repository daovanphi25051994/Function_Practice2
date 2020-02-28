function changeNumber(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a);
    console.log(b);
}
let a = 10;
let b = 5;
changeNumber(a, b);
console.log(a);
console.log(b);