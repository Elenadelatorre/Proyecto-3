import './images.css';
export function displayImages(images) {
  const imageResults = document.getElementById('app');
  imageResults.innerHTML = '';

  images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image.urls.regular;
    img.alt = image.alt_description;

    imageResults.appendChild(img);
  });
}
export function imagesCollection() {
  const accessKey = 'ypaiUUedoFphsaNYHKHQnB3E3Q7GpnxdcobUOhF4vck';
  const query = document.getElementById('search-input').value;
  const imagesUrl = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}`;

  fetch(imagesUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error de red');
      }
      return response.json();
    })
    .then((data) => {
      displayImages(data.results);
    })
    .catch((error) => {
      console.error('Hay un problema con la petición Fetch: ', error);
    });
}
