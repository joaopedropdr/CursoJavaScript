// Promise tratamento de erro
const { clearScreenDown } = require("readline")

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })    
}

// Não colocar cathe entre os thens pois quando o erro passa pelo tratamento ele perde os valores anteriores.
funcionarOuNao('testando...', 0.1)
    .then(v => `Valor: ${v}`)
    .then( 
        v => console.log(v),
        err => console.log(`Erro esp: ${err}`)
    )
    .then(() => console.log('Quase fim'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!'))