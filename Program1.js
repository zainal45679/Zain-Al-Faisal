class Calculator {
    constructor(a, b, operation){
        this.a = a;
        this.b = b,
        this.operation = operation;
    }
    calculate(){
        switch (this.operation){
            case "add":
                return this.a + this.b;
            case "sub":
                return this.a - this.b;
            case "mul":
                return this.a * this.b;
            case "div":
                return this.b !== 0 ? this.a / this.b : "Cannot perform Division by zero";
            default :
                return "Invalid Operation";
        }
    }
}

//Sample test

let calc1 = new Calculator(10, 5, "add");
console.log("Addition :", calc1.calculate()); // 15

let clac2 = new Calculator(10, 5, "sub");
console.log("Subtraction :", clac2.calculate()); //5
