const original = [2, 4, 16, 21, 52, 84, 112]

for (let array = 0; array < original.length; array++) {
  let par = original[array]

  if (par % 2 === 0) {
    console.log(par)
  }
}
