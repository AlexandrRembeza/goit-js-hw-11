export const fetchImages = async (name, page) => {
  const url = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '28425173-69dd37ad462df2a985c1a5bfb',
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 8,
  });

  const response = await fetch(`${url}?${params}`);
  const images = await response.json();

  return images;
};
