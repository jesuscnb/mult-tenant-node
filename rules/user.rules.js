exports.validar = async (entidade) => {

  let erros = [];
  let valido = true;

  if (!entidade.nome) {
    erros.push("Obrigátorio informar o nome !");
  }

  if (!entidade.idade) {
    erros.push("Obrigátorio informar a idade !");
  }

  if (erros.length > 0) {
    valido = false;
  }

  return {
    valido: valido,
    erros: erros
  }

}

