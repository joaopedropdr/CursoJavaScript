// Async/Await
// A ideia do Async/Await é criar um código asincrono que parece estar sincrono

function  esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retronarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
    
}

async function retronarValorRapido() {
    return 20  
}

async function executar() {
    let valor = await retronarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
} 

async function executarDeVerdade() {
    const valor = await executar() 
    console.log(valor) 
}

executarDeVerdade()
