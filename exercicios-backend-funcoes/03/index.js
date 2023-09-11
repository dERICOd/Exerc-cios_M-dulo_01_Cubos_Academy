const carrinho = {
  nomeDoCliente: 'Guido Bernal',
  produtos: [
    {
      id: 1,
      nome: 'Camisa',
      qtd: 3,
      precoUnit: 3000
    },
    {
      id: 2,
      nome: 'Bermuda',
      qtd: 2,
      precoUnit: 5000

    }
  ],
  imprimirResumo: function () {
    let somaItens = 0
    let totalAPagar = 0

    for (let item of this.produtos) {
      somaItens = somaItens + item.qtd
      totalAPagar = totalAPagar + ((item.precoUnit / 100) * item.qtd)
    }

    console.log(`Cliente: ${this.nomeDoCliente}`)
    console.log(`Total de itens: ${somaItens} itens`)
    console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`)
  }

}
const novaBermuda = {
  id: 2,
  nome: 'Bermuda',
  qtd: 3,
  precoUnit: 5000
}

const novoTenis = {
  id: 3,
  nome: 'Tenis',
  qtd: 1,
  precoUnit: 10000
}

// ////////////////////////////////////////////////////////
function addProdutoAoCarrinho (carrinho, produto) {
  let encontrado = false

  for (let item = 0; item < carrinho.produtos.length; item++) {
    if (carrinho.produtos[item].id === produto.id) {
      carrinho.produtos[item].qtd = carrinho.produtos[item].qtd + produto.qtd
      encontrado = true
    }
  }
  if (encontrado === false) {
    carrinho.produtos.push(produto)
  }
}

addProdutoAoCarrinho(carrinho, novaBermuda)
addProdutoAoCarrinho(carrinho, novoTenis)
carrinho.imprimirResumo()
