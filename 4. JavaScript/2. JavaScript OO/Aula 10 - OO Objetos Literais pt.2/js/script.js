var nome, idade, sexo, profissao = ''
/*
function receberFormulario(nome, idade, sexo, profissao){
    nome = document.getElementById('nome').value;
    idade = document.getElementById('idade').value;
    sexo = document.getElementById('sexo').value;
    profissao = document.getElementById('profissao').value;
    
    if(nome === ''|| idade === '' || sexo === '' || profissao === ''){
        alert('Por favor preencha os dados')
    } 
    if(nome === ''){
        let borderRed = document.getElementById('nome')
        borderRed.style.boxShadow = '1px 1px 3px #dc3545'
        nome = null
    } 
    else if(nome != ''){
        let borderRed = document.getElementById('nome')
        borderRed.style.boxShadow = 'none'
    } 
    if(idade === ''){
        let borderRed = document.getElementById('idade')
        borderRed.style.boxShadow = '1px 1px 3px #dc3545'
        idade = null
    } 
    else if(idade != ''){
        let borderRed = document.getElementById('idade')
        borderRed.style.boxShadow = 'none'
    }
    if(sexo === ''){
        let borderRed = document.getElementById('sexo')
        borderRed.style.boxShadow = '1px 1px 3px #dc3545'
        sexo = null
    }
    else if(sexo != ''){
        let borderRed = document.getElementById('sexo')
        borderRed.style.boxShadow = 'none'
    }
    if(profissao === ''){
        let borderRed = document.getElementById('profissao')
        borderRed.style.boxShadow = '1px 1px 3px #dc3545'
        profissao = null
    }
    else if(profissao != ''){
        let borderRed = document.getElementById('profissao')
        borderRed.style.boxShadow = 'none'
    }
console.log(nome)
console.log(idade)
console.log(sexo)
console.log(profissao)

}
*/

function receberFormulario(nome, idade, sexo, profissao){

    let objeto = {
        nome: nome = document.getElementById('nome').value,
        idade: idade = document.getElementById('idade').value,
        sexo : sexo = document.getElementById('sexo').value,
        profissao: profissao = document.getElementById('profissao').value,
        exibirResumo: function(){
            console.log(`
            ${this.nome}, ${this.idade}, ${this.sexo}, ${this.profissao}`)
        }
    }

    if(nome === ''|| idade === '' || sexo === '' || profissao === ''){
        alert('Por favor preencha os dados')
    } 
    if(nome === ''){
        let borderRed = document.getElementById('nome')
        borderRed.style.boxShadow = '1px 1px 3px #dc3545'
        nome = null
    } 
    else if(nome != ''){
        let borderRed = document.getElementById('nome')
        borderRed.style.boxShadow = 'none'
    } 
    if(idade === ''){
        let borderRed = document.getElementById('idade')
        borderRed.style.boxShadow = '1px 1px 3px #dc3545'
        idade = null
    } 
    else if(idade != ''){
        let borderRed = document.getElementById('idade')
        borderRed.style.boxShadow = 'none'
    }
    if(sexo === ''){
        let borderRed = document.getElementById('sexo')
        borderRed.style.boxShadow = '1px 1px 3px #dc3545'
        sexo = null
    }
    else if(sexo != ''){
        let borderRed = document.getElementById('sexo')
        borderRed.style.boxShadow = 'none'
    }
    if(profissao === ''){
        let borderRed = document.getElementById('profissao')
        borderRed.style.boxShadow = '1px 1px 3px #dc3545'
        profissao = null
    }
    else if(profissao != ''){
        let borderRed = document.getElementById('profissao')
        borderRed.style.boxShadow = 'none'
    }

    console.log(objeto)
    objeto.exibirResumo()
}