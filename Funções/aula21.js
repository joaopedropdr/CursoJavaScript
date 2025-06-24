// Promise
// Uma promessa chama apenas um valor. Para chamar mais de um valor é preciso criar um objeto


const PrimeiroElemento = arrayOuString => arrayOuString[0]  
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'João'])
})
     // Função para chamar uma promeça  
    .then(PrimeiroElemento)
    .then(PrimeiroElemento)
    .then(letraMinuscula)
    .then(console.log);

