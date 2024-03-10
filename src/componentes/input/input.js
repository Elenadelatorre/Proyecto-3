//Crear un input para buscar imagenes:
import './input.css';

export function newDiv() {
  //Seleccionar el elemento "nav".
  const nav = document.querySelector('.nav-list');

  //Crear un "div" para el "input" y el "button".
  const newDiv = document.createElement('div');
  newDiv.id = 'search-container';

  //Crear el "input" y el "button".
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'search-input';
  input.placeholder = 'Buscar';

  const searchButton = document.createElement('button');
  searchButton.id = 'search-button';
  searchButton.textContent = 'Buscar';

  //Añadir el "input" y el "button" al "div".
  newDiv.appendChild(input);
  newDiv.appendChild(searchButton);

  //Añadir el "div" al "nav".
  nav.insertAdjacentElement('afterend', newDiv);
}
