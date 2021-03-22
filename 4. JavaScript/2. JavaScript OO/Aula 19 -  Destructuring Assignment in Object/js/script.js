// *----> Parte 2

// token do metodo destructuring
// Array = []
// object = {}

let Produto = {
    descricao: 'Notebook',
    preco: 3800,
    detalhes:{
        fabricante: 'Positivo',
        modelo:'S-9127',
        so: 'Win10',
        ram: 4,
        ssd:240,
        voltagem:'BiVolt',
        touch:false,
    }
}

//let {descricao, preco} = Produto
//console.log(descricao, preco)

// let {descricao:d, preco:p, cor:c = 'preto'} = Produto
// console.log(d, p, c)

let {descricao:d, cor:c = 'preto', detalhes:{fabricante:f , so, ssd, brinde:b='Não informado'}} = Produto
console.log(d, c, f, so, ssd, b)

// *----> parte 3

//Array
let arr = [10,20,30,40,50]

function teste([a,b,,,e, i=100]){
    console.log('Array: ' + a,b,e,i)
}

teste(arr)

//Object

let Obj ={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50,
}

/*
function testeObj(a,b){
    console.log(`Obj: ${a} ${b}`)
}

testeObj(Obj.a, Obj.b)
*/

function testeObj({a,b,e, i=100}){
    console.log(`Obj: ${a} ${b} ${e} ${i}`)
}

testeObj(Obj)

// *----> Part 4

//Array
// Destructuring + Rest(...)

let arr2 = [100,200,300,400,500]

let [ _a, ...resto] = arr2

console.log(`a = ${_a}`)
console.log(`resto = ${resto}`)

//Object

let Objct ={
    a1:10,
    b1:20,
    c1:30,
    d1:40,
    e1:50
}

let {a1, ...z} = Objct

console.log(`Obj2 = ${a1}`)
console.log(z)