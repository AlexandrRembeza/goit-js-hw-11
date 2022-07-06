export default function createMarkup(images) {
  return images.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<a class="image-link" href="${largeImageURL}">
                  <div class="photo-card">
                    <img src="${webformatURL}" alt="${tags}" loading="lazy" height="250"/>
                    <div class="info">
                      <p class="info-item">
                        <b>Likes</b>
                        <span class="span-text">${likes}</span>
                      </p>
                      <p class="info-item">
                        <b>Views</b>
                        <span class="span-text">${views}</span>
                      </p>
                      <p class="info-item">
                        <b>Comments</b>
                        <span class="span-text">${comments}</span>
                      </p>
                      <p class="info-item">
                        <b>Downloads</b>
                        <span class="span-text">${downloads}</span>
                      </p>
                    </div>
                 </div>
               </a>`;
      }
    )
    .join('');
}
