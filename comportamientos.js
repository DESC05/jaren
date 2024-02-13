document.addEventListener('DOMContentLoaded', function () {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const resultMessage = document.getElementById('result-message');
    const buttonsContainer = document.getElementById('options');
  
    yesButton.addEventListener('click', function () {
      // Detener el movimiento del botón "No"
      noButton.style.transition = 'none';
      clearInterval(noButton.moveInterval);
  
      // Cambiar el mensaje y mostrar un emoji de corazón
      showResult('¡Te quiero mucho Mai lov! ❤️');
  
      // Mostrar corazones flotantes
      showFloatingHearts();
    });
  
    noButton.addEventListener('click', function () {
      // Cambiar la posición del botón "No" dentro del contenedor constantemente
      moveButtonRandomly(noButton, buttonsContainer);
  
      // Mostrar el mensaje específico para el botón "No"
      showResult('Buen intento, pero solo aceptaré un "Sí" por respuesta. ❤️');
    });
  
    function showResult(message) {
      resultMessage.innerHTML = message;
      resultMessage.style.display = 'block';
    }
  
    function moveButtonRandomly(button, container) {
      const containerRect = container.getBoundingClientRect();
      const newPositionX = Math.random() * (containerRect.width - button.offsetWidth);
      const newPositionY = Math.random() * (containerRect.height - button.offsetHeight);
  
      // Agregar animación de movimiento
      button.style.transition = 'transform 0.5s ease-in-out';
      button.style.transform = `translate(${newPositionX}px, ${newPositionY}px)`;
  
      // Reiniciar la posición después de la animación
      setTimeout(() => {
        button.style.transition = 'none';
        button.style.transform = 'translate(0, 0)';
      }, 500);
    }
  
    function showFloatingHearts() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      document.body.appendChild(heart);
  
      // Animación de corazones flotantes
      setTimeout(() => {
        heart.style.top = '-100px';
        heart.style.opacity = '0';
      }, 1000);
  
      // Eliminar el corazón después de la animación
      setTimeout(() => {
        document.body.removeChild(heart);
      }, 1500);
    }
  });
  