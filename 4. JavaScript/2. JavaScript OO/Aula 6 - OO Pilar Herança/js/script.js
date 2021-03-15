class Animal{
    constructor(){
        this.cor = ''
        this.tamanho = null //cm
        this.peso = null //kg
    }
    dormir(){
        console.log('dormir')
    }
}

class Dog extends Animal{
    constructor(){
        super()
        this.orelhas = 'grandes e caidas'
    }
    correr(){
        console.log('correr')
    }
    rosnar(){
        console.log('rosnar')
    }
}

class Bird extends Animal{
    constructor(){
        super()
        this.bico = 'curto'
    }
    voar(){
        console.log('voar')
    }
}

class Fish extends Animal {
    constructor(){
        super()
        this.barbatanas = true
        this.escamas = true
    }
    nadar(){
        console.log('nadar')
    }
}

let cachorro = new Dog()
let passaro = new Bird()
let peixe = new Fish()

console.log(cachorro)
console.log(passaro)
console.log(peixe)

cachorro.dormir()
passaro.dormir()
peixe.nadar()
peixe.dormir()