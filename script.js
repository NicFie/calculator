let userInput = 'addition';
let num1 = 0;
let num2 = 0;
let result = 0;

//basic math operator functions

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if(b==0) {
        alert('You can\'t divide by 0!');
    } else {
        return a/b;
    }
}

function operate(userInput, num1, num2) {
    if (userInput == 'addition') {
        result += add(num1, num2);   
    } else if(userInput == 'subtraction') {
        result += subract(num1, num2);
    } else if(userInput == 'multiplication') {
        result += multiply(num1, num2);
    } else if(userInput == 'division') {
        result += divide(num1, num2);
    } else alert('something went wrong');
}

operate(userInput, num1, num2);
console.log(result);