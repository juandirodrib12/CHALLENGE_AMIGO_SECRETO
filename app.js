// Lista para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('nombreAmigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    input.value = '';
}

// Función para mostrar la lista de nombres
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}