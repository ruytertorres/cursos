//A class é o modelo da entidade/objeto 
class ContaBancaria {
    constructor(){
        this.agencia = 1080
        this.numeroConta = 833325
        this.saldo = 450
        this.limite = 5000
    }
    depositar(valorDeposito){
        this.saldo += valorDeposito
    }
    sacar(valorSaque){
        this.saldo -= valorSaque
    }
    consultarSaldo(){
        return this.saldo
    }
}

var x = new ContaBancaria 
var y = new ContaBancaria 

console.log(x.consultarSaldo())
x.depositar(1200)
console.log(x.consultarSaldo())
x.sacar(350)
console.log(x.consultarSaldo())

        //um software de marcenaria
        //cadeira e sofá

        //paradigma procedural

        //cadeira
        // let qtde_pernas = 4
        // let giratoria = false
        // let cor = 'azul'
        //array de cadeiras
       /*  let cadeiras = Array()
        cadeiras[0] = Array()
        cadeiras[0]['qtde_pernas'] = 4
        cadeiras[0]['giratoria'] = false
        cadeiras[0]['cor'] = 'azul'

        cadeiras[1] = Array()
        cadeiras[1]['qtde_pernas'] = 1
        cadeiras[1]['giratoria'] = true
        cadeiras[1]['cor'] = 'vermelha'

        function girar_cadeira(indice) {
            if (cadeiras[indice]['giratoria'] === true) {
                console.log('girou')
            } else {
                console.log('cadeira não é giratória')
            }
        }

        function adicionar_cadeira(qtde_pernas, giratoria, cor) {
            cadeira['qtde_pernas'] = qtde_pernas
            cadeira['giratoria'] = giratoria
            cadeira['cor'] = cor

            cadeiras.push(cadeira)
        }
        adicionar_cadeira(3, false, 'verde')

        //girar_cadeira(1)

        //paradigma de OO */

        class Cadeira {
            constructor(qtde_pernas, giratoria, cor){
                this.qtde_pernas =  qtde_pernas
                this.giratoria = giratoria
                this.cor = cor
            }
        
            girarCadeira(){
                if(this.giratoria === true){
                    console.log('girou')
                } else {
                    console.log('Cadeira não é giratória')
                }
            }
        }

        // let cadeira = new Cadeira(4, false, 'azul')
        // let cadeira2 = new Cadeira(1, true, 'vermelha')

       let cadeiras = Array()
       cadeiras.push(new Cadeira(4, false, 'azul'))
       cadeiras.push(new Cadeira(1, true, 'vermelha'))
        // console.log(cadeira)
       //cadeira2.girarCadeira()