class Animal{
    constructor(cor , tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho //cm
        this.peso = peso //kg
    }
    dormir(){
        console.log('dormir')
    }
}


class Bird extends Animal{
    constructor(bico, cor , tamanho, peso){
        super(cor , tamanho, peso)
        this.bico = bico
    }
    voar(){
        console.log('voar')
    }
}

class Papagaio extends Bird{
    constructor(sabeFalar, cor , tamanho, peso){
        super('médio', cor , tamanho, peso)
        this.sabeFalar = sabeFalar
    }
    falar(){
        console.log('falar')
    }
}

let passaro = new Bird()
let papagaio = new Papagaio(true, 'verde e amarelo', 25, 400)
let papagaio2 = new Papagaio(true, 'azul e amarelo', 28, 400)

console.log(papagaio)
console.log(papagaio2)