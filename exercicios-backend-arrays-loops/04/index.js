let multiplo = -3
let parada = 500
for (let n = 0; n < parada; n++) {
  multiplo = multiplo + 3

  while(multiplo < 500) {
    console.log(multiplo)
    break
  }
}
