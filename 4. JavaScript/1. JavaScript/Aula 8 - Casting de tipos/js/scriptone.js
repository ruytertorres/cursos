// Casting de tipos com toString(), parselnt() e parsefloat()

/* nesse momento a operação lógica abaixo é tratada como string, e por isso o valor em vez de ser somado é concatenado
var par1 = prompt('digite algum número:')
var par2 = prompt('digite algum número:')

document.write(par1 + par2)
*/

//ParseInt e ParseFloat - ParseInt extrai o valor inteiro do prompt ja o ParseFloat estrai valores fracionados tambem
/*
var par1 = prompt('digite algum número:')
var par2 = prompt('digite algum número:')

par1 = parseInt(par1) //o casting parseInt atribui valor numerico a variavel tratada que originalmente era chamada no prompt como string mesmo sendo de valor numerico
par2 = parseFloat(par2)

console.log(par1)
console.log(par2)
*/
//document.write(par1 + par2)

// toString - converte a var tipo number em string
/*
var number1 = 14
var number2 = 87

document.write(number1.toString() + number2)

console.log(number1)
console.log(number2)
*/