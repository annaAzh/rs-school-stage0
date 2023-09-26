const btn = document.querySelector('.gallery-images__btn');
const input = document.querySelector('.image-search__input');
const crossBtn = document.querySelector('.gallery-search__clean-btn');

const url = 'https://api.unsplash.com/';
const apiKey = 'fYe-1DXh8Bf-piMaxlemYEr4-lNxI-wQswuYygwYuls';
let pageCount = 1;
let searchKeyWord = null;

input.focus();

async function requestImage(url) {

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  } 
  const data = await res.json();
  searchKeyWord ? renderImages(data.results) : renderImages(data);
  return data;
}

requestImage(`${url}photos?page=${pageCount}&per_page=9&client_id=${apiKey}`);

const renderImages = (data) => {
  data.forEach(elem => {
    createImage(elem.urls.thumb);
  })
}

const createImage = (src) => {
  const element = document.createElement('li');
  element.innerHTML = `
    <img class="gallery-images__img" src="${src} alt="image">
  `;
  element.classList.add('gallery-images__item');
  document.querySelector('.gallery-images__list').append(element);
  return element;
};

const loadSearchingImages = (e) => {
  if (e.currentTarget.classList.contains('image-search__input')) {
    searchKeyWord = e.target.value;
    pageCount = 1;
    console.log(pageCount);
    document.querySelector('.gallery-images__list').innerHTML = '';
    requestImage(`${url}search/photos?query=${searchKeyWord}&page=${pageCount}&per_page=9&client_id=${apiKey}`);
  } else if (searchKeyWord && e.currentTarget.classList.contains('gallery-images__btn')) {
    pageCount += 1;
    console.log(pageCount);
    requestImage(`${url}search/photos?query=${searchKeyWord}&page=${pageCount}&per_page=9&client_id=${apiKey}`);
  } else {
    pageCount += 1;
    console.log(pageCount);
    requestImage(`${url}photos?page=${pageCount}&per_page=9&client_id=${apiKey}`);
  }
}

const cleanInput = () => {
  searchKeyWord = null;
  input.value = '';
}

input.addEventListener('change', loadSearchingImages);
btn.addEventListener('click', loadSearchingImages);
crossBtn.addEventListener('click', cleanInput);