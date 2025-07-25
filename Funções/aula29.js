// Orientção a objeto 

class Produto {
    constructor(nome, preco, desc = 0.5) {
        this.nome = nome
        this.preco = preco  
        this.desc = desc       
    }  
    
    get nome() {
        return `Produto: ${this._nome}`
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco) {
        if(novoPreco >= 0) {
            this._preco = novoPreco
        }
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }
}

const p1 = new Produto('Caneta', 10)
// p1.nome = 'caneta'
p1.preco = -20
console.log(p1.nome)
console.log(p1.preco)
const p2 = new Produto('Geladeira', 10000, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal)

