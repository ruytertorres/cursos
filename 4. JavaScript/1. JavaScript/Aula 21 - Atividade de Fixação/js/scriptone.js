// Atividade de Fixação

/*function Somar_e_Subtrair(n1, sinal, n2){
    var operação= n1 + sinal + n2
    
    return soma
}*/

/*if (sinal === 'soma' || sinal === 'SOMA') {
    sinal = n1 + n2
} if (sinal === 'subtração' || sinal === 'SUBTRAÇÃO') {
    sinal = n1 - n2
} if (sinal != 'soma' || sinal != 'SOMA'){
    sinal = 'erro'
}*/  


var n1 = prompt('Digite um numero:')
var sinal = prompt('Digite SOMA ou SUBTRAI:')
var n2 = prompt('Digite outro numero:')

n1 = parseFloat(n1)
n2 = parseFloat(n2)

switch (sinal) {
    case 'soma':
        sinal = (n1+n2)
        break;

    case 'SOMA':
        sinal = (n1+n2)
        break;

    case 'Soma':
        sinal = (n1+n2)
        break;

    case 'subtrai':
        sinal = (n1-n2)
        break;

    case 'Subtrai':
        sinal = (n1-n2)
        break;

    case 'SUBTRAI':
        sinal = (n1-n2)
        break;

    default:
        sinal = ('Erro!!! A definição da operação foi caracterizada de forma inapropriada, precione F5.')
        break;
}

var resultado = sinal
document.write('O resultado é ' + resultado)

// Errei :'(

//correção
/*
    var num1 = prompt('Digite um número');
    var operacao = prompt('Digite a operação');
    var num2 = prompt('Digite outro número');
    
    function calc(num1, num2, operacao){
    
     num1 = parseFloat(num1);
     num2 = parseFloat(num2);
    
     var resultado = 0;
    
     if(operacao == 'soma'){
     resultado = num1 + num2;
     }
    
     if(operacao == 'subtracao'){
     resultado = num1 - num2;
     }
    
     return resultado;
    }
    
    document.write('O resultado é: ' + calc(num1, num2, operacao)); 
*/