// Higher order function 2

// Como retornar uma função a partir de outra função 

function finalPrice(tax, price) {
    return function(price){
        return price * (1 + tax)

    }
}

// Primeiro voce chama a primeira função em seguida vai chamar a outra que vai ser retornada
console.log(finalPrice(0.0875)(25.1))
console.log(finalPrice(0.0875)(21.7))

// Dessa maneira o calculo não é lido
console.log(finalPrice(0.0875, 107.9))

// Ela é bastante utilizada pois pode-se passar a função anonima para constantes e variaveis. 

const nycFinalPrice = finalPrice(0.0875)
// Dessa maneira o imposto não precisa ser passado pois já esta salvo na função finalPrice
console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))