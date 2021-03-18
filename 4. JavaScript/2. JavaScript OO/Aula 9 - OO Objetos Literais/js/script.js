class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }
    verDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let produto = new Produto('notebook', '$3.899,00')
produto.verDescricao()

// objeto literal

let objetoLiteral = {
    descricao: 'celular',
    preco: '1.789,00',
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

objetoLiteral.verDescricao()