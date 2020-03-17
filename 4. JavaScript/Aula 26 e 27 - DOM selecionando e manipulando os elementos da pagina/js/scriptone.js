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

    console.log(caracter)

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
