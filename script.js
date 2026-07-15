function iniciarExperiencia() {
    // 1. Reproducir el audio de fondo
    const musica = document.getElementById('musica-fondo');
    musica.play().catch(error => {
        console.log("La reproducción automática fue prevenida por el navegador. Se necesita interacción.");
    });

    // 2. Ocultar la pantalla de inicio con el corazón
    const pantallaInicio = document.getElementById('pantalla-inicio');
    pantallaInicio.style.display = 'none';

    // 3. Mostrar el contenido de la historia
    const contenido = document.getElementById('contenido-historia');
    contenido.classList.remove('oculto');
}