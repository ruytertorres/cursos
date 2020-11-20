// Estrura de Repetição While

var x = 1


while (x <= 10){
    document.write('Ex.1: ' + x + '<br>')

    x++
}

document.write('<hr>')

x = 1

while (x <= 10){
    document.write('Ex.2: ' + x + '<br>')

    x += 3
}

document.write('<hr>')

x = 1

while (x <= 10){

    document.write('Ex.3: ' + x + '<br>')

    if(x === 5){
        break
    }

    x++
}

document.write('<hr>')

x = 1

console.log(x)

while (x <= 10){

    x++    

    if(x === 7){
        continue
    }

    document.write('Ex.4: ' + x + '<br>')
}