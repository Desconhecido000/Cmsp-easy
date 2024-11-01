document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const ra = document.getElementById('ra').value;
    const digito = document.getElementById('digito').value;
    const uf = document.getElementById('uf').value;
    const senha = document.getElementById('senha').value;

    document.getElementById('message').innerText = "Logando na conta...";

    // Simulação de logar e buscar tarefas
    setTimeout(() => {
        document.getElementById('message').innerText = "Buscando tarefas...";
    }, 2000);

    setTimeout(() => {
        document.getElementById('message').innerText = "Realizando tarefas...";
    }, 4000);

    setTimeout(() => {
        document.getElementById('message').innerText = "Tarefas finalizadas!";
    }, 6000);
});

document.getElementById('pendingTasks').addEventListener('click', function() {
    document.getElementById('message').innerText = "Realizando Tarefas Pendentes...";
});

document.getElementById('expiredTasks').addEventListener('click', function() {
    document.getElementById('message').innerText = "Realizando Tarefas Expiradas...";
});
