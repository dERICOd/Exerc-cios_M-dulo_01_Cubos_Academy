const arrayA = [5, 32, 3, 44, 1]
const arrayB = [57, 4, 21, 2, 13]

const numeroMenorAB = []

for (let buscaA = 0; buscaA < arrayA.length; buscaA++) {
  if (arrayA[buscaA] < arrayB[buscaA]) {
    numeroMenorAB.push(arrayA[buscaA])
  }else {
    numeroMenorAB.push(arrayB[buscaA])
  }
}

console.log(numeroMenorAB)
