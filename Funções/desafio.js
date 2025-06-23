// Minha resposta 
// Exercicio 1
// const resultado = function somar(n1, n2, n3) {
//                     return "Resultado:" + n1 + n2 + n3
//                 }

// console.log(resultado(10, 2, 20))

// Exercicio 2

function calcular(n1 ,n2) {
    return (tipoCalc) => { 
    if (tipoCalc === 'Somar' || tipoCalc === 'somar'){
            return "Resultado: " + (n1 + n2)
        }else if(tipoCalc === 'Subtrair' || tipoCalc === 'subtrair') {
                return "Resultado: " + (n1 - n2)
        }else if(tipoCalc === 'Multiplicar' || tipoCalc === 'multiplicar') {
                return "Resultado: " + (n1 * n2)  
        }else if(tipoCalc === 'Dividir' || tipoCalc === 'dividir') {
                return "Resultado: " + (n1 / n2)
        }
    }
}

const calculo = calcular(3, 7)

console.log(calculo('Somar'))
console.log(calculo('subtrair'))
console.log(calculo('Multiplicar'))
console.log(calculo('dividir'))

// Código do curso

function somar(a){
        return function(b){
                return function(c){
                        return a + b + c
                }
        }
}

const somarABC = somar(3)(4)

console.log(somarABC(13))

function calcular2(x) {
        return function(y) {
                return function(fn) {
                        return fn(x, y) 

                        
                }
        }
}

function sub(a, b){
        return a - b
}

function mult(a, b){
        return a * b
}

const r1 = calcular2(10)(5)(sub)
const r2 = calcular2(10)(5)(mult)

console.log(r1)
console.log(r2)




    


