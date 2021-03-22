//Aula  Prototype

// função literal
let a1 = {
    cor: 'Branco',
    modelo: 'Airbus A380',
    levantarVoo: function(){
        console.log('Levantar Voo')
    }

}
//função construtora
let AviaoF = function() {
    this.cor = 'Azul',
    this.modelo = 'Boeing ',
    this.levantarVoo = function(){
        console.log('Levantar Voo')
    }

}

let a2 = new AviaoF()

// função de classe

class AviaoC{
    constructor(){
        this.cor = 'Amarelo'
        this.modelo = 'Embraer E-Jets'
    }
    levantarVoo(){
        console.log('Levantar Voo')
    }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)

// Aula 2 Prototype Chen

let animal ={
     attr1: 'a',
}
let vertebrado ={
    __proto__: animal, attr2: 'b',
}
let ave ={
    __proto__: vertebrado, attr3: 'c',
    attr2: 'x',
}

Object.prototype.attr50 = 'Z' // CUIDADO!! esse metodo insere um atribudo no escopo global da app

console.log(`
${ave.attr2}
${ave.attr1}
${ave.attr50}`)