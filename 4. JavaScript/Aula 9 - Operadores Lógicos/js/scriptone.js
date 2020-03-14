// Operadore Lógicos

var num = 2
var num2 = 5

document.write('&& (E) <br><br>')

// operador lógico && (E)
// O operador Lógico && verifica se todas as operações de comparação feitas são verdadeiras, caso todas sejam verdadeiras ele retorna verdadeiro

if(num == num && num2 >= num && 'a' !== 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br>')

if(num == num && num >= num2) {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

// Operador lógico || (Ou) - Se houver qualquer resultado verdadeiro dentro das operações de comparação, toda a sentença é verdadeira

document.write('<br><br>|| (Ou) <br><br>')

if(num == num || num2 >= num || 'a' !== 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br>')

if(num == num2 || num >= num2) {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

// O operador Lógico ! Inverte o resultado lógico da operação e o resultado que em sintaxe é verdadeiro passa a valer falso

document.write('<br><br> ! (Inversor de Resultado Lógico) <br><br>')

if(!(num == num)) {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br>')

if(!(num >= num2)) {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}