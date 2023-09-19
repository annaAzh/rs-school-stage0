const data = [
  {
    id: 0,
    title: 'Michael e',
    author: 'Matterhorn',
    img: 'assets/cover/1.jpg',
    song: 'assets/songs/01.mp3'
  },
  {
    id: 1,
    title: 'La Estacion Del Mar',
    author: 'Punta Begona',
    img: 'assets/cover/2.jpg',
    song: 'assets/songs/02.mp3'
  },
  {
    id: 2,
    title: 'Velvet Dreamer',
    author: 'Mystic Traveller',
    img: 'assets/cover/3.jpg',
    song: 'assets/songs/03.mp3'
  },
];

const btnPlay = document.querySelector('.play__img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cover = document.querySelector('.player__img');
const artist = document.querySelector('.player__title-author');
const songTitle = document.querySelector('.player__title-sound');

const inputDuration = document.querySelector('.progress-bar__range');
const currentTime = document.querySelector('.progress-bar__current-time');
const fullTime = document.querySelector('.progress-bar__full-time');

const volumeRange = document.querySelector('.progress-bar__range-volume');
const volumeImg = document.querySelector('.progress-bar__range-img');

const audio = document.createElement('audio');
audio.classList.add('audio__track');
document.querySelector('.audio-box').prepend(audio);

let isPlay = false;
let count = 0;

audioInfo();

currentTime.textContent = '00:00';

audio.addEventListener('loadeddata', () => {
  const fullAudioTime = audio.duration;
  let fullMinutes = Math.floor(fullAudioTime / 60);
  let fullSeconds = Math.floor(fullAudioTime  - fullMinutes * 60);

  fullTime.textContent =`${addZero(fullMinutes)}:${addZero(fullSeconds)}`; 
});

audio.addEventListener('ended', playNext);

inputDuration.addEventListener('click', (e) => {
  let rangeValue = inputDuration.clientWidth;
  let clickedOffset = e.offsetX;
  let audioDuration = audio.duration;

  audio.currentTime = (clickedOffset / rangeValue) * audioDuration;
});

btnPlay.addEventListener('click', () => {
  if (!isPlay) {
    playAudio();
    playSongList()
  } else {
    pauseAudio();
    setPlayBtn();
  }
});

function audioInfo() {
  audio.src = data[count].song;
  cover.src = data[count].img;
  artist.textContent = data[count].author;
  songTitle.textContent = data[count].title;
}

audio.addEventListener('timeupdate', (e) => {
  if (!isNaN(audio.duration)) {
    const currentAudioTime = e.target.currentTime;
    const fullAudioTime = e.target.duration;
    let progressWidth = (currentAudioTime / fullAudioTime) * 100;
    inputDuration.value = progressWidth;
  
    let currentMinutes = Math.floor(currentAudioTime / 60);
    let currentSeconds = Math.floor(currentAudioTime  - currentMinutes * 60);
  
    let fullMinutes = Math.floor(fullAudioTime / 60);
    let fullSeconds = Math.floor(fullAudioTime  - fullMinutes * 60);
  
    currentTime.textContent =`${addZero(currentMinutes)}:${addZero(currentSeconds)}`;
    fullTime.textContent =`${addZero(fullMinutes)}:${addZero(fullSeconds)}`; 
  }
})

function addZero(num) {
  if (num < 10) {
    return num = `0${num}`;
  } else {
    return num;
  }
}

function playAudio () {
  audio.play();
  isPlay = true;
  btnPlay.src = 'assets/icons/pause.svg';
}

function pauseAudio () {
  audio.pause();
  isPlay = false;
  btnPlay.src = 'assets/icons/play.svg';
}

nextBtn.addEventListener('click', playNext); 
prevBtn.addEventListener('click', playPrev); 

function playNext () {
  
  if (count < data.length - 1) {
    count++;
  } else {
    count = 0;
  }
  audioInfo();
  playAudio();
  playSongList();
}

function playPrev () {
  if (count > 0) {
    count--;
  } else {
    count = data.length - 1;
  }
  audioInfo();
  playAudio();
  playSongList();
}


volumeImg.src = 'assets/icons/low-volume.svg';
let isVolume = true;

volumeRange.addEventListener('click', (e) => {
  let rangeValue = volumeRange.clientWidth;
  let clickedOffset = e.offsetX;

  if (clickedOffset < 0) {
    clickedOffset = 0;
   } else if (clickedOffset > 100){
    clickedOffset = 100;
  }

  if (volumeRange.value <= 0) {
    volumeImg.src = 'assets/icons/volume-off.svg';
  } else if (volumeRange.value > 0 && volumeRange.value < 50) {
    volumeImg.src = 'assets/icons/low-volume.svg';
  } else if (volumeRange.value >= 50) {
    volumeImg.src = 'assets/icons/volume.svg';
  }

  audio.volume = (clickedOffset / rangeValue);
});

volumeImg.addEventListener('change', () => {
  if (isVolume === true) {
    isVolume = false;
    volumeImg.src = 'assets/icons/volume-off.svg';
    audio.volume = 0;
  } else {
    isVolume = true;
    if (volumeRange.value > 0 && volumeRange.value <= 50) {
      volumeImg.src = 'assets/icons/low-volume.svg';
    } else {
      volumeImg.src = 'assets/icons/volume.svg';
    }
    setVolume();
  }
});

function setVolume() {
  audio.volume = volumeRange.value / 100;
}

volumeRange.addEventListener('mousemove', () => {
  setVolume();
});


const listBtn = document.querySelector('.player__songs-btn');
const closeListBtn = document.querySelector('.songs__close');
const songList = document.querySelector('.songs__list');

listBtn.addEventListener('click', () => {
  document.querySelector('.songs').classList.remove('hide');
  document.querySelector('.songs').classList.add('songs-show');
});

closeListBtn.addEventListener('click', () => {
  document.querySelector('.songs').classList.remove('songs-show');
  document.querySelector('.songs').classList.add('hide');
});


const play = `<svg class="songs__item-play-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0298 13.2304C20.3234 12.4806 20.3234 10.5245 19.0298 9.77411L7.78093 3.24762C6.53067 2.52333 5 3.47468 5 4.97608V18.0242C5 19.5256 6.53009 20.4769 7.77978 19.752L19.0298 13.2304Z" fill="white"/></svg>`;
const pause = `<svg class="songs__item-play-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.625 2C8.32119 2 8.98887 2.35119 9.48116 2.97631C9.97344 3.60143 10.25 4.44928 10.25 5.33333V18.6667C10.25 19.5507 9.97344 20.3986 9.48116 21.0237C8.98887 21.6488 8.32119 22 7.625 22C6.92881 22 6.26113 21.6488 5.76884 21.0237C5.27656 20.3986 5 19.5507 5 18.6667V5.33333C5 4.44928 5.27656 3.60143 5.76884 2.97631C6.26113 2.35119 6.92881 2 7.625 2ZM16.375 2C17.0712 2 17.7389 2.35119 18.2312 2.97631C18.7234 3.60143 19 4.44928 19 5.33333V18.6667C19 19.5507 18.7234 20.3986 18.2312 21.0237C17.7389 21.6488 17.0712 22 16.375 22C15.6788 22 15.0111 21.6488 14.5188 21.0237C14.0266 20.3986 13.75 19.5507 13.75 18.6667V5.33333C13.75 4.44928 14.0266 3.60143 14.5188 2.97631C15.0111 2.35119 15.6788 2 16.375 2Z" fill="white"/>
</svg>
`;


function setSongList(play) {
  for (let i = 0; i < data.length; i++) {
    const element = document.createElement('li');
    element.innerHTML = `
      <img  class="songs__item-img" src=${data[i].img} alt=${data[i].title}>
      <div class="song__item-info">
      <span class="songs__item-artist">${data[i].author}</span>
      <span class="songs__item-song">${data[i].title}</span>
      </div>
      <button class="songs__item-play">
      ${play}
      </button>
      `;
    element.classList.add('songs__item');
    element.setAttribute('data-id', `${i}`);
    songList.prepend(element);
  }
}
setSongList(play);

let songItemBtn = document.querySelectorAll('.songs__item-play');
let songItem = document.querySelectorAll('.songs__item');


function playSongList() {
  songItem.forEach(li => {
    li.classList.remove('songs__item--active');
    li.querySelector('.songs__item-play').innerHTML = `${play}`;
  });
  for (let i = 0; i < songItem.length; i++) {
    if (songItem[i].getAttribute('data-id') == count) {
      songItem[i].classList.add('songs__item--active');
      songItem[i].querySelector('.songs__item-play').innerHTML = `${pause}`;
    }
  }
}


songItem.forEach(elem => elem.addEventListener('click', (e) => {
  if (+e.currentTarget.getAttribute('data-id') === count && isPlay === true) {
    pauseAudio();
    setPlayBtn();
  } else {
  count = +e.currentTarget.getAttribute('data-id');
  playSongList();
  audioInfo();
  playAudio();
  }
}));

function setPlayBtn() {
  songItem.forEach(li => {
    li.querySelector('.songs__item-play').innerHTML = `${play}`;
  });
}