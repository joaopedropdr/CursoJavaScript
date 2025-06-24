// Desafio map, filter, reduce

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// 1- fragil: true
// 2- soma total dos valores filtrados
// 3- media dos valores

const getFragil = item => item.fragil === true
const totais = item => item.qtde * item.preco
const somaTotais = (a, b) => a + b




const valores = carrinho
    .filter(getFragil)
    .map(totais)
    .reduce(somaTotais)


console.log(valores)

// Não consegui fazer a media 

// Resposta do curso
const isFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const media = carrinho
    .filter(isFragil)
    .map(getTotal)
    .reduce(getMedia, {qtde: 0, total: 0, media: 0})

console.log(media)




