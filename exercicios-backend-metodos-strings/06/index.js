const celular = '7199918888'
const celularFormatado = formatarCelular(celular)

function formatarCelular (celular) {
  const ddd = celular.substring(0, 2)
  const numero = celular.substring(2, 6)
  const finalNumero = celular.substring(6, 10)
  const semDdd = celular.substring(0, 4)
  const finalSemDdd = celular.substring(4)

  if (celular.length === 10) {
    return `(${ddd}) 9 ${numero}-${finalNumero}`
  } else {
    return `9 ${semDdd}-${finalSemDdd}`
  }
}

console.log(celularFormatado)
