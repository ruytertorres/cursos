// Estrura de Repetição

// FOR IN

var listaFrutas = ['Goiaba', 'Caju', 'Maça', 'Morango', 'Banana', 'Pera']

console.log(listaFrutas)

for (var x in listaFrutas){
    console.log('Índice ' + x + ': correspondente a ' + listaFrutas[x])
}

document.write('<h3>Atividade Parte 1</h3>' + listaFrutas + '<br><br>')

document.write('<h3>Atividade Parte 2</h3>')

var y = 1

while (y <= 10){

    var x = 1
    
    while (x <= 10){
        document.write(y + ' x ' + x + " = " + (y * x) + '<br>')
        x++
    }
    document.write('<hr>')
    y++
}

// correção das atividade
/*
document.write('<h2>Correção</h2>')
document.write('<h3>Questão 1</h3>')


var lista_frutas = Array();
lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';
for (var i = 0; i < lista_frutas.length; i++) {
document.write(lista_frutas[i]);
console.log(lista_frutas[i])
}

document.write('<h3>Questão 2</h3>')

var x = 1;
var y = 1;
while (x <= 10) {
y = 1;
while (y <= 10) {
console.log(x + ' x ' + y + ' = ' + x * y);
document.write(x + ' x ' + y + ' = ' + x * y);
y++;
}
console.log("\n");
document.write("<hr/>");
x++;
}
*/