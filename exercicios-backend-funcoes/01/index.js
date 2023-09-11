const prova = {
  aluno: 'João',
  materia: 'Português',
  valor: 10,
  questoes: [
    {
      resposta: 'a',
      correta: 'b'
    },
    {
      resposta: 'c',
      correta: 'c'
    },
    {
      resposta: 'e',
      correta: 'b'
    },
    {
      resposta: 'b',
      correta: 'b'
    },
    {
      resposta: 'c',
      correta: 'c'
    }
  ]
}

let qtdAcerto = 0
let nota = 0
let notaQestao = (prova.valor / prova.questoes.length)

function corrigirProva (prova) {
  for (let avaliacao of prova.questoes) {
    if (avaliacao.resposta === avaliacao.correta) {
      qtdAcerto++
    }
  }
  return qtdAcerto
}
corrigirProva(prova)
console.log(`O aluno(a) ${prova.aluno} acertou ${qtdAcerto} questões e obteve nota ${qtdAcerto * notaQestao}`)
