let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

/*
metodo de recuperação de valor de array verboso

let a = frutas[0]
let b = frutas[1]
let c = frutas[2]
console.log(a, b, c)
*/

// pode utilizar o const
/*let [a,b,,d] = frutas
console.log(a, b, d)
*/

let [a,b,c,d,e = 'banana', f='morango'] = frutas
console.log(a, b, c, d, e, f)


let marcaCarro = [['Fiesta', 'Uno', 'Mustang', 'Chevet', 'Corsa'],['Ford', 'Fiat', 'Ford', 'Chevrolet', 'Chevrolet']]
let [x, [,,c2]] = marcaCarro

console.log(x)
console.log(c2)