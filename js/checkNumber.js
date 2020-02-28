function isNumber(value) {
    let checkValue = value;
    let value1 = parseFloat(checkValue);
    if (value1 === value) {
        return true
    } else {
        return false;
    }
}

let a = "das";
let result = isNumber(a);
console.log(result)