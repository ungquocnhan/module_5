function fibonacci(number) {
    if (number <= 1) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
let number = 10;
let sum = 0;
let array = [];
for (let i = 0; i <= number; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(array);
console.log(sum);
//# sourceMappingURL=main.js.map