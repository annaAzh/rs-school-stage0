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
  } else {
    pauseAudio();
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
}

function playPrev () {
  if (count > 0) {
    count--;
  } else {
    count = data.length - 1;
  }
  audioInfo();
  playAudio();
}