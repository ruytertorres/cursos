// Function

function calcularArea(largura, comprimento) {
    var area = largura * comprimento
    return area
}

var largura = prompt('Digite a largura do terreno em Metros: ')
var comprimento = prompt('Digite o comprimento do terreno em Metros: ')

largura = parseFloat(largura)
comprimento = parseFloat(comprimento)

var area = calcularArea(largura, comprimento)

document.write('O terreno possui ' + area + ' Metros²')