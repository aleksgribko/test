import { isEscEvent } from './util.js';

const main = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();
const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const removeEscapeAlert = (evt, className) => {
  if (isEscEvent(evt)) {
    removeAlert(className);
  }
};

const onErrorEscKeydown = (evt) => {
  removeEscapeAlert(evt, '.error');
  document.removeEventListener('keydown', onErrorEscKeydown);
};

const onSuccessEscKeydown = (evt) => {
  removeEscapeAlert(evt, '.success');
  document.removeEventListener('keydown', onSuccessEscKeydown);
};

const removeAlert = (type) => {
  document.querySelector(type).remove();
};

const showError = (text, button) => {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__title').textContent = text;
  errorElement.querySelector('.error__button').textContent = button;

  const errorButton = errorElement.querySelector('.error__button');
  errorElement.querySelector('.error').addEventListener('click', (evt) => {
    let element = evt.target.classList;
    if (!element.contains('error__inner')) {
      document.removeEventListener('keydown', onErrorEscKeydown);
      removeAlert('.error');
    }
  });

  errorButton.addEventListener('click', () => {
    removeAlert('.error');
  });

  document.addEventListener('keydown', onErrorEscKeydown);

  errorFragment.appendChild(errorElement);
  main.appendChild(errorFragment);
};

const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);

  successElement.querySelector('.success__title').textContent = text;

  const successButton = successElement.querySelector('.success__button');

  successElement.querySelector('.success').addEventListener('click', (evt) => {
    let element = evt.target.classList;
    if (!element.contains('.success__inner')) {
      document.removeEventListener('keydown', onSuccessEscKeydown);
      removeAlert('.success');
    }
  });

  successButton.addEventListener('click', () => {
    removeAlert('.success');
  });

  document.addEventListener('keydown', onSuccessEscKeydown);

  successFragment.appendChild(successElement);
  main.appendChild(successFragment);
};

export { showError, showSuccess };
