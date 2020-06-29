// Estrura de Repetição Prática

var listaFrutas = ['Goiaba', 'Caju', 'Maça', 'Morango', 'Banana', 'Pera']

console.log(listaFrutas)
document.write(listaFrutas[1] + '<br><br><br>') //debug

var f = listaFrutas.forEach(function(valor, indice, array){
    console.log('Índice ' + indice + ' | Valor ' + valor)
    
    if(valor == 'Caju'){
        array[indice] = 'Um novo valor'
    }
})

console.log(listaFrutas)
document.write(listaFrutas[1] + '<br><br><br>') //debug

/*  *** Outro metodo de escrever essa função
chamada função de harpper *** */

/*

var listaFrutas = ['Goiaba', 'Caju', 'Maça', 'Morango', 'Banana', 'Pera']

console.log(listaFrutas)
document.write(listaFrutas[1] + '<br><br><br>') //debug

var f = function(valor, indice, array){
    console.log('Índice ' + indice + ' | Valor ' + valor)

    if(valor == 'Caju'){
        array[indice] = 'Um novo valor'
    }
}

listaFrutas.forEach(f)

console.log(listaFrutas)
document.write(listaFrutas[1] + '<br><br><br>') //debug

*/