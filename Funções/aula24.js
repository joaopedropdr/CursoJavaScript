// Promise

function gerearNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max];
    
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)    
        }, tempo)
    }) 
}

function gerarVariosNumeros() {
    return Promise.all([
        gerearNumerosEntre(1, 60, 4000),
        gerearNumerosEntre(1, 60, 1000),
        gerearNumerosEntre(1, 60, 500),
        gerearNumerosEntre(1, 60, 3000),
        gerearNumerosEntre(1, 60, 100),
        gerearNumerosEntre(1, 60, 1500)
    ])   
}


gerarVariosNumeros()
    .then(numeros => console.log(numeros))

