// Parametros Variaveis
/*
function soma(a, b){
    return a + b
}

console.log(soma( 7, 7))
console.log(soma( 7, 7, 9, 5)) 
console.log(soma( 7))
console.log(soma())
*/

function soma(){
    var result = 0
    for(var n in arguments){
        result += arguments[n]
    }

    return result
}

console.log(soma( 7, 7))
console.log(soma( 7, 7, 9, 5)) 
console.log(soma( 7))
console.log(soma( 7, 7, 9, 5, 'texto')) 
console.log(soma( 7, 'texto'))
console.log(soma())