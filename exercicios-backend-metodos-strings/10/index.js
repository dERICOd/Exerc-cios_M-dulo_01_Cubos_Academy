const nomeArquivo = 'Foto da Familia.jpg';
function validarArquivo(nomeArquivo) {
    const extensao = nomeArquivo.substring(nomeArquivo.lastIndexOf(".") + 1);
  
    const extençoesPermitidas = ["jpg", "jpeg", "gif", "png"];
    if (extençoesPermitidas.includes(extensao)) {
      return true;
    } else {
      return false;
    }
  }
  
  const arquivoValido = validarArquivo(nomeArquivo);
  
  console.log(arquivoValido);