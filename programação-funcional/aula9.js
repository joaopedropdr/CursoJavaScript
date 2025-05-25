// Map function 
// Usada sempre quando voce quer transformar algo.
// O seu resultado vai ser sempre do mesmo tamanho do que o valor inicial.

// Map function para transformar um array em outro array.
const numbers = [1, 2, 3, 4, 5, 6,]

const numbersV2 = numbers.map(el =>  el * 2)


console.log(numbers, numbersV2)

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Ema', score: 9.4},
    {name: 'Peter', score: 9.1},  
]

const getScore = el => el.score 

const result = students
        .map(getScore)
        .map(Math.ceil)

console.log(students, result)