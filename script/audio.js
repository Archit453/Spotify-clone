const playPause = document.querySelector('.js-play-pause')
let audio1 = new Audio('songs/Sahiba.mp3');
var count = 0;
playPause.addEventListener('click',() => {
  if(count === 0){
    audio1.play();
    console.log('played');
    count=1;
  }
  else{
    audio1.pause();
    console.log('paused');
    count=0
  }
})

