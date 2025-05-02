//Anonymous function
//IIFE- immediantely invoked function expresseion 

(function (a, b, c){
    let x = 4
    console.log(`Result: ${a, b, c}`)
    console.log(x)
})(1, 2, 3);
// O ponto e virgula é necessario nesse caso

(function (){
    let x = 300
    console.log(x)
});
// No caso de IIFE é mais comun ver funções sem parametro

// É possivel tambem fazer funções arrow II
(() => {
    console.log('Arrow #1')
})();

// Com apenas uma linha de código
(() => console.log('Arrow #2'))();
