// Função callback com uma função map

const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

//------------------------------------------

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))


const somaValores = item => item.qtde * item.preco
const totais = carrinho.map(somaValores)
console.log(totais)

//------------------------------------------
// Criado um map

Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)  
        mapped.push(result)
    }
    return mapped
}

const getNome2 = item => item.nome
console.log(carrinho.meuMap(getNome2))


const somaValores2 = item => item.qtde * item.preco
const totais2 = carrinho.meuMap(somaValores2)
console.log(totais2)

