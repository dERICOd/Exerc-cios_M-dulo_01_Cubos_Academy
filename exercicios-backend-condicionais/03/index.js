const ladoA = 3
const ladoB = 3

// seu código aqui
if (ladoA < 0 || ladoA > 6 || ladoB < 0 || ladoB > 6) {
  console.log('Pedra invalida, jogue novamente!')
}else if (ladoA === ladoB) {
  console.log('SIM')
}else {
  console.log('NÃO')
}
