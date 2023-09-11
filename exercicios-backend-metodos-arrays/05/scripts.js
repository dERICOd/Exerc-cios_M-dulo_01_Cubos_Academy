const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana']

function agendarPaciente (pacientes, nomePaciente) {
  pacientes.splice(pacientes.length, 0, nomePaciente)
  const listaParaAgendar = pacientes.join(', ')

  console.log('Lista de pacientes agendados:')
  console.log(`${listaParaAgendar}`)
}

agendarPaciente(pacientes, 'mario')

function atenderPaciente (pacientes) {
  pacientes.splice(0, 1)
  const listaParaAtender = pacientes.join(', ')

  console.log('Lista de pacientes agendados:')
  console.log(`${listaParaAtender}`)
}

atenderPaciente(pacientes)

function cancelarAtendimento (pacientes, nomePaciente) {
  const cancelarPaciente = pacientes.indexOf(nomePaciente)
  pacientes.splice(cancelarPaciente, 1)
  const listaCancelamento = pacientes.join(', ')

  console.log('Lista de pacientes agendados:')
  console.log(`${listaCancelamento}`)
}

cancelarAtendimento(pacientes, 'Maria')
