const  createAudio = (src) => {
  const audio = document.createElement('audio');
  audio.src = src;
  audio.setAttribute('loop', true);
  document.body.prepend(audio);
  audio.play();
  return audio;
}

const setSound = (isStartGame) => {
  const volumeBtn = document.querySelector('.volume__btn');
  let isVolume = true;

  if (isStartGame) {
    let audio = createAudio('../assets/audio/audio.mp3');
    volumeBtn.addEventListener('click', () => {
      if (isVolume === true) {
        audio.volume = 0;
        isVolume = false;
        volumeBtn.innerHTML = `
          <svg class="volume__btn-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6371 4.88776C14.6369 4.72048 14.5896 4.55665 14.5007 4.41511C14.4118 4.27357 14.2848 4.16007 14.1345 4.08764C13.9841 4.01521 13.8164 3.9868 13.6507 4.00568C13.485 4.02455 13.3279 4.08993 13.1976 4.19432L9.00831 7.55485H4.88643C4.65133 7.55485 4.42587 7.64852 4.25963 7.81524C4.09339 7.98197 4 8.2081 4 8.44388V15.5561C4 15.7919 4.09339 16.018 4.25963 16.1848C4.42587 16.3515 4.65133 16.4451 4.88643 16.4451H9.00831L13.1976 19.8057C13.3279 19.9101 13.485 19.9755 13.6507 19.9943C13.8164 20.0132 13.9841 19.9848 14.1345 19.9124C14.2848 19.8399 14.4118 19.7264 14.5007 19.5849C14.5896 19.4434 14.6369 19.2795 14.6371 19.1122V4.88776ZM20 12C20.0014 13.0509 19.7956 14.0918 19.3946 15.0628C18.9936 16.0337 18.4053 16.9156 17.6634 17.6578L16.41 16.4007C16.987 15.8234 17.4446 15.1375 17.7565 14.3822C18.0683 13.627 18.2283 12.8174 18.2271 12C18.2282 11.1826 18.0682 10.373 17.7563 9.61782C17.4445 8.86262 16.9869 8.17664 16.41 7.5993L17.6634 6.34222C18.4053 7.08439 18.9936 7.9663 19.3946 8.93725C19.7956 9.9082 20.0014 10.9491 20 12Z" fill="#E9E9E9"/>
          <rect x="3.54407" y="3" width="24" height="2" rx="1" transform="rotate(50.5365 3.54407 3)" fill="#E9E9E9"/>
          </svg>
        `;
      } else {
        audio.volume = 1;
        isVolume = true;
        volumeBtn.innerHTML = `
          <svg class="volume__btn-img" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.3039 19.015C17.4897 17.8325 18.4301 16.4273 19.0711 14.8802C19.7121 13.3331 20.041 11.6746 20.0389 9.99999C20.041 8.32536 19.7121 6.66685 19.0711 5.11975C18.4301 3.57265 17.4897 2.16748 16.3039 0.984985L15.2419 2.04549C16.2882 3.08887 17.118 4.32874 17.6835 5.69385C18.2491 7.05895 18.5393 8.52237 18.5374 9.99999C18.5374 13.1065 17.2774 15.919 15.2419 17.9545L16.3039 19.015V19.015Z"
            fill="#ffffff" />
          <path
            d="M14.1815 16.894C15.0882 15.9897 15.8073 14.9151 16.2974 13.732C16.7875 12.5489 17.039 11.2806 17.0375 9.99999C17.039 8.71938 16.7875 7.4511 16.2974 6.268C15.8073 5.0849 15.0882 4.01031 14.1815 3.10599L13.121 4.16649C13.8882 4.93171 14.4966 5.84099 14.9113 6.8421C15.326 7.8432 15.5388 8.91639 15.5375 9.99999C15.5392 11.0837 15.3268 12.1571 14.9123 13.1585C14.4979 14.1599 13.8896 15.0695 13.1225 15.835L14.1815 16.894Z"
            fill="#ffffff" />
          <path
            d="M12.0605 14.773C12.6882 14.1469 13.186 13.4029 13.5253 12.5838C13.8646 11.7647 14.0387 10.8866 14.0375 10C14.0387 9.1134 13.8646 8.23532 13.5253 7.41621C13.186 6.5971 12.6882 5.85311 12.0605 5.227L11 6.2875C11.4882 6.7745 11.8754 7.35319 12.1393 7.99031C12.4031 8.62742 12.5385 9.3104 12.5375 10C12.5384 10.6896 12.403 11.3725 12.1391 12.0096C11.8753 12.6467 11.4882 13.2254 11 13.7125L12.0605 14.773ZM9.0755 3.325C9.20257 3.38621 9.3098 3.48201 9.38489 3.60141C9.45997 3.7208 9.49987 3.85895 9.5 4V16C9.4998 16.1411 9.45978 16.2793 9.38455 16.3987C9.30932 16.5181 9.20193 16.6139 9.07471 16.675C8.9475 16.7361 8.80562 16.7601 8.6654 16.7441C8.52517 16.7282 8.39228 16.6731 8.282 16.585L4.7375 13.75H1.25C1.05109 13.75 0.860322 13.671 0.71967 13.5303C0.579018 13.3897 0.5 13.1989 0.5 13V7C0.5 6.80108 0.579018 6.61032 0.71967 6.46967C0.860322 6.32901 1.05109 6.25 1.25 6.25H4.7375L8.282 3.415C8.39236 3.32678 8.52539 3.27153 8.66578 3.2556C8.80616 3.23968 8.94819 3.26373 9.0755 3.325V3.325Z"
            fill="#ffffff" />
          </svg>
        `;
      }
    })
  }
}

export {createAudio, setSound};