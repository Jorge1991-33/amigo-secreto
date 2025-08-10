let amigos = [];

function agregarAmigo() {
    // Tomo el nombre del input y le quito espacios extra.
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    // Reviso que no esté vacío.
    if (nombre === '') {
        alert('Escribe un nombre válido.');
        return;
    }

    // Reviso que no esté repetido.
    if (amigos.includes(nombre)) {
        alert('Intenta con otro nombre.');
        nombreInput.value = '';
        return;
    }

    // Si todo está bien, lo agrego a la lista.
    amigos.push(nombre);

    // Muestro la lista actualizada en la pantalla.
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.textContent = `Amigos agregados: ${amigos.join(', ')}`;

    // Limpio el input para el siguiente nombre.
    nombreInput.value = '';
    nombreInput.focus();
}

function sortearAmigo() {
    // Necesito al menos 2 personas para que el sorteo tenga sentido.
    if (amigos.length < 2) {
        alert('Agrega por lo menos a dos amigos para poder sortear.');
        return;
    }

    // Genero un número al azar basado en la cantidad de amigos.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Con ese número, elijo a un amigo al azar de la lista.
    const amigoSecreto = amigos[indiceAleatorio];

    // Muestro el resultado en la pantalla.
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El amigo secreto es: ${amigoSecreto}`;
}
