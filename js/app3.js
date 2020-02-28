function calculatorFactorial(number, factorial) {
    let result = 1;
    if (factorial >= 0) {
        if (factorial === 0)
            return 1;
        else {
            for (let i = 1; i <= factorial; i++) {
                result *= number;
            }
        }
    } else {
        return -1;
    }
    return result;
}

let number = calculatorFactorial(10, 10);
console.log(number);