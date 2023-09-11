const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana']

function ordemDeChegada (pacientes, procedimento, nomePaciente) {
  if (procedimento === 'agendar') {
    pacientes.splice(pacientes.length, 0, nomePaciente)
    console.log(pacientes)
  }if (procedimento === 'atender') {
    pacientes.splice(0, 1)
    console.log(pacientes)
  }
}

ordemDeChegada(pacientes, 'agendar', 'Mario')
