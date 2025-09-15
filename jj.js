// Selecciona el elemento del título por su ID
const titulo = document.getElementById('typewriter-title');

// El texto que quieres que se "escriba"
const texto = "Analista de sistema y Desarrollador web  ";

// Velocidad de escritura en milisegundos
const velocidad = 75;

// Función para el efecto de máquina de escribir
function typeWriter(text, i, fnCallback) {
  // Chequea si todavía hay texto para mostrar
  if (i < text.length) {
    // Añade la siguiente letra al elemento
    titulo.innerHTML = text.substring(0, i + 1) + '|';
    // Llama a la función de nuevo con un pequeño retraso
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback);
    }, velocidad);
  } else if (typeof fnCallback == 'function') {
    // Si ya se escribió todo el texto, llama al callback (opcional)
    fnCallback();
  }
}

// Inicia el efecto cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
  typeWriter(texto, 0, function() {
    // Código opcional que se ejecuta al final
    console.log("¡Efecto de escritura completado!");
  });
});





//proseso 2: texto rotativo

// Array con los textos que deseas mostrar
const textos = [
    "Desarrollo de juegos con godot.",
    "Desarrollo de paguinas web.",
    "Conocimiento en redes y seguridad.",
    "Manejo de sql y bases de datos.",
];

// Selecciona el elemento por su ID
const elemento = document.getElementById('texto-rotativo');

// Variable para llevar la cuenta del índice del array
let indice = 0;

// Función para cambiar el texto
function cambiarTexto() {
    // Cambia el contenido del elemento al texto actual del array
    elemento.textContent = textos[indice];

    // Incrementa el índice para pasar al siguiente texto
    indice++;

    // Si el índice llega al final del array, reinicia a 0
    if (indice >= textos.length) {
        indice = 0;
    }
}

// Llama a la función la primera vez para mostrar el primer texto
cambiarTexto();

// Usa setInterval para llamar a la función cada 5000 milisegundos (5 segundos)
setInterval(cambiarTexto, 6000);




document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.boton-menu-movil'); // Clase actualizada
  const closeIcon = document.querySelector('.boton-cerrar-menu'); // Clase actualizada
  const sideMenu = document.querySelector('.menu-lateral'); // Clase actualizada

  // Abrir el menú
  menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('active');
  });

  // Cerrar el menú
  closeIcon.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = sideMenu.contains(event.target);
    const isClickOnIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon && sideMenu.classList.contains('active')) {
      sideMenu.classList.remove('active');
    }
  });
});
