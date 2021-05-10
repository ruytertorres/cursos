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
    somenteNumeros(e) {
        var charCode = e.charCode ? e.charCode : e.keyCode;
        // charCode 8 = backspace   
        // charCode 9 = tab
        if (charCode != 8 && charCode != 9) {
            // charCode 48 equivale a 0   
            // charCode 57 equivale a 9
            if (charCode < 48 || charCode > 57) {
                return false;
            }
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
    recuperarTodosRegistros(){

        //array das despesas
        let despesas = Array()

        //atribui valor ao item listado em local storage
        let id = localStorage.getItem('id')

        //laço pra recuperar as depesas cadastradas em local storage
        for(let i = 1; i <= id; i++){
            //recuperar despesa
            let despesa = JSON.parse(localStorage.getItem(i))

            //tratar erro NULL
            if(despesa === null){
                continue // o metodo continue, dentro de uma laço de repetição, salta para o proximo item, aplicado nesse momento da aplicação faz com que a logica pule o objeto null e passe para o proximo, evitando a imprenção de um objeto null no array
            }
            //atribui um identificador a despesa
            despesa.id=i
            // inputa o objeto recuperado de local storage em um array
            despesas.push(despesa)

        }
        return despesas
    }
    pesquisar(despesa){
        let despesasFiltradas = Array()

        despesasFiltradas = this.recuperarTodosRegistros()

        //filtros
        if(despesa.ano != ''){
            console.log('ano')
            despesasFiltradas = despesasFiltradas.filter(v => v.ano == despesa.ano)
        }
        if(despesa.mes != ''){
            console.log('mes')
            despesasFiltradas = despesasFiltradas.filter(v => v.mes == despesa.mes)
        }
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(v => v.dia == despesa.dia)
        }
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(v => v.tipo == despesa.tipo)
        }
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(v => v.descricao == despesa.descricao)
        }
        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(v => v.valor == despesa.valor)
        }
        return despesasFiltradas
    }
    remover(id){
        localStorage.removeItem(id)
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

        document.getElementById('modalTitle').innerHTML= 'Resgistro inserido com sucesso' 
        document.getElementById('cor-texto').className= 'modal-header text-success' // adicionar classe ao elemento HTML
        document.getElementById('modificaTextPopUp').innerHTML = "As depesas foram devidamete cadastradas!"
        document.getElementById('btn-modal').innerHTML='Seguir'
        document.getElementById('btn-modal').className= 'btn btn-success'

        $('#resgistrarDespesa').modal('show')
        
        //limpar campos
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''
        } else {
        $('#resgistrarDespesa').modal('show')

        document.getElementById('modalTitle').innerHTML = "Erro na inclusão do registro"
        document.getElementById('cor-texto').className= 'modal-header text-danger'
        document.getElementById('modificaTextPopUp').innerHTML = "Verifique se todos os campos foram devidamente preenchidos!"
        document.getElementById('btn-modal').innerHTML='Voltar'
        document.getElementById('btn-modal').className= 'btn btn-danger'
    }
}
function carregarListaDespesa(despesas = Array(), filtro = false){
    
    if(despesas.length == 0 && filtro == false){
        despesas = bd.recuperarTodosRegistros()
    }


    //selecionando o elemento tbody da tabela
    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''

    //percorrer o array de forma diamica
    despesas.forEach(function(d){
        //criando linha (tr)
        let linha = listaDespesas.insertRow()

        //criar colonas (td)

        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        //tratar tipo
        switch(parseInt(d.tipo)){
            case 1: d.tipo = 'Alimentação'
                break
            case 2: d.tipo = 'Educação'
                break
            case 3: d.tipo = 'Lazer'
                break
            case 4: d.tipo = 'Saúde'
                break
            case 5: d.tipo = 'Transporte'
                break
            case 6: d.tipo = 'Outros'
                break
        }
        linha.insertCell(1).innerHTML = d.tipo


        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = `$ ${d.valor}`

        //botão de excluir
        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="far fa-trash-alt"></i>'
        btn.id = `id_despesa${d.id}`
        btn.onclick =function(){
            let id = this.id.replace('id_despesa', '')
            bd.remover(id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)
    })    
}
function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesas(ano, mes, dia, tipo, descricao, valor)
    
    let despesas = bd.pesquisar(despesa)

    carregarListaDespesa(despesas, true)
}
//atualizar com CTRL+F5 seta o cach