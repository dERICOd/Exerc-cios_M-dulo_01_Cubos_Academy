// tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = 'dinheiro'

// valor da mercadoria (centavos)
const valorDoProduto = 99

if (tipoDePagamento === 'credito') {
  const valorComDesconto = (valorDoProduto - (valorDoProduto * 5 / 100)).toFixed(2)
  console.log(`O valor a ser pago: R$${valorComDesconto}`)
} else if (tipoDePagamento === 'cheque') {
  const valorComDesconto = (valorDoProduto - (valorDoProduto * 3 / 100)).toFixed(2)
  console.log(`O valor a ser pago: R$${valorComDesconto}`)
}else if (tipoDePagamento === 'debito' || tipoDePagamento === 'dinheiro') {
  const valorComDesconto = (valorDoProduto - (valorDoProduto * 10 / 100)).toFixed(2)
  console.log(`O valor a ser pago: R$${valorComDesconto}`)
}
