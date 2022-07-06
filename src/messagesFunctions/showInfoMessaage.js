import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

export default function showInfoMessage() {
  return Notiflix.Notify.info(`Empty line, enter something to search for`, {
    width: '400px',
    position: 'right-top',
    svgSize: '120px',
    fontSize: '18px',
    timeout: 2000,
  });
}
