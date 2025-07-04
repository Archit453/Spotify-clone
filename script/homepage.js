import { trendingSong } from "../data/trendingSongs.js";


let songHTML = ``;
trendingSong.forEach((eachSong) => {
  
  songHTML += `
  <div class="trending-song">
    <img src="${eachSong.img}" alt="${eachSong.songName}">
    <p>${eachSong.songName}</p>
    <p>${eachSong.artistName}</p>
  </div>
`
})

document.querySelector('.js-trending-songs-main')
.innerHTML = songHTML;