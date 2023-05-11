/* measuring algorithm performance */
function sumUp(n) {
    let result = 0;
    for (let i = 1; i <= n; i++)
        result += i;
    return result;
}

let start = 0;
let end = 0;

start = performance.now();
sumUp(10000);
end = performance.now();

console.log(end - start);

/* a first task */

// function sumNumbers(numbers) {
//   return numbers[0] + numbers[1] + numbers[2]; // O(1)
// }

// numbers = [1, 3, 10, 50]
function sumNumbers(numbers) {
    let result = 0; // 1
    for (const number of numbers) { // 1
        console.log('...'); // 4
        result += number; // 4 => n
    }
    return result; // 1
    // return numbers.reduce((sum, curNum) => sum + curNum, 0);
}

// T = 1 + 1 + 1 + n + n = 3 + 2n = 3 + 2*n
// T = 2*n
// T = n => O(n) => Linear Time Complexity

console.log(sumNumbers([1, 3, 10, 50]));

