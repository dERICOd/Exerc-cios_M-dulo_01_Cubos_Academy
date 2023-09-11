const letras = ['A', 'a', 'B', 'C', 'E', 'e', 'e']

let contador = 0
for (let letraE of letras) {
  if (letraE === 'E' || letraE === 'e') {
    contador++
  }
}
if (contador > 0) {
  console.log(`${contador} letra "E" ou "e" foi encontrada.`)
}else {
  console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
}
