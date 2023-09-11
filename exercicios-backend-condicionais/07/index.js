const aposentada = false
const portadoraDeDoenca = false
const totalDeRendimentos = 1_000_000 // emCentavos

// seu código aqui
const totalDeRendimentosReais = totalDeRendimentos / 100

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA")
}else if (totalDeRendimentosReais < 28_558.70) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
}else {
    console.log("PEGA LEAO")
}