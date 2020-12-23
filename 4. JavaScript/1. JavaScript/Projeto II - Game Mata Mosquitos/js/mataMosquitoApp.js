/* appMataMosquito.js */

var alt = 0;
var larg = 0;

function ajustaTamanhoPalcoJogo(){

alt = "altura: " + window.innerHeight + "px ||" // recupera altura do browser
larg = "largura: " + window.innerWidth + "px" // recupera largura do browser

console.log(alt, larg)
}

ajustaTamanhoPalcoJogo() // chamada da função

// o trecho de código acima é para tornar dinamico o palco do jogo permitindo que as aparições randomica se de somente na area visivel do browser, independete de redimencionamento do mesmo

