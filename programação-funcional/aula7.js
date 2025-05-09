/* Higher order function 
   O que é? 
   Quando uma linguagem permite que uma função opere usando outras funções.
   Podemos usar uma fução como argumento de outra função e tambem retornar uma função com outra função 
*/

//Como passar uma função com o parametro sendo outra função 
function run(fn) {
    return `Resultado: ${fn()}`
}

function sayHello() {
    console.log('hello!')
}

/* Se eu passar a função assim: run(sayhello()) invocando a função say hello, 
 iria dar erro pois, sayHello não retorna nada e se retornasse tambem iria dar erro
 pois, ele iria executar o valor retornado como uma função.
*/
run(sayHello)

// Tambem pode declara uma função anonima no momento de chamar run

run(function() {
    console.log('run!!')
})

/* O Math.random passa uma função como referencia para função run, a função passada vai ser executada e o valor gerado vai ser retornado.
OBS: Precisa ter o return na função como esta no fn
*/

const result = run(Math.random)
console.log(result)