// Funcões nativas de data

var data = new Date()

document.write(data)

document.write('<br>')

// Funcão getDate, getMonth, getHours, getSeconds etc..

document.write(data.getHours() + ':' + (data.getMinutes())+ ':' + (data.getSeconds())+ '.' + (data.getMilliseconds()) + ' - ' + (data.getDate()) + '/' + (data.getMonth() + 1) + '/' + (data.getFullYear()))

document.write('<br>')

// os metodos iniciados em get, recuperas as datas do S.O, o recursos iniciados em set cria datas para fim de calculos, como em cronometro por exempo, onde não precisa nessessariamente da data do S.O
