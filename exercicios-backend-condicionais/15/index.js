const primeiroNome = 'Mario'
const sobrenome = 'Bros'
const apelido = ''

if (apelido !== '') {
  console.log(apelido)
}else if (apelido === '' && primeiroNome !== ' ' && sobrenome === '') {
  console.log(primeiroNome)
}else if (apelido === '' && primeiroNome !== '' && sobrenome !== '') {
  console.log(primeiroNome + ' ' + sobrenome)
}
