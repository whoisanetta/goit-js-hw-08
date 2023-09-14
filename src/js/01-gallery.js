// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

//import .gallery from '../css/01-gallery.css';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', handleProductClick);

function createMarkup(arr) {
  return arr
    .map(({ original, preview, description }) => {
      return `
    <li data-preview=${preview} class="gallery__item js-gallery-item">
        <a class="gallery__link" href="${original}" rel="noopener noreferrer nofollow">
            <img
                class="gallery__image" 
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
    })
    .join('');
}

function handleProductClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const targetElement = event.target.closest('.js-gallery-item');
  const photoPrev = targetElement.dataset.preview;
  const photoInfo = galleryItems.find(photo => photo.preview === photoPrev);

  var lightbox = new SimpleLightbox('.gallery a', {
    /* options */
  });
}
console.log(galleryItems);
