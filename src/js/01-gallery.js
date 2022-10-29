// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryList = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryList);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
	  <div class="gallery__item">
		<a class ="gallery__link" href ="${original}">
		<img
		class = "gallery__image"
		src= "${preview}"
		data-source = "${original}"
		alt = "${description}"
		/>
		</a>
		</div>
	  `;
    })
    .join('');
}

// gallery.addEventListener("click", onClick);

// function onClick(evt) {
//   evt.preventDefault();
//   const imgSource = evt.target.dataset.source;
//   const instance = basicLightbox.create(`
//     <img
//     src="${imgSource}"
//     >
// `);

//   instance.show();
// }
const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionSelector: 'img',
//   captionType: 'tittle',
//   captionPosition: 'bottom',
//   captionDelay: 250,
//   captionClass: 'lightbox__padding',
//   className: 'lightbox',
//   enableKeyboard: true,
// });
// lightbox.next();
