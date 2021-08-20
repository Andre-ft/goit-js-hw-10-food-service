import galleryMenuTmpl from '../templates/gallery-menu.hbs'; 
import galleryArray from '../db/menu.json';


const galleryContainer = document.querySelector('.js-menu'); 
const galleryMarkup = createGalleryMenuMarkup(galleryArray); 

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMenuMarkup(array) {
  return array
    .map(item => galleryMenuTmpl(item))
    .join('');
}