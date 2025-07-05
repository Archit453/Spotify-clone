const updateSongLeft = document.querySelector('.js-image-container');
const updateSongRight = document.querySelector('.js-song-description');


export function updateSongInfo(SongInfo){
  updateSongLeft.innerHTML=
  `
  <img src="${SongInfo.img}" alt="" />
  `
  updateSongRight.innerHTML=
  `
  <p class="title">
        ${SongInfo.songName}
  </p>
  <p class="artist">${SongInfo.artistName}</p>
  
  `
}