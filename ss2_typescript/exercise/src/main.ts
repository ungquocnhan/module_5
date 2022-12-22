function fibonacci(number: number): number {
    if (number <= 1) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let number: number = 10;
let sum: number = 0;
let array: Array<number> = [];
for (let i = 0; i <= number; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(array);
console.log(sum);