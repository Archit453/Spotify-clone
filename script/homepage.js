import { trendingSong } from "../data/trendingSongs.js";


let songHTML = ``;
trendingSong.forEach((eachSong) => {
  
  songHTML += `
  <div class="trending-song">
    <img src="${eachSong.img}" alt="${eachSong.songName}">
    <p class='song-name'>${eachSong.songName}</p>
    <p class='artist-name'>${eachSong.artistName}</p>
    <button class='play-button js-play-button'><img style="width: 24px;" class='green-play-logo' src="svg/green-play.svg" alt=""></button>
  </div>
`
})

 /* 
  <div class="trending-song">
    <img src="images/Last Love.jpeg" alt="Last Love">
    <p class='song-name'>Last Love</p>
    <p class='artist-name'>Kushagra,Bharath</p>
  
  </div>
  */
// <button class='play-button'><img class='green-play-logo' src="svg/green-play.svg" alt=""></button>

document.querySelector('.js-trending-songs-main')
.innerHTML = songHTML;

