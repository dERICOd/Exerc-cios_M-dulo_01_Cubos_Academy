const nomes = ['Ana', 'Joana', 'Carlos', 'amanda']
const nomeComA = []

for (let nome of nomes) {
  if (nome[0] === 'A' || nome[0] === 'a') {
    nomeComA.push(nome)
  }
}

console.log(nomeComA)
