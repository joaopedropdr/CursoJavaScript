// Function expression
const incremento1 = function(n) {
    return n + 1
}

// Arrow function. A arrow function é sempre anonima
const incremento2 = (n) => {
    return n + 1
}

console.log(incremento1(1))
console.log(incremento2(5))
// Por ser uma função arrow o n pode ficar fora do parentese
const incremento3 = n => { 
    return n + 1
}
console.log(incremento3(7))

// Na função arrow quando não tem o par de chaver {}, o return já fica inplicito no código
const incremento4 = n => n + 1
console.log(incremento4(18))

// Quando tem mais de 1 parametro precisa usar () 
const soma = (a, b) => a + b
console.log(soma(3, 8))

