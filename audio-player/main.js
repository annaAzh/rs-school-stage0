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
const audio = document.querySelector('audio');

let isPlay = false;
let count = 0;

audio.src = data[count].song;
cover.src = data[count].img;

btnPlay.addEventListener('click', () => {
  if (!isPlay) {
    playAudio();
  } else {
    pauseAudio();
  }
})

function playAudio () {
  audio.src = data[count].song;
  cover.src = data[count].img;
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
  playAudio();
}

function playPrev () {
  if (count > 0) {
    count--;
  } else {
    count = data.length - 1;
  }
  playAudio();
}