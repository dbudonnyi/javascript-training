// eslint-disable-next-line import/extensions
import galleryItems from './gallery-items.js';

// add images
const ulGallery = document.querySelector('ul.gallery.js-gallery');
const imgHtml = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </li>`,
  )
  .join('');
ulGallery.insertAdjacentHTML('beforeend', imgHtml);

const divLightbox = document.querySelector('div.lightbox');
const divLightboxImg = document.querySelector('img.lightbox__image');

// handle opening image
const handleOpenImg = e => {
  if (e.target === e.currentTarget) {
    return;
  }

  e.preventDefault();
  const url = e.target.dataset.source;
  divLightboxImg.src = url;
  divLightbox.classList.add('is-open');
};
ulGallery.addEventListener('click', handleOpenImg);

// add close action for button
const handleClose = () => {
  divLightbox.classList.remove('is-open');
  divLightboxImg.src = '';
};
document
  .querySelector('button[data-action="close-lightbox"]')
  .addEventListener('click', handleClose);

// add close action for div clicking
divLightbox.addEventListener('click', handleClose);

// function for changing image by pressing left/right button
const changeImage = directionLeft => {
  const galleryImg = document.querySelectorAll('img.gallery__image');
  let currentIndex;
  galleryImg.forEach((elem, index) => {
    if (divLightboxImg.src === elem.dataset.source) {
      currentIndex = index;
    }
  });

  if (directionLeft) {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = galleryImg.length - 1;
    }
  } else {
    currentIndex += 1;
    if (currentIndex >= galleryImg.length) {
      currentIndex = 0;
    }
  }

  divLightboxImg.src = galleryImg[currentIndex].dataset.source;
};

// add action for key pressing
const handleKeyPress = e => {
  if (divLightbox.classList.contains('is-open')) {
    switch (e.keyCode) {
      case 27:
        handleClose();
        break;
      case 37:
        changeImage(true);
        break;
      case 39:
        changeImage(false);
        break;
      default:
        break;
    }
  }
};
document.addEventListener('keydown', handleKeyPress);
