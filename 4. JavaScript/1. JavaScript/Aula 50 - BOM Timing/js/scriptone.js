// BOM



//consultar documentação w3School
var i = 5
// setTimeout(function(){document.write('Hello World!')},2000) // seta a pagina após xms
/*setInterval( // seta a pagina em periodos 
    function(){document.write(i + ' '); 
    i--;
    if(i === 0){
        window.location.reload() // recarrega a paina
    }
},1000)
*/

var x = setInterval(
    function(){document.write(i + ' '); 
    i--;
    if(i === 0){
        clearInterval(x) // limpa a variavel
    }
},1000)