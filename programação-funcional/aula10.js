// Filter funtction 
// Parecido com a map, mas o objetivo dela é filtrar a função. Sua resposta vai ser sempre verdadeiro ou falso.
// Seu resultado nem sempre vai ter o mesmo valor que o inicial.

// Filtrar arreys com as filters function
const numbers = [1, 2, 3, 4, 5, 6,]

// As 3 maneiras que se pode retornar uma filter function

// Todos os valores iguais
const greaterThanZero = el => el > 0
// Nenhum valor retornado
const greaterThanTen = el => el > 10
// Apenas alguns valores retornados 
const even = el => el % 2 === 0

// Pode invocar a função dessas duas maneiras 
console.log(numbers.filter(el => el > 0))
console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanTen))
console.log(numbers.filter(even))

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Ema', score: 9.4},
    {name: 'Peter', score: 9.1},  
]

const greatStudent = students => students.score >= 9

console.log(students.filter(greatStudent))
console.log(students)



