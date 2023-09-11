const jogada2 = 'pedra'
const jogada1 = 'papel'

// seu código aqui
if (jogada1 === 'pedra' && jogada2 === 'tesoura' || jogada2 === 'pedra' && jogada1 === 'tesoura') {
  console.log('Pedra vence!')
}else if (jogada1 === 'papel' && jogada2 === 'tesoura' || jogada2 === 'papel' && jogada1 === 'tesoura') {
  console.log('Tesoura vence!')
}else if (jogada1 === 'papel' && jogada2 === 'pedra' || jogada2 === 'papel' && jogada1 === 'pedra') {
  console.log('Papel vence!')
}else {
  console.log('Jogue novamente deu empate!')
}
