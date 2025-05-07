// 1-)
function range (a) {
    const nums = []
    for (let i = 1; i <= a; i++) {
        nums.push(i)
    }
    return nums
}

console.log(range(5))

// 2-)
function range2 (a, b) {
    const nums = []
    for (let i = a; i <= b; i++) {
        nums.push(i)
    }
    return nums
}

console.log(range2(6, 11))

// 3-)
function range3 (a, b){
    const nums = []
    for(let i = a; i <= b; i += 2) {
        nums.push(i)
    }
    return nums
}

console.log(range3(10, 19))

// 4-)
function range4 (a, b) {
    const nums = []
    for (let i = a; i >= b; i--) {
        nums.push(i)
    }
    return nums
}

console.log(range4(6, 2))

// 5-)
function range5 (a, b){
    const nums = []
    for(let i = a; i >= b; i -= 4) {
        nums.push(i)
    }
    return nums
}

console.log(range5(8, -3))

// -----------------------------------------------
// Resolução dos exercicios da maneira feita no curso 
function rangeRC (a, b, s = 1) {
    // Se b for undefined ele passa a valer (essa a função do ?) 
    // e se b não for undefined o n1 vai assumir o valor de a (função do :)
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    // a função Math.abs faz com que todos os valores entregues sejam positivos, se colocar o - antes ele entrega valores negativos
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s) 


    const nums = []
    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i+= step){
        nums.push(i)
    }
    return nums
}

console.log(rangeRC(5))
console.log(rangeRC(6, 11))
console.log(rangeRC(10, 19, 2))
console.log(rangeRC(6, 2))
console.log(rangeRC(8, -3, 4))



  





