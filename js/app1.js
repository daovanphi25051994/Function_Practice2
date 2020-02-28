function squareNumber(number) {
    return number * number;
}

function showResult() {
    let number = parseFloat(prompt("Enter a number"));
    let result = squareNumber(number);
    alert(result);
}

window.onload = showResult();
