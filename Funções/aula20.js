// Reduce

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 1, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el

}


const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)

// Criando o reduce

Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial
    for(let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
            
        } else {
            acc = fn(acc, this[i], i, this)
        }
    }
    return acc
}

const getFragil = item => item.fragil === true
const totais = item => item.qtde * item.preco
const somaTotais = (a, b) => a + b

const valores = carrinho
    .filter(getFragil)
    .map(totais)
    .meuReduce(somaTotais)

console.log(valores)