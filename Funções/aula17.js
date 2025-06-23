// Função callback que retorna um valor apos ser realizada uma ação, nesse caso a leitura de um arquivo.

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')


console.log('Inicio sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim sync...')



