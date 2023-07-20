import { show } from './big-photo.js';

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

const renderPhoto = (picture) => {
  const photoPreview = pictureTemplate.cloneNode(true);

  photoPreview.querySelector('.picture__img').src = picture.url;
  photoPreview.querySelector('.picture__likes').textContent = picture.likes;
  photoPreview.querySelector('.picture__comments').textContent =
    picture.comments.length;

  photoPreview.addEventListener('click', (evt) => {
    evt.preventDefault();
    show(picture);
  });

  return photoPreview;
};

const renderPhotos = (photos) => {
  let pictureListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    pictureListFragment.appendChild(renderPhoto(photo));
  });

  pictureList.appendChild(pictureListFragment);
};

export { renderPhotos };
