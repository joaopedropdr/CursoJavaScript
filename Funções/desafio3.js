// Desafio promise
// Minha resposta

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

new Promise(function(resolve) {
    resolve(fs.readFile(caminho, exibirConteudo))
})
    .then(console.log)

// Resposta do curso

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })  
}

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))

