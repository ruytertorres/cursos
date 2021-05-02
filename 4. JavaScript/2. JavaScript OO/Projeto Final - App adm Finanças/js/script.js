//Inserir alert para quando os dias estiverem errados e destacar a cor da janela
class Despesas{
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){// metodo for in pecorre todos os item do objeto, pesquisar na documentação
            if(this[i] == null || this[i] == '' || this[i] == undefined){//o metodo this[i] recupera o valor dentro do item
                return false
            }
        }
        return true
    }
    tratarDiaMes(){
        for(let i in this){
            if(this.mes == '2'){
                if(this.dia < 1 || this.dia > 29){
                    return false
                }
            } 
            if(this.mes == '4' || this.mes == '6' || this.mes == '9' || this.mes == '11'){
                if(this.dia < 1 || this.dia > 30){
                    return false
                }
            }
            if(this.mes == '1' || this.mes == '3' || this.mes == '5' || this.mes == '7' || this.mes == '8' || this.mes == '10' || this.mes == '12'){
                if(this.dia < 1 || this.dia > 31){
                    return false
                }
            }
            return true
        }
        
    }
}
class Bd{
    constructor(){
        let id = localStorage.getItem('id') // getItem serve para recuperar um dado dentro de local storage
        if(id === null){ //tratamento de SE o valor for Null
            localStorage.setItem('id', 0) // setItem serve para inserir um dado em localStorage
        }
    }
    getProxId(){//Metodo para somar valor ao indice, evitando sobrepocisão de valores
        let proxId = localStorage.getItem('id')
        return parseInt(proxId)+1
    }
    gravar(d){
        let id = this.getProxId() // atribui a variavel local id a função contida em getProxId
        localStorage.setItem(id, JSON.stringify(d)) //transforma o dado recebido no constructor e tratado no getProxId, e o transforma em arquivo JSON
        localStorage.setItem('id', id)//atribui a o dado recebido a um novo item na pilha
    }
}
var bd = new Bd() // variavel responsavel por gravar e instanciao os dados em local storage atraves da class Db
function cadastrarDespesas(){ //função principal

    //area de coleta de dados

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    // tratamento dos dados coletados atraves da class gravar

    let despesa = new Despesas(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

    // instanciamento dos dados para aslocação através da var bd

    if(despesa.validarDados() && despesa.tratarDiaMes()){
        bd.gravar(despesa)
        $('#resgistrarDespesa').modal('show')
        } else {
        $('#resgistrarDespesa').modal('show')
    }
}
//atualizar com CTRL+F5 seta o cache