import {
  isEscKeyDown
} from '../utils/is-esc-key-down.js';

const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const showSuccessMessage = () => {
  body.append(successMessage);
  body.addEventListener('keydown', onEscDown);
  body.addEventListener('click', onBodyClick);
  successMessage.querySelector('.success__button').addEventListener('click', onSuccessMessageClick);
};

const showErrorMessage = () => {
  body.append(errorMessage);
  body.addEventListener('keydown', onEscDown);
  body.addEventListener('click', onBodyClick);
  errorMessage.querySelector('.error__button').addEventListener('click', onSuccessMessageClick);
};

function onSuccessMessageClick() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  body.removeEventListener('keydown', onEscDown);
  body.removeEventListener('click', onBodyClick);
}

function onBodyClick(evt) {
  if (
    evt.target.closest('.success__inner') || evt.target.closest('.error__inner')
  ) {
    return;
  }
  onSuccessMessageClick();
}

function onEscDown(evt) {
  if (isEscKeyDown(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    onSuccessMessageClick();
  }
}

export {
  showSuccessMessage,
  showErrorMessage
};
