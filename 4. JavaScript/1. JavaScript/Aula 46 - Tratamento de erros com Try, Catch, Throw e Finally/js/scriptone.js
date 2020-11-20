// Tratamento de erros

// throw

//throw new Error('Houve um erro, mas nossa equipe está de olho nisso. Logo tudo estará normal para você!!!')

//netflix

var video = Array()

video[1] = Array()
video[1]['nome'] = 'Fullmetal Alchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video) {

    try{
    console.log(video[0]['nome'])
    } catch(erro){
        tratarErro(erro)
        console.log('Aqui se trata o error / mensagem de erro')
        throw new Error('Houve um erro, mas nossa equipe está de olho nisso. Logo tudo estará normal para você!!!')
    } finally {
        console.log('Sempre passa por aqui (try / catch)')
    }

    console.log('A aplicação não morreu') 
}

function tratarErro(e){
    // logica para tratar o registrar o erro no servidor
    console.log(e)
}
getVideo(video)
