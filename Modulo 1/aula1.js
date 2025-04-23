// Function declaration 

// Função que retorna "Hello! World"
// Função sem parametro, não recebe nenhum argumento (o que fica dentro do parentese da função)
function SayHello() {
    console.log('Hello! World')
}
// Invoca a função 
SayHello()

// Função com parametro
function sayHelloTo(name) {
    console.log('Hello ' + name)
}

sayHelloTo('João')

// Outra maneira de fazer essa função 
function sayHelloTo2(name) {
    console.log(`Hello ${name}!`)
}

sayHelloTo2('João')

// Função sem parametro com retorno
function returnHi() {
    return 'Hi!'
}
// Formas de invocar essa função
// Armazenar o valor em uma variavel (pode usar let ou var)
let i = returnHi()
console.log(i)
console.log(returnHi())

// Armazenar o valor em uma constante
const k = returnHi()
console.log(k) 
console.log(returnHi())

// Função com parametro e com retorno
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo(`Mike`))
