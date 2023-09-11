// criar 1 objeto
// com 6 membros
// 2 propriedades , ligado (boolean) e velocidade(number)
// 4 metodos

const carro = {
  ligado: false,
  velocidade: 0,
  ligar: function carroLigar () {
    if (carro.ligado) {
      console.log('Este carro já está ligado.')
    }else {
      carro.ligado = true
      console.log(`Carro ligado. Velocidade: ${carro.velocidade}`)
    }
  },
  desligar: function carroDesligar () {
    if (!carro.ligado) {
      console.log('Este carro já está desligado.')
    }else {
      carro.ligado = false
      carro.velocidade = 0
      console.log(`Carro desligado. Velocidade: ${carro.velocidade}.`)
    }
  },

  acelerar: function carroAcelerar () {
    if (!carro.ligado) {
      console.log('Não é possível acelerar um carro desligado.')
    }else {
      carro.velocidade += 10
      console.log(`Carro ligado. Velocidade: ${carro.velocidade}`)
    }
  },

  desacelerar: function carroDesacelerar () {
    if (!carro.ligado) {
      console.log('Não é possível desacelerar um carro desligado.')
    }else {
      carro.velocidade -= 10
      console.log(`Carro ligado. Velocidade: ${carro.velocidade}`)
    }
  }
}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()
