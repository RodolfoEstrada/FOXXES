// Espera a que el documento cargue y asigna el evento a los enlaces del menú
document.addEventListener('DOMContentLoaded', () => {
  const enlaces = document.querySelectorAll('.navlinks a');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function () {
      // 1. Quita la clase 'active' de todos (desaparece la línea roja de los demás)
      enlaces.forEach(item => item.classList.remove('active'));
      
      // 2. Agrega 'active' únicamente al botón presionado
      this.classList.add('active');
    });
  });
});