const cpf = '011.022.033-44'
function tirarPontuacao (numero) {
  return numero.replace(/\.|\-/g, '')
}

const cpfCorrigido = tirarPontuacao(cpf)

console.log(cpfCorrigido)
