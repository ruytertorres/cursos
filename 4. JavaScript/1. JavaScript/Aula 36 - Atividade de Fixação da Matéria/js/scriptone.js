// Atividade de Fixação da Matéria
/*
var compras = Array()

compras[1] = 'Arroz'
compras[2] = 'Feijão'
compras[3] = 'Suco'

function coletarDados(){

    var dados = document.getElementById('coleta').value

    dados.trim()

    return dados
}


function processarDados(){

    var dados = coletarDados()
    
    if(dados === ''){
    alert('Informe um valor valido')
    } if(dados === compras[1] || dados === compras[2] || dados === compras[3]){

        alert('Item Já Adicionado')

    } if(dados != compras){
            
            compras.push(dados)
    }
}

function ordenandoLista(a, b){

    var calc = a - b

    if(calc = calc){
        document.getElementById('coleta').value = ""
    }

return a - b
}

console.log(compras)

console.log(compras.sort(ordenandoLista))

*/

// Errei :(
    // correção

    var compras = Array()

    compras[1] = 'Arroz'
    compras[2] = 'Feijão'
    compras[3] = 'Suco'

    function adicionarObjetos() { 

      //recupera o valor inserido no campo id objeto 
      var objeto = document.getElementById('objeto').value 
               //caso possua algum valor preenchido entra no if 
      if(objeto != '') { 

        //verifica se o valor já não foi inserido anteriormente 
        //se sim, informa que valor já existe, se não insere novo valor 
        if( compras.indexOf(objeto) !== -1) { 
          alert('Objeto já foi adicionado') 

        } else { 

          compras.push(objeto) 
          console.log(compras) 
           
          document.getElementById('objeto').value = '' 

        } 
         
      } else { 
        alert('Informe um objeto válido') 
         
      } 
    } 

    function ordenarObjetos() { 
      compras.sort() 
      console.log(compras) 
    }