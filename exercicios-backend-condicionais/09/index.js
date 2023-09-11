const nota = 0

if (nota <= 10 && nota >= 9) {
  console.log('O estudando obteve conceito A')
}else if (nota <= 8.9 && nota >= 8) {
  console.log('O estudando obteve conceito B')
}else if (nota <= 7.9 && nota >= 6) {
  console.log('O estudando obteve conceito C')
}else if (nota <= 5.9 && nota >= 4) {
  console.log('O estudando obteve conceito D')
}else if (nota <= 3.9 && nota >= 0) {
  console.log('O estudando obteve conceito E')
}else if (nota >= 10 || nota < 0) {
  console.log('Nota invalida, insira novamente!')
}
