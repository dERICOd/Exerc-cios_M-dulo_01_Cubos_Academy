const nome = 'Guido Cerqueira'
function gerarNickname (nome) {
  nome = nome.replace(' ', '')

  nome = nome.toLowerCase()

  nome = '@' + nome

  nome = nome.substring(0, 13)

  return nome
}

const nickname = gerarNickname(nome)

console.log(nickname)
