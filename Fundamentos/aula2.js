// Anonymous function (Função que não tem nome)
(function(a, b, c) {
    return a + b + c
})

// Function expression 
// São funções atribuidas a uma variavel ou constantes e podem ser anonimas.
const soma = function(a, b){
    return a + b
}

const result = soma (7, 59)
console.log(result)

const soma2 = soma
console.log(soma2(5, 9))

let x = 3
console.log(x)

x = soma
console.log(x(6, 8))