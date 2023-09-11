const texto = 'Aprenda programar do zero na Cubos Academy'
const arrayTexto = texto.split(' ')

// console.log(arrayTexto)

let urlCorrigida = ''
for (let item of arrayTexto) {
  urlCorrigida += item + '-'
}
let urlProta = urlCorrigida.slice(0, urlCorrigida.length - 1)

console.log(urlProta)
