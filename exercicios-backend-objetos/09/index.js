const participantes = [
  { nome: 'João' },
  { nome: 'Ana' },
  { nome: 'Beatriz' },
  { nome: 'Maria' },
  { nome: 'Ana Clara' },
  { nome: 'Joana' },
  { nome: 'Augusto' },
  { nome: 'Renan' },
  { nome: 'Patricia' },
  { nome: 'Renato' },
  { nome: 'José' },
  { nome: 'Roberto' },
  { nome: 'Sara' },
  { nome: 'Junior' },
  { nome: 'Pedro' },
  { nome: 'Carlos' },
  { nome: 'Vitor' },
  { nome: 'Antonio' }
]
let local = 0
let achou = false

for (let convidado of participantes) {
  local++
  if (convidado.nome === 'Carlos') {
    achou = true
    break
  }
}
if (achou) {
  console.log(`Galera... O Carlos está na posição ${local}, corre lá!.`)
}
