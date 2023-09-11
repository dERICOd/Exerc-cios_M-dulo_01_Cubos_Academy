let valorFinal;
let valorInicial = 1000.00;
let taxaJurosAnual = 0.06;
let tempoAno = 1;

valorFinal = valorInicial * (1 + taxaJurosAnual) ** tempoAno;
console.log(valorFinal.toFixed(2));