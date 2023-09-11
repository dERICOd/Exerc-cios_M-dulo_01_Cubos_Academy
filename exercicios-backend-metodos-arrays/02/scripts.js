const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego']
const tamanhoDoGrupo = 4

function grupos (nomes, tamanhoDoGrupo) {
  const grupo1 = nomes.slice(0, tamanhoDoGrupo)
  const grupo1Atual = grupo1.join(', ')
  const grupo2 = nomes.slice(tamanhoDoGrupo)
  const grupo2Atual = grupo2.join(', ')

  console.log(`Grupo 1: ${grupo1Atual}.`)
  console.log(`Grupo 2: ${grupo2Atual}.`)
}
grupos(nomes, tamanhoDoGrupo)
