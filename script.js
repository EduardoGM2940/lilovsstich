// Selección de elementos
const backgroundMusic = document.getElementById('background-music');
const toggleSoundButton = document.getElementById('toggle-sound');

// Reproducción automática y control del botón
window.addEventListener('load', () => {
    backgroundMusic.play().catch((error) => {
        console.log("La reproducción automática fue bloqueada:", error);
    });
    toggleSoundButton.textContent = 'Silenciar';
});

// Alternar sonido
toggleSoundButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleSoundButton.textContent = 'Silenciar';
    } else {
        backgroundMusic.pause();
        toggleSoundButton.textContent = 'Activar Sonido';
    }
});
