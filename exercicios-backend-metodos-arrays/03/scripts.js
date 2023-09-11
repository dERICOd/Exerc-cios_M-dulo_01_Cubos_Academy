const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia']
const posicao = 3

function estacionamento (nomes, posicao) {
  const parada = posicao + 3
  const carroPosicao = nomes.slice(posicao, parada)
  const carrosEstacionados = carroPosicao.join(" - ")
  console.log(carrosEstacionados)
}
estacionamento(nomes, 3)
