// Switch
// O Switch sempre usa a comparação do tipo identico (===), ou seja, igual e do mesmo tipo

var par = 2 // variavel que será usada de parametro

switch (par) {       //comando de execução de parametro 
    case 1:  // cases que serão avaliados segundo o parametro
        document.write('Parâmetro 1') // conteudo do case

        break // finalização do case

    case 2:
        document.write('Parâmetro 2')
        break
    
    default:  // "se não", encontrado nos cases o default é exectado !Opcional! caso n seja pre definido default nenhuma ação é executada
        document.write('Default') // conteudo do default
}

document.write('<br><br>')

// ex 2

var par2 = prompt('Digite um número:')

switch (parseInt(par2)) { //Nesse exemplo  o parseInt trata o valor que como padrão no prompt é sempre uma string e atribui o valor de number
    case 1:
        document.write('Parâmetro 1')

        break // finalização do case

    case 2:
        document.write('Parâmetro 2')
        break
    
    default:
        document.write('Default')

}

document.write('<br><br>')

//Outro metodo é tratar os cases diretamente como string

var par3 = prompt('Digite um número:')

switch (par3) { //Nesse exemplo  o parseInt trata o valor que como padrão no prompt é sempre uma string e atribui o valor de number
    case '1':
        document.write('Parâmetro 1')

        break // finalização do case

    case '2':
        document.write('Parâmetro 2')
        break
    
    default:
        document.write('Default')

}