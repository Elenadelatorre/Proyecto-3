import './style.css';
import { newDiv } from './src/componentes/input/input';
import { imagesCollection } from './src/componentes/ImagesCollection/images';

newDiv();

document.addEventListener('DOMContentLoaded', function () {
  getRandomImages();
});

let randomImagesContainer; // Definir como variable global

function getRandomImages() {
  const accessKey = 'ypaiUUedoFphsaNYHKHQnB3E3Q7GpnxdcobUOhF4vck';
  const count = 15;

  if (!randomImagesContainer) {
    randomImagesContainer = document.createElement('div');
    randomImagesContainer.id = 'random-images-container';
    document.getElementById('app').appendChild(randomImagesContainer);
  } else {
    randomImagesContainer.innerHTML = '';
  }

  fetch(
    `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`
  )
    .then((response) => response.json())
    .then((data) => {
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
  const inputValue = document.getElementById('search-input').value.trim();

  if (inputValue === '') {
    if (randomImagesContainer) {
      randomImagesContainer.innerHTML = '';
    }
    alert('No se ha ingresado ninguna búsqueda.');
  } else {
    if (randomImagesContainer) {
      randomImagesContainer.innerHTML = '';
    }
    imagesContainer.innerHTML = '';
    imagesCollection(inputValue);
  }
});

const imagesContainer = document.querySelector('#app');
document.querySelector('.active').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  imagesContainer.innerHTML = '';
  randomImagesContainer = document.createElement('div');
  randomImagesContainer.id = 'random-images-container';
  document.getElementById('app').appendChild(randomImagesContainer);

  getRandomImages();
});

document.querySelector('.logo').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  imagesContainer.innerHTML = '';
  randomImagesContainer = document.createElement('div');
  randomImagesContainer.id = 'random-images-container';
  document.getElementById('app').appendChild(randomImagesContainer);

  getRandomImages();
});
