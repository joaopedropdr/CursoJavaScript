function logparam (a, b, c) {
    console.log(a, b, c)
}

// É possivel invocar uma função sem definir valor ou difinir mais valores. Vai dar certo do mesmo jeito
logparam (1, 2, 3, 4, 5)
logparam (1, 2, 3)
logparam (1, 2)
logparam (1)
logparam ()

//Difinindo valor padrão para um parametro 
function defaultparam (a = 1, b = 2, c = 3) { // o = faz o como que o valor padrão dele seja o que foi definido
    console.log(a, b, c)
}

defaultparam(7, 8, 9)
defaultparam(7, 8)
defaultparam(7)
defaultparam()

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7)

// spread/rest (São os ...)
function logNums(...nums) {
    console.log(nums)
}

logNums(1, 2, 3, 4, 5)

function sumAll (...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))