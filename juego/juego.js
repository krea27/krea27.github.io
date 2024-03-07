// Inicializa la variable que controla la cantidad de participaciones restantes
let participacionesRestantes = 1;

// Contador para llevar el seguimiento de cuántos videos han sido detenidos
let videosDetenidos = 0;

// Indica si el resultado del juego ya ha sido mostrado
let resultadoMostrado = false;

// Función para iniciar el juego
function iniciarJuego() {
    // Verifica si aún hay participaciones disponibles
    if (participacionesRestantes > 0) {
        // Resta una participación y oculta el botón de inicio
        participacionesRestantes--;
        document.getElementById('btnPlay').style.display = 'none';

        // Inicia los videos
        iniciarVideos();
    } else {
        // Muestra una alerta si el usuario ya agotó sus participaciones
        alert("Ya has agotado tus participaciones.");
    }
}

// Función para iniciar la reproducción de los videos
function iniciarVideos() {
    // Obtiene los elementos de video
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');

    // Inicia la reproducción de los videos
    video1.play();
    video2.play();
    video3.play();

    // Oculta los controles de reproducción de los videos
    ocultarControlesVideo(video1);
    ocultarControlesVideo(video2);
    ocultarControlesVideo(video3);

    // Agrega eventos 'ended' a los videos para verificar coincidencias
    video1.addEventListener('ended', verificarCoincidencia);
    video2.addEventListener('ended', verificarCoincidencia);
    video3.addEventListener('ended', verificarCoincidencia);
}

// Función para ocultar los controles de reproducción de un video
function ocultarControlesVideo(video) {
    // Oculta los controles del video
    video.controls = false;

    // Añade un evento para evitar que aparezcan al pasar el ratón sobre el video
    video.addEventListener('mouseover', function () {
        this.controls = false;
    });
}

// Función para detener un video específico
function detenerVideo(numeroVideo) {
    // Obtiene el elemento de video correspondiente al número indicado
    const videoElement = document.getElementById(`video${numeroVideo}`);

    // Verifica si el video no está pausado
    if (!videoElement.paused) {
        // Pausa el video y aumenta el contador de videos detenidos
        videoElement.pause();
        videosDetenidos++;

        // Verifica si todos los videos han sido detenidos
        if (todosLosVideosDetenidos()) {
            // Realiza la verificación de coincidencia
            verificarCoincidencia();
        }
    }
}

// Función que verifica si todos los videos han sido detenidos
function todosLosVideosDetenidos() {
    return videosDetenidos === 3;
}

// Función para verificar si las imágenes de los videos coinciden
function verificarCoincidencia() {
    // Obtiene los elementos de video
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');

    // Verifica si las imágenes de los videos coinciden en tiempo
    if (video1.currentTime === video2.currentTime && video2.currentTime === video3.currentTime) {
        // Muestra un mensaje indicando que el usuario ganó
        mostrarResultado("¡Ganaste un producto! Envíanos por email el screenshot con el resultado ganador");
    } else {
        // Muestra un mensaje indicando que no coinciden las imágenes
        mostrarResultado("No coinciden las imágenes");
    }
}

// Función para mostrar el resultado del juego
function mostrarResultado(mensaje) {
    // Verifica si el resultado aún no ha sido mostrado
    if (!resultadoMostrado) {
        // Obtiene el elemento donde se mostrará el resultado y establece el mensaje
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = mensaje;

        // Marca que el resultado ya ha sido mostrado
        resultadoMostrado = true;
    }
}
