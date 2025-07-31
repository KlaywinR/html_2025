function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  if (!email || !senha || !confirmar) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Usuário cadastrado com sucesso!");
}
