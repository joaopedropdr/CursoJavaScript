// Async/Await tratamento de erro

function gerearNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max];
    
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Numeros repetido!')
        } else {
            resolve(aleatorio)
        }
    }) 
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerearNumerosEntre(1, 60, numeros)) 
        }  
        return numeros
    } catch(e) {
        if(tentativas > 10) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)      
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
