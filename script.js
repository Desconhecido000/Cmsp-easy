document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores dos campos de login
    const ra = document.getElementById('ra').value;
    const digito = document.getElementById('digito').value;
    const uf = document.getElementById('uf').value;
    const senha = document.getElementById('senha').value;

    // Verifica se todos os campos estão preenchidos
    if (ra && digito && uf && senha) {
        document.getElementById('message').innerText = "Logando na conta...";

        // Redireciona para a página de tarefas após uma pequena espera
        setTimeout(() => {
            window.location.href = 'tarefas.html';
        }, 2000);
    } else {
        document.getElementById('message').innerText = "Por favor, preencha todos os campos.";
    }
});
