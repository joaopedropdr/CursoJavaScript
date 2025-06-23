// Função callback
// Função chamada apenas quando acontece um evento 
// Executa de forma repretida 
// Ele recebe a função e quantos milisegundos ela vai ter de intervalo entre as repetições

function exec(fn, a, b) {
    return fn(a, b)
}

const ST = (x, y) => console.log(x + y)
const SubT = (w, z) => console.log(w - z)
const sub = (w, z) => w - z


exec(ST, 56, 38)
exec(SubT, 182, 27)

const res = exec(sub, 50, 25)
console.log(res)


// setInterval, função que retorna o valor infinitamente
// No primeiro parametro está a função e no segundo o tempo em milisegundos de intervalo entre o retorno 
// setInterval(ST, 1000)


