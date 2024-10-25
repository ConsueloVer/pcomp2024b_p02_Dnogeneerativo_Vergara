const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Alterna entre el modo oscuro y claro
    body.classList.toggle('dark-mode');
});

<script>
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        // Cambia la clase "dark-mode" en el body para alternar entre los modos
        body.classList.toggle('dark-mode');
    });
</script>