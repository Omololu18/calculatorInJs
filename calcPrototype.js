const multiplication = (a, b) => a * b

const division = (a, b) => a / b

const subtract = (a, b) => a - b

const add = (a, b) => a + b

const cal = (a, b, callback) => callback(a, b)

// console.log(cal(18, 4, multiplication)) 
// console.log(cal(12, 8, division))
// console.log(cal(7, 10, add))
console.log(cal(24.3, 08.11, subtract))