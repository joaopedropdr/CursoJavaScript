/* First class function 
  O que é?
  É quando uma função pode ser atribuida a uma variavel, como se ela fosse algum tipo de valor.
*/ 


//Pode adicior a variaveis e constantes 
const add = function(a, b) {
    return a + b
}

const subtract = function(a, b) {
    return a - b
}

const mult = (x, y) => x * y

const div = (x, y) => x / y


console.log(add(10, 20))
console.log(subtract(10, 20))
console.log(mult(10, 20))
console.log(div(10, 20))