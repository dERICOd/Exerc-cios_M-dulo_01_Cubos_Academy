// renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 10

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000

if ((rendaMensalEmCentavos / 100) >= 2_000 && (totalJaPagoPeloAluno / 100) < 18_000 && mesesDecorridos <= 60) { 
const valorParcela = (rendaMensalEmCentavos / 100) * 18/100
 console.log(`O valor da parcela desse mês é R$${valorParcela}`)
}else if ((rendaMensalEmCentavos / 100) < 2_000) { 
    const valorParcela = 0
console.log(`O valor da parcela desse mês é R$${valorParcela} reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
}else if ((totalJaPagoPeloAluno / 100) >= 18_000){
    const valorParcela = 0
    console.log(`O valor da parcela desse mês é R$${valorParcela} reais. Nenhum valor é devido pois já foi pago o valor total do curso de R$ 18.000,00 reais.`)
}else{
    const valorParcela = 0
    console.log(`O valor da parcela desse mês é R$${valorParcela} reais. Nenhum valor é devido pois já chegou o praso maximo de 60 meses.`)
}
