let Car = function(){
    this.cor = 'Amarelo'
    this.marca = 'Forde'
    this.modelo = 'Mustang'
    this.velAtual = 0
    this.velMax = 240

    this.acelerar = function(){
        let vel = this.getVelAtual()+10
        this.setVelAtual(vel)
    }
    this.getVelAtual = function(){
        return this.velAtual
    }
    this.setVelAtual = function(velAtual){
        this.velAtual = velAtual
    }
}

let car = new Car()

console.log(`A velocidade atual é ${car.getVelAtual()}`)
car.acelerar()
console.log(`A velocidade atual é ${car.getVelAtual()}`)