// valor do produto comprado.
const valorDoProduto = 200000
const valorReais = valorDoProduto / 100

// quantidade de parcelas
const quantidadeDoParcelamento = 10

// valor pago
const valorPago = 400

const valorFalta = valorReais - valorPago

const valorParcelas = valorReais / quantidadeDoParcelamento

const parcelaFalta = valorFalta / valorParcelas

console.log(`Restam ${parcelaFalta} parcelas de R$${valorParcelas}`)
