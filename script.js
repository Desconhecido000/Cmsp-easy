document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores dos campos de login
    const ra = document.getElementById('ra').value;
    const digito = document.getElementById('digito').value;
    const uf = document.getElementById('uf').value;
    const senha = document.getElementById('senha').value;

    // Simulação de verificação de login
    if (ra && digito && uf && senha) {
        // Redireciona para a página de tarefas
        window.location.href = 'tarefas.html';
    } else {
        document.getElementById('message').innerText = "Por favor, preencha todos os campos.";
    }
});
