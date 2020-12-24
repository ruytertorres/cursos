/* appMataMosquito.js */

var alt = 0
var larg = 0

function ajustaTamanhoPalcoJogo(){

alt = window.innerHeight // recupera altura do browser
larg = window.innerWidth // recupera largura do browser

console.log("altura: " + alt + "px || " + "largura: " + larg + "px")
}

ajustaTamanhoPalcoJogo() // chamada da função

// o trecho de código acima é para tornar dinamico o palco do jogo permitindo que as aparições randomica se de somente na area visivel do browser, independete de redimencionamento do mesmo

function positionMoscaRandom(){
    
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
    mosquito.className = 'mosquito1'
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
} 