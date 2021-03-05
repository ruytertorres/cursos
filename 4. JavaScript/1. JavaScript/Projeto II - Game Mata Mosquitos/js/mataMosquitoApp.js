/* appMataMosquito.js */

var alt = 0
var larg = 0
var lifes = 1

function ajustaTamanhoPalcoJogo(){

alt = window.innerHeight // recupera altura do browser
larg = window.innerWidth // recupera largura do browser

console.log("altura: " + alt + "px || " + "largura: " + larg + "px")
}

ajustaTamanhoPalcoJogo() // chamada da função // esse trecho de código é para tornar dinamico o palco do jogo permitindo que as aparições randomica se de somente na area visivel do browser, independete de redimencionamento do mesmo

function positionMoscaRandom(){
    
    // remover mosquito caso exista

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(lifes > 3){
            alert('| Game Hover |')
        } else {
            document.getElementById('l' + lifes).src="img/coracao_vazio.png"
            lifes ++
        }
    }

    let positionX = Math.floor(Math.random() * larg) - 90
    let positionY = Math.floor(Math.random() * alt) - 90

    /* O trecho acima visa programar de forma randomica a posição de onde as moscas aparecerão */

    /* Tratamento de erro da posição 0, usando um operador ternário */

    positionX = positionX < 0 ? 0 : positionX    
    positionY = positionY < 0 ? 0 : positionY    

    console.log("X: " + positionX + " || " + "Y: " + positionY)

    // Criar elemento HTML usando o DOM

    let mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoRandomico()// chamada da função de modificação de tamanho e posição
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
} 

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    console.log(classe)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoRandomico(){
    let classe = Math.floor(Math.random() * 2)

    console.log(classe)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}