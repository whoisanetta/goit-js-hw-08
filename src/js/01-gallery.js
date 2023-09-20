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

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
