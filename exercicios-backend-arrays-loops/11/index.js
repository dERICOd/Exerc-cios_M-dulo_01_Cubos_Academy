const original = [5, 7, 13, 17, 26, 34, 118, 245]
const novaLista = []

for (let array of original) {

  if (array >= 10 && array <= 20 || array > 100) {
    novaLista.push(array)
  }
}
console.log(novaLista)
