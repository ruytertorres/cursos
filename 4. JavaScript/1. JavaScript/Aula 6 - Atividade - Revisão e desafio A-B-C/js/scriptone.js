// Desafio

var a = 10
var b = 20
var c = null

var div1 = 'parte 1'

document.write("<h5>" + div1 + "</h5>" + "<br>")


document.write("A- " + a + "<br>")
document.write("B- " + b + "<br>")
document.write("C- " + c + "<br>")
document.write("<hr> ")

// Lógica de inversão dos valores
//  O Browser está lendo o padrão a-b-c inicial, ou seja, a vale 10, b cale 20 e c vale null

c = a // como o 'c' é uma memoria de alocação, ou seja vazia, a partir desse momento ele assume o valor de a, e só a partir desse momento, c = a "ininical" = 10 
a = b // Nesse momento o "a" assume o valor de "b inicial" e passa a valer 20, sem alterar o momento anterior de "a" que o "c" assumiu, e então nesse momento c = a "inicial" = 10, e o "a atual" = b "inicial" = 20
b = c // Nesse momento o "b" assume o valor do "c atual"= "a inicial"= 10, e "b atual passa a valer 10", lembrando que só a partir desse momento
c = null /* e por fim o "c" que alocou o momento inicial de "a" e passou a valer 10, nesse momento sobre escreve o valor do "a" inicial por null, e passa a partir desse momento a valer null.
portanto o c passa a ter valores diferentes em momentos diferentes:

C Inicial = Null (no priemeiro momento)
C Intermediario = 10 (No momento Médio dessa lógica)
C tual = Null */

div1 = 'parte 2'

document.write("<h5>" + div1 + "</h5>" + "<br>")

document.write("A- " + a + "<br>")
document.write("B- " + b + "<br>")
document.write("C- " + c + "<br>")
document.write("<hr> ")