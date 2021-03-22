let Car = function(){
    this.cor = 'Amarelo'
    this.marca = 'Forde'
    this.modelo = 'Mustang'
    this.velAtual = 0
    this.velMax = 240

    this.acelerar = function(){
        let vel = this.getVelAtual()+20
        if(vel > this.velMax){
            vel = this.velMax
        }
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

console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
car.velMax = 350
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}`)
car.acelerar()
console.log(`Velocidade Atual: ${car.velAtual}
----------------------`)


let Car2 = function(){

    var velMax = 240
    var kmRodados = 0

    this.cor = 'Amarelo'
    this.marca = 'Forde'
    this.modelo = 'Mustang'
    this.velAtual = 0

    this.acelerar = function(){
        let vel = this.getVelAtual()+20
        if(vel > velMax){
            vel = velMax
        }
        this.setVelAtual(vel)
        setKmRodados(0.07)
        console.log(`>> ${kmRodados}`)
    }
    this.getVelAtual = function(){
        return this.velAtual
    }
    this.setVelAtual = function(velAtual){
        this.velAtual = velAtual
    }

    var setKmRodados = function(k){
        kmRodados += k
    }
}

let car2 = new Car2()

console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
car2.velMax = 350
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}`)
car2.acelerar()
console.log(`Velocidade Atual: ${car2.velAtual}
----------------------`)
console.log(car)
console.log(car2)