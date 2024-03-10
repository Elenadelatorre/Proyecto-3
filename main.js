import './style.css';
import { newDiv } from './src/componentes/input/input';
import { imagesCollection } from './src/componentes/ImagesCollection/images';

newDiv();
imagesCollection();

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  imagesCollection();
});
