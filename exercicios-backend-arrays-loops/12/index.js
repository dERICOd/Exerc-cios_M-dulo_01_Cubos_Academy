const filaDeDentro = ['Jose', 'Maria', 'Joao']
const filaDeFora = ['Joana', 'Roberta', 'Marcos', 'Felipe']

for (let verificacao of filaDeDentro) {
  if (filaDeDentro.length < 5) {
    const retirar = filaDeFora.shift()
    const mover = filaDeDentro.push(retirar)
  }
}
console.log(filaDeDentro)
console.log(filaDeFora)
