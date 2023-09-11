const numeros = [54, 22, 14, 87, 11, 30, 18, 17, 284]

let tem = false
let contador = 0

for (let array = 0; array !== numeros.length; array++) {
  contador++

  if (numeros[array] === 5) {
    tem = true
    console.log(contador - 1)
  }
}

if (tem === false) {
  console.log('-1')
}
