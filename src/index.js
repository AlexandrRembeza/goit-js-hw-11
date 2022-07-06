import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './fetchImages';
import createMarkup from './createMarkup';

import showTotalHitsMessage from './messagesFunctions/showTotHitsMessage';
import showErrorMessage from './messagesFunctions/showErrorMessage';
import showInfoMessage from './messagesFunctions/showInfoMessaage';

import refs from './refs';
import { lightboxOptions } from './lightboxOptions';

import closeLodeMoreBtn from './loadMoreBtnFunctions/closeLodeMoreBtn';
import showLodeMoreBtn from './loadMoreBtnFunctions/showLodeMoreBtn';
import makeDisableBtn from './loadMoreBtnFunctions/makeDisableBtn';
import makeEnableBtn from './loadMoreBtnFunctions/makeEnableBtn';

const lightbox = new SimpleLightbox('.gallery a', lightboxOptions);

let value = '';
let pageNum = 1;

refs.formEL.addEventListener('submit', fetchForGetImages);
refs.loadMoreBtnEL.addEventListener('click', fetchForGetNextPageOfImages);

async function fetchForGetImages(e) {
  e.preventDefault();
  pageNum = 1;

  closeLodeMoreBtn();
  refs.galleryEL.innerHTML = '';

  value = e.currentTarget.elements.searchQuery.value.trim();

  if (valueIsEmpty(value)) {
    return;
  }

  try {
    makeDisableBtn();
    const images = await fetchImages(value, pageNum);

    if (zeroTotalHits(images)) {
      return;
    }

    setTimeout(() => {
      showTotalHitsMessage(images);
      makeImagesMarkup(images);
    }, 1000);

    showLodeMoreBtn();
  } catch (error) {
    closeLodeMoreBtn();
    showErrorMessage('Sorry, there was an error, please try again');
    return;
  }
}

async function fetchForGetNextPageOfImages() {
  try {
    pageNum += 1;

    makeDisableBtn();
    const images = await fetchImages(value, pageNum);

    if (isLastPage(images)) {
      return;
    }

    setTimeout(() => {
      makeImagesMarkup(images);
    }, 1000);
  } catch (error) {
    showErrorMessage('Sorry, there was an error, please try again');
    return;
  }
}

function makeImagesMarkup(images) {
  renderImages(images);
  makeEnableBtn();
  lightbox.refresh();
  window.scrollBy({
    top: 340 * 2,
    behavior: 'smooth',
  });
}

function renderImages(images) {
  refs.galleryEL.insertAdjacentHTML('beforeend', createMarkup(images));
}

function isLastPage(images) {
  const lastPage = Math.round(images.total / 8);
  if (pageNum > lastPage) {
    closeLodeMoreBtn();
    showErrorMessage(
      "We're sorry, but you've reached the end of search results."
    );
    return true;
  }
  return false;
}

function valueIsEmpty(value) {
  if (value === '') {
    closeLodeMoreBtn();
    showInfoMessage();
    return true;
  }
  return false;
}

function zeroTotalHits(images) {
  if (images.totalHits === 0) {
    closeLodeMoreBtn();
    showErrorMessage(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return true;
  }
  return false;
}
