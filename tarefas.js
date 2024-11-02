document.getElementById('pendingTasks').addEventListener('click', function() {
    document.getElementById('message').innerText = "Buscando tarefas pendentes...";
    setTimeout(() => {
        document.getElementById('message').innerText = "Realizando tarefas pendentes...";
    }, 2000);

    setTimeout(() => {
        document.getElementById('message').innerText = "Tarefas pendentes finalizadas!";
    }, 4000);
});

document.getElementById('expiredTasks').addEventListener('click', function() {
    document.getElementById('message').innerText = "Buscando tarefas expiradas...";
    setTimeout(() => {
        document.getElementById('message').innerText = "Realizando tarefas expiradas...";
    }, 2000);

    setTimeout(() => {
        document.getElementById('message').innerText = "Tarefas expiradas finalizadas!";
    }, 4000);
});
