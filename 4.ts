function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
    return a + b;
}

let input1: string = prompt("Enter first value:") || "";
let input2: string = prompt("Enter second value:") || "";

let num1 = Number(input1);
let num2 = Number(input2);

let result: number | string;

if (!isNaN(num1) && !isNaN(num2)) {
    result = add(num1, num2);
} else {
    result = add(input1, input2);
}

console.log("Result:", result);
