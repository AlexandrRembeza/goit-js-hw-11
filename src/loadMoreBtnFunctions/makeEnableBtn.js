import refs from '../refs';

export default function makeEnableBtn() {
  refs.loadMoreBtnEL.removeAttribute('disabled');
  refs.loadMoreBtnEL.classList.remove('loading');
  refs.spinnerEL.classList.add('spinner-is-hidden');
  refs.btnTextEL.textContent = 'Load more';
}
