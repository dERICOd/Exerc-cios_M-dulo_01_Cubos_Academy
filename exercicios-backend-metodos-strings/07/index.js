const email = 'aluno@cubos.academy'
const emailValido = 'jose@cubos.academy'
const emailInvalido1 = 'jose@cubos'
const emailInvalido2 = 'jose.messias@cubos'
const emailInvalido3 = 'jose.messias@.'
const emailInvalido4 = 'jose.@cubos'
const emailInvalido5 = '.@'
const emailInvalido6 = '@.'
const emailInvalido7 = 'jose.messias@cubos.'
const emailInvalido8 = '.messias@cubos.'
const emailInvalido9 = '.messias@cubos'

function validarEmail (emailAValidar) {
  let valido = emailAValidar.slice(0, 1)
  let finalValido = emailAValidar.slice(emailAValidar.length - 1)
  let verificacaoValida
  let emailOk = false
  if (valido !== '.' && finalValido !== ('.')) {
    verificacaoValida = 'ok'
  }

  if (emailAValidar.includes('@') && emailAValidar.includes('.') && verificacaoValida === 'ok') {
    console.log('E-mail válido')
    emailOk = true
  }else {
    console.log('E-mail inválido')
  }
}

validarEmail(email)
validarEmail(emailValido)
validarEmail(emailInvalido1)
validarEmail(emailInvalido2)
validarEmail(emailInvalido3)
validarEmail(emailInvalido4)
validarEmail(emailInvalido5)
validarEmail(emailInvalido6)
validarEmail(emailInvalido7)
validarEmail(emailInvalido8)
validarEmail(emailInvalido9)
