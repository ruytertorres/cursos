// Funcão de Callback

function recuperarArtigo(id, callbackSuccess, callbackErro){
    if ( true ) {
        callbackSuccess('Como funciona a função de CallBack', 'A função de callback funciona (...)')
    } else {
        callbackErro('ERRO')
    }
}

var callbackSuccess = function(titulo, descricao){
    document.write('<h3 class="text-primary">' + titulo + '</h3>')
    document.write('<hr>')
    document.write('<p>' + descricao + '</p>')    
}

var callbackErro = function(erro){
    document.write('<h4 class="text-warning">' + erro + '</h4>')
}

recuperarArtigo(1, callbackSuccess, callbackErro)