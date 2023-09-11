const comentario = 'Esse COVID é muito perigoso!'
if (comentario.indexOf('COVID') >= 0 || comentario.indexOf('PANDEMIA') >= 0) {
  console.log('Comentário bloqueado por conter palavras proibidas')
}else{
    console.log('Comentário autorizado');
}
