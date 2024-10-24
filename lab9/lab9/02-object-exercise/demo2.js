let numbers = [1, 34, 3, 2, 7, 10, 22]

// Task: x2 => /5 => +3

let result = numbers
                .filter(s => s > 5)
                .map(s => s * 2)
                .filter(s => s > 5)
                .map(s => s / 5)
                .filter(s => s > 5)
                .map(s => s + 3)

console.log(result)