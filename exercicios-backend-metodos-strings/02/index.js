const cpf = '12345678900'
const cnpj = '12345678900'

if (cpf.length === 11) {
  let tresNumeros = cpf.slice(0, 3)
  let seisNumeros = cpf.slice(3, 6)
  let noveNumeros = cpf.slice(6, 9)
  let ultimosNumeros = cpf.slice(9)
  let novoCpf = tresNumeros + '.' + seisNumeros + '.' + noveNumeros + '-' + ultimosNumeros

  console.log(novoCpf)
}else {
  console.log('CPF Inválido')
}

if (cnpj.length === 14) {
    let primeroPar = cnpj.slice(0, 2) + '.'
    let primeroTrio = cnpj.slice(2, 5) + '.'
    let segundoTrio = cnpj.slice(5, 8) + '/'
    let primeroQuarteto = cnpj.slice(8, 12) + '-'
    let segundoPar = cnpj.slice(12)
    let cnpjCorrigido = primeroPar + primeroTrio + segundoTrio + primeroQuarteto + segundoPar
  
    console.log(cnpjCorrigido)
  }else {
    console.log('CNPJ Inválido')
  }