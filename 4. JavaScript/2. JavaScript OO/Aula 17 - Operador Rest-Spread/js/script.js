// *----> Rest
console.log(`>> Rest
`)
//string
let tituloArtigo = 'como utilizar o operador Rest/Spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

//array
let listaCursos1 = ["MongDB e NodeJS", "Angular e TypeScript"]
let listaCursos2 = ["Python", "Programção Web"]
let listaCursosCompleto = ["Desenvolvimento Android", "Java", ...listaCursos1,...listaCursos2]

console.log(listaCursosCompleto)

//objeto
let pessoa = {nome: 'João', idade: 19}
let endereco = {rua: 'Avelar Almarino', N: 299, ...pessoa}

console.log(endereco)

// *----> Spreat

function soma(...param){
    resultado = 0

    console.log(`>> Spreat
${param}`)

    param.forEach(v => resultado += v)

return resultado
}

console.log(`Result: ${soma(7,9,13,45)}`)

function mult(m, ...p){
    console.log(m)
    let result = 0 
    console.log(p)

    p.forEach(v => result += m * v)

    return result
}

console.log(`Result: ${mult(5, 7, 9, 10, 15, 17)}`)