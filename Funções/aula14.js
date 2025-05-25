function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function() {
    console.log('Bom tarde!')
}


// Passar uma função como parametro para outra função
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar função apartir de outra função 

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

//Chamando a função com uma constante 
const pot34 = potencia(3)(4)
console.log(pot34)

// Chamando a função potencia sem armazenar ela em uma variavel
console.log(potencia(3)(4))