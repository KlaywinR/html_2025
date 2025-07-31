document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede envio padrão do formulário

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!email || !senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Validação de email simples
    if (!email.includes('@') || !email.includes('.')) {
      alert('Email inválido!');
      return;
    }

    // Simular login com sucesso
    alert('Login realizado com sucesso!');
    window.location.href = "dashboard.html"; // redireciona para outra página
  });
});
