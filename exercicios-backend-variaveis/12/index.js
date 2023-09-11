let montanteAPagar = 90_000;
let valorInicial = 60_000;
let qtdMeses = 24;
let taxaJuros;


taxaJuros = ((montanteAPagar / valorInicial) ** (1 / qtdMeses)) - 1;
taxaJuros *= 100;
taxaJuros = taxaJuros.toFixed(3)

console.log(`O seu financiamento de ${valorInicial} reais teve uma taxa de juros de ${taxaJuros}%, pois após ${qtdMeses} meses você teve que pagar ${montanteAPagar} reais`);

