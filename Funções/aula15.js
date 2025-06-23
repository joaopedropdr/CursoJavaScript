// Arrow function

const FN = () => console.log('Feliz natal!!')
FN()

const saudacao = (nome) => `Fala ${nome}, beleza?!!!`
console.log(saudacao('Maria'))

const somar = (...numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

const sub = (a, b) => a - b


console.log(sub(1, 2))
console.log(somar([1, 2, 3]))
console.log(somar([1, 2, 3, 4, 5, 6]))
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// função que retorna função, mas como arrow function

const resultado = base => exp => Math.pow(base, exp)

console.log(resultado(3)(2))

// this 

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [-300, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()