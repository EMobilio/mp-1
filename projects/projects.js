// addition function for the calculator
function addition() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;
    let sum = Number(firstNumber) + Number(secondNumber);
    document.getElementById("output").innerHTML=String(sum);
    checkNegative(sum);
}

// subtraction function for the calculator
function subtraction() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;
    let result = Number(firstNumber) - Number(secondNumber);
    document.getElementById("output").innerHTML=String(result);
    checkNegative(result);
}

// multiplication function for the calculator
function multiplication() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;
    let product = Number(firstNumber) * Number(secondNumber);
    document.getElementById("output").innerHTML=String(product);
    checkNegative(product);
}

// division function for the calculator
function division() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;
    let quotient = Number(firstNumber) / Number(secondNumber);
    document.getElementById("output").innerHTML=String(quotient);
    checkNegative(quotient);
}

// power function for the calculator
function power() {
    let firstNumber = document.getElementById("first-number").value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.getElementById("second-number").value;
    secondNumber = Number(secondNumber);
    let exponent = secondNumber;

    // if the exponent is negative will take the absolute value
    if (exponent < 0) {
         exponent = -1 * exponent;
    }

    // multiply result (starting at 1) by firstNumber exponent many times
    let result = 1;
    for (let i = 0; i < exponent; i++){
        result = result * firstNumber;
    }

    // if the exponent was negative result should be 1/result
    if (secondNumber < 0) {
        result = 1/result;
    }

    // if first or second is not a number we should set result to NaN (instead of leaving it as 1)
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result = NaN;
    }

    document.getElementById("output").innerHTML=String(result);
    checkNegative(result);
}

// clear function for the calculator, sets all inputs and outputs to empty string
function clearCalc() {
    document.getElementById("first-number").value="";
    document.getElementById("second-number").value="";
    document.getElementById("output").innerHTML="";
}

// sets the color of the output to red if the result of a calculation is negative, otherwise
// sets it to the default
function checkNegative(result) {
    if (Number(result) < 0) {
        document.getElementById("output").style.color="red";
    } else {
        document.getElementById("output").style.color="goldenrod";
    }
}