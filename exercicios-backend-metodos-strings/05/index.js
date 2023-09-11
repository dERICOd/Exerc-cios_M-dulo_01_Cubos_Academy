const numeroCartao = '1111222233334444'

function maskCardNumber (cartao) {
  let inicioCartao = cartao.slice(0, 4)
  let meioCartao = cartao.slice(4, 13)
  let meioCartaoEditado = meioCartao.replace(meioCartao, '***********')
  let finalCartao = cartao.slice(13)

  let maskedNumber = inicioCartao + meioCartaoEditado + finalCartao
  return maskedNumber
}

let numeroCartaoOculto = maskCardNumber(numeroCartao)

console.log(numeroCartaoOculto)
