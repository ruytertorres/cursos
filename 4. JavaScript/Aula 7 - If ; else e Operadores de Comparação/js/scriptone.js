// IF/ELSE e operadores de comparação
/*
if (2 < 7) {
    document.write('entrou dentro do bloco if (verdadeiro)')
} else {
    document.write('entrou dentro do bloco if (false)')
}
*/
// else {} - é opcional

var nota = prompt('Digite a nota do aluno:')
var media = 7

if (nota >= media) {
    document.write('<div class="btn btn-info">Parabens, você foi <strong>Aprovado(a)</strong>!!!</div>')
} else {
    document.write('<div class="btn btn-danger">Lamentamos mas foi <strong>Reprovado(a)</strong>, mais sorte na proxima!</div>')
}