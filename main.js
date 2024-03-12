import './style.css';
import { newDiv } from './src/componentes/input/input';
import { imagesCollection } from './src/componentes/ImagesCollection/images';
import { displayImages } from './src/componentes/ImagesCollection/images';

newDiv();

window.onload = function () {
  getRandomImages();
};
function getRandomImages() {
  const accessKey = 'ypaiUUedoFphsaNYHKHQnB3E3Q7GpnxdcobUOhF4vck';
  const count = 15;

  fetch(
    `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`
  )
    .then((response) => response.json())
    .then((data) => {
      const main = document.querySelector('main');
      const randomImagesContainer = document.createElement('div');
      randomImagesContainer.id = 'random-images-container';
      main.appendChild(randomImagesContainer);
      const divRandom = document.querySelector('#random-images-container');
      divRandom.innerHTML = '';

      data.forEach((photo) => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.urls.regular;
        imgElement.alt = photo.alt_description;
        randomImagesContainer.appendChild(imgElement);
      });
    })
    .catch((error) => console.error('Error fetching random images:', error));
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  const inputValue = document.getElementById('search-input').value;

  if (inputValue === '') {
    // Si no se ha ingresado ninguna búsqueda, mostrar una alerta
    alert('No se ha ingresado ninguna búsqueda.');
  } else {
    // Si se ha ingresado una búsqueda, realizar la búsqueda y mostrar imágenes relacionadas
    const randomImagesContainer = document.querySelector(
      '#random-images-container'
    );
    randomImagesContainer.innerHTML = '';
    imagesCollection();
  }
});
document.querySelector('.active').addEventListener('click', () => {
  const imagesContainer = document.querySelector('#app');
  imagesContainer.innerHTML = '';
  getRandomImages(); // Llama a la función para obtener imágenes aleatorias nuevamente
});

displayImages();
