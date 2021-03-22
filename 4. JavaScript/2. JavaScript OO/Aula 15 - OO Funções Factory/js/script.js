let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'Única',
    aro: 12,
    rodasDeAuxilio: true,
    pedalar(){
        console.log('Metodo Pedalar executado')
    }
}
let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: 18,
    aro: 26,
    rodasDeAuxilio: false,
    pedalar(){
        console.log('Metodo Pedalar executado')
    }
}

console.log(Bicicleta1)
console.log(Bicicleta2)
/*
let BicicletaFactory = function(cor, marcha, aro, rodasDeAuxilio){
    return {
        cor: cor,
        marcha: marcha,
        aro: aro,
        rodasDeAuxilio: rodasDeAuxilio,
        pedalar(){
            console.log('Metodo Pedalar executado')
        }
    }
}
*/

//no metodo abaixo o nome da variavel vira um nome de chave, e essa chave rescebe por parametro o valor predefinido pela função
//funcionando como da mesma forma que o metodo aima, porem com a sintaxe mais enxuta

let BicicletaFactory = function(cor, marcha, aro, rodasDeAuxilio){
    return {
        cor,
        marcha,
        aro,
        rodasDeAuxilio,
        pedalar(){
            console.log('Metodo Pedalar executado')
        }
    }
}

let bicicleta3 = BicicletaFactory('Preta', 26, 32, false)
console.log(bicicleta3)

//console.log(`Cor: ${bicicleta3.cor}`)
//bicicleta3.pedalar()

let bicicleta4 = BicicletaFactory('Rosa e Branco', 21, 22, false)
console.log(bicicleta4)