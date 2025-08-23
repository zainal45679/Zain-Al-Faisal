function calculator(num1, num2, operator){
    function operator(a,b){
        switch (operator){
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': b !== 0 ? a / b : "Cannot perform operation";
            default : return "Invalid operation";
        }
    }
    return operator(num1, num2);
}

// some examples

console.log(calculator(2, 10, '+')); // 12
console.log(calculator(2, 10, '-')); // -8
console.log(calculator(2, 10, '*')); // 20
console.log(calculator(10, 2, '/')); // 5
console.log(calculator(10, 0, '/')); // Cannot perform operation
console.log(calculator(5, 5, '^'));  // Invalid operation
