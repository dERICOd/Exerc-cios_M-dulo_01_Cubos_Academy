const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva']

// const resultadoInversao = frutas.reverse()
// const resultadoFinal = resultadoInversao.join(', ')
// console.log(resultadoFinal)

const frutasSemPrimeira = frutas.shift(0, 1)

const frutasSemSegunda = frutas.splice(frutas.length - 1, 1)

const furtasAdicionada = frutas.splice(frutas.length, 0, 'Melão')
console.log(frutas)
