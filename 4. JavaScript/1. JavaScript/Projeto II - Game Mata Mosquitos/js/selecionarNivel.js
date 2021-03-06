function iniciarJogo(){
    var nivel = document.getElementById('nivel').value

    if(nivel === ''){
        alert('Por favor selecione um nível')
        return false
    }

    window.location.href = "game.html?" + nivel
}