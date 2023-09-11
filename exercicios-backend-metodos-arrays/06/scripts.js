const usuarios = [
  {
    nome: 'João',
    pets: ['Max']
  },
  {
    nome: 'Ana',
    pets: ['Pingo', 'Lulu']
  },
  {
    nome: 'Beatriz',
    pets: ['Lessie']
  },
  {
    nome: 'Carlos',
    pets: ['Farofa', 'Salsicha', 'Batata']
  },
  {
    nome: 'Antonio',
    pets: ['Naninha']
  }

]

function buscaDono (usuarios, pet) {
  let encontrado = false

  for (let pessoa of usuarios) {

    for (let animal of pessoa.pets) {
      if (animal === pet) {
        console.log(`O dono(a) do(a) ${animal} é o(a) ${pessoa.nome}.`)
        encontrado = true
      }
    }
  }
  if (encontrado === false) {
    console.log(`Que pena ${pet}, não encontramos seu dono(a)`)
  }
}
buscaDono(usuarios, 'Lessie')
