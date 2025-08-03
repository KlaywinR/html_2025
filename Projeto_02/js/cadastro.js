  function validarSenha() {
      const senha = document.getElementById("senha").value;
      const confirma = document.getElementById("confirmaSenha").value;
      if (senha !== confirma) {
        alert("As senhas não coincidem!");
        return false;
      }
      return true;
    }