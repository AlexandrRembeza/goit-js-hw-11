import refs from '../refs';

export default function makeDisableBtn() {
  refs.loadMoreBtnEL.disabled = 'true';
  refs.loadMoreBtnEL.classList.add('loading');
  refs.spinnerEL.classList.remove('spinner-is-hidden');
  refs.btnTextEL.textContent = 'Loading...';
}
