// Operador Ternario
var nota = prompt('Digite sua nota:')
var freq = prompt('Digite sua quantidade de faltas no módulo:')
var media = 7
var faltas = 20

var resul = (nota >= media && freq <= faltas) ? 'Aprovado' : 'Reprovado'

document.write(resul)