// Operadores Aritiméticos
var num1 = prompt('digite um numero:')
var num2 = prompt('digite outro numero:')

num1 = parseFloat(num1)
num2 = parseFloat(num2)

document.write('A soma entre os valores ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 + num2) + '<br>') //É sempre importante usar os parentesis como se frsse em uma equação matematica, pois nesse contexto, se não houvesse um parentesis separando os nubers da string, o operado + ia concatenar os numbers ao invés de somalos, mas isolando-os com um parentesis, ou mais dependendoda nessecidade, os numbers são somados e só depois o resultado da soma é concatenado a string
document.write('A subtração entre os valores ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 - num2) + '<br>') //
document.write('A multiplicação de ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 * num2) + '<br>') //
document.write('A divisão de ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 / num2) + '<br>') //
document.write('O Modulo entre ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 % num2) + '<br>') // O Módulo é o que resta de uma divisão que não é inteira, por exemplo 9/2 = 4.5 porem o modulo considera que 9/2 = 4 e resta 1, então o modulo de 9/2 = 1
document.write('O Incremento de ' + num1 + ' é: ' + (++num1) + '<br>') // quando o incremento é disosto de forma previa a instrução é executada como se fosse uma soma 1+num1 e exibe o resultado no ato da operação, ou seja, quando o incremento é disposto de forma previa ex.: ++num1, o valor de num1 passa a ser somado +1 no mesmo momento

document.write('e o Incremento de ' + (num2++) + ' é: ') // Quando o incremento é pós variavel, o num2 não passa a valer num2+1 no ato da operação, mas é nessessario ser chamado e outra variavel para mostrar o resulado da instrução dada na variavel inicial, ou seja no num2++
document.write((num2) + '<br>') // então nesse mometo se dá o resultado da instrunção anterior e o num2 que foi chamado anteriotmente pela intrunção num2++ passa a valer e mostrar o resultado chamado na instrução anterior, num2++

// A mesma regra do Incremento vale para o decremento
document.write('O Decremento de ' + num1 + ' é: ' + (--num1) + '<br>') // quando o decremento é disosto de forma previa a instrução é executada como se fosse uma subtração num1-1 e exibe o resultado no ato da operação, ou seja, quando o decremento é disposto de forma previa ex.: --num1, o valor de num1 passa a ser subtraido -1 no mesmo momento

document.write('e Decrememento de ' + (num2--) + ' é: ') // Quando o decremento é pós variavel, o num2 não passa a valer num2-1 no ato da operação, mas é nessessario ser chamado e outra variavel para mostrar o resulado da instrução dada na variavel inicial, ou seja no num2--
document.write(num2) // então nesse mometo se dá o resultado da instrunção anterior e o num2 que foi chamado anteriotmente pela intrunção num2-- passa a valer e mostrar o resultado chamado na instrução anterior, num2--
