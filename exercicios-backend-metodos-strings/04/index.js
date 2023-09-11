let identificador = '123'
let nome = 'José silva costa'
let email = '      jose@email.com  '

function formataId (id) {
  const limiteCaracteres = 6
  const idStringAlterado = id.toString()

  const idAlterado = idStringAlterado.padStart(limiteCaracteres, '0')
  console.log(idAlterado)

  return idAlterado
}

function formataNome (nome) {
  const nomeString = nome.toString()
  const string = nomeString.split(' ')

  for (let item = 0; item < string.length; item++) {
    string[item] = string[item][0].toUpperCase() + string[item].substr(1)
  }

  const nomeReescrito = string.join(' ')

  return nomeReescrito
}

function formataEmail (email) {
  const emailString = email.toString()
  const emailFormatado = emailString.trim()

  return emailFormatado
}

function formataInputs (id, nome, email) {
  console.log({
    id: formataId(id),
    nome: formataNome(nome),
    email: formataEmail(email)
  })
}

formataInputs(identificador, nome, email)
