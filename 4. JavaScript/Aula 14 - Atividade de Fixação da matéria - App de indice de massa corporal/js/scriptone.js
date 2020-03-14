// App de Indice de Massa Corporal

var nome = prompt('Digite seu nome: ')
var alt = prompt('Digite sua Altura em Centimetros: ')
var peso = prompt('Digite se peso: ')

peso = parseFloat(peso)
alt = parseFloat(alt)

alt /= 100

var cal = peso / (alt * 2)

cal = parseFloat(cal)

if (cal < 16) {
    document.write('<div class="m-3 text-danger"><h5>Olá ' + nome + ' seu IMC é igual a ' + cal + ', sendo classificado como : </h5></div>' + '<div class="border border-danger rounded bg-danger p-3 text-white text-center"><h3>Alerta!!! Baixo Peso Muito Grave!!!</h3></div>')       
}

if (cal >= 16 && cal < 16.99) {
    document.write('<div class="m-3 text-danger"><h5>Olá ' + nome + ' seu IMC é igual a ' + cal + ', sendo classificado como : </h5></div>' + '<div class="border border-danger rounded bg-danger p-3 text-white text-center"><h3>Alerta!!! Baixo Peso Grave!!!</h3></div>')       
}

if (cal >= 17 && cal < 18.49) {
    document.write('<div class="m-3 text-warning"><h5>Olá ' + nome + ' seu IMC é igual a ' + cal + ', sendo classificado como : </h5></div>' + '<div class="border border-warning rounded bg-warning p-3 text-white text-center"><h3>Atenção!!! Baixo Peso.</h3></div>')       
}

if (cal >= 18.50 && cal < 24.99) {
    document.write('<div class="m-3 text-success"><h5>Olá ' + nome + ' seu IMC é igual a ' + cal + ', sendo classificado como : </h5></div>' + '<div class="border border-success rounded bg-success p-3 text-white text-center"><h3>Parabens!!! Você está com o peso ideal.</h3></div>')       
}

if (cal >= 25 && cal < 29.99) {
    document.write('<div class="m-3 text-warning"><h5>Olá ' + nome + ' seu IMC é igual a ' + cal + ', sendo classificado como : </h5></div>' + '<div class="border border-warning rounded bg-warning p-3 text-white text-center"><h3>Atenção!!! Sobrepeso.</h3></div>')       
}

if (cal >= 30 && cal < 34.99) {
    document.write('<div class="m-3 text-danger"><h5>Olá ' + nome + ' seu IMC é igual a ' + cal + ', sendo classificado como : </h5></div>' + '<div class="border border-danger rounded bg-danger p-3 text-white text-center"><h3>Alerta!!! Obesidade Grau I!</h3></div>')       
}

if (cal >= 35 && cal < 39.99) {
    document.write('<div class="m-3 text-danger"><h5>Olá ' + nome + ' seu IMC é igual a ' + cal + ', sendo classificado como : </h5></div>' + '<div class="border border-danger rounded bg-danger p-3 text-white text-center"><h3>Alerta!!! Obesidade Grau II!</h3></div>')       
}

if (cal > 40) {
    document.write('<div class="m-3 text-danger"><h5>Olá ' + nome + ' seu IMC é igual a ' + cal + ', sendo classificado como : </h5></div>' + '<div class="border border-danger rounded bg-danger p-3 text-white text-center"><h3>Alerta!!! Obesidade Grau III!</h3></div>')       
}

// Acertei U.u! *-*''