// Funcões nativas para manipular strings

var nome = "     Ruyter Torres      "
var encaminharParaExemplos = '<a href="https://www.w3schools.com/jsref/jsref_obj_string.asp">Veja Mais</a>'

// atributo length

document.write(nome.length)

document.write('<br>')

// função charAt

document.write(nome.charAt(8))

document.write('<br>')

// função indexOf

document.write(nome.indexOf('r'))

document.write('<br>')

// função replace

document.write(nome.replace('Ruyter', 'Emanuel'))

document.write('<br>')

// função substr

document.write(nome.substr(0, 6))

document.write('<br>')

// funções toLowerCase e toUpperCase

document.write(nome.toUpperCase())
document.write('<br>')
document.write(nome.toLowerCase())

document.write('<br>')

// função

document.write('-' + nome.trim() + '-')

document.write('<br><br><br>')

document.write(encaminharParaExemplos)
