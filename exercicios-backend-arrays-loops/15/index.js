const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = []
const impares = []

// for (let busca = 0; busca < original.length; busca++) {
//   if (original[busca] % 2 === 0) {
//     pares.push(original[busca])
//   }else {
//     impares.push(original[busca])
//   }
// }
// console.log(pares)
// console.log(impares)

// ////////////////////////    while     ///////////////////////////////////////////////////

let verificar = 0

while(verificar < original.length){
  if (original[verificar] % 2 === 0) {
    pares.push(original[verificar])
  }else {
    impares.push(original[verificar])
  }
  verificar++
}
console.log(pares)
console.log(impares)
