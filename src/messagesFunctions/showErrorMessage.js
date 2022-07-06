import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

export default function showErrorMessage(message) {
  return Notiflix.Notify.failure(`${message}`, {
    width: '400px',
    position: 'right-top',
    svgSize: '120px',
    fontSize: '18px',
    timeout: 2000,
  });
}
