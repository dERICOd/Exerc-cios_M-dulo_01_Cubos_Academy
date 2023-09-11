const numeros = [3, 4, 16, 8, 13, 7, 5, 10]

let soma = 0
for (let array = 0; array < numeros.length; array++) {
  if (numeros[array] % 2 === 0) {
    soma = soma + numeros[array]
  }
}
console.log(soma)
