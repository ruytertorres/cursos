// Manipulando estilo de elemento

function modificaBackground (){
    document.getElementById('modificaCorInput').className = "modifica-cor-y"
}

function modificaBackground2 (){
    var caracter = document.getElementById('modificaCorInput').value

    caracter.trim

    if (caracter.length < 3){
        document.getElementById('modificaCorInput').className = "modifica-cor-r"
    } else {
        document.getElementById('modificaCorInput').className = "modifica-cor-v"
    }
}

// Atenção nas funções nativas de cada elemento, nesse caso na função nativa de manipular strings





















/*
// Seleção de Elementos

// document.getElementById()

console.log(document.getElementById('username'))

// getElementsByTagName

//console.log(document.getElementsByTagName('input'))

// getElementsByClassName

console.log(document.getElementsByClassName('textarea'))

// getElementsByName

console.log(document.getElementsByName('nome'))

//Prática

function distribuirCaracter(){
    var caracter = document.getElementById('entrada').value
    document.getElementById('entrada').value = ""

    caracter.trim()

    switch(caracter){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            document.getElementById('numeros').value = caracter
            break
        default:
            document.getElementById('letras').value += caracter // Concatenado a logica da varivel com a propria variavel, o campo de texto n é resetado, diferrente do numero onde não houve concatenação
        }
}
*/