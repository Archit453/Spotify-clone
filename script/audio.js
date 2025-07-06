import { trendingSong } from "../data/trendingSongs.js";
import {updateAudioQueue,getAudioQueue,getCurrentIndex,setCurrentIndex} from "../data/songQueue.js";
import { updateSongInfo } from "./updateSongAtInfo.js";
import {getTime,updateTimeDisplay} from "./progressbar.js";
import { changeVolume } from "./volumebar.js";



let audio1 = null;
let isPlaying = false;

const playPause = document.querySelector('.js-play-pause');
const backwardButton = document.querySelector('.js-backward');
const forwardButton = document.querySelector('.js-forward');
const playSongButtons = document.querySelectorAll('.js-play-song');


playSongButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const playSongId = button.dataset.songId;
    const playSong = trendingSong.find(song => song.id === playSongId);

    if (!playSong) {
      console.error(`Song not found for ID: ${playSongId}`);
      return;
    }

    // Stop and reset current audio if one is already playing
    if (audio1) {
      audio1.pause();
      audio1.currentTime = 0;
    }

    audio1 = new Audio(playSong.audio);
    getTime(audio1);
    
    // Add event listeners for time updates
    audio1.addEventListener('timeupdate', () => updateTimeDisplay(audio1));
    audio1.addEventListener('loadedmetadata', () => updateTimeDisplay(audio1));
    
    isPlaying = true;

    try {
      await audio1.play();
      updatePlayPauseButton(true);
      updateAudioQueue(playSong);
      updateSongInfo(playSong);
      console.log(`Now playing: ${playSong.songName}`);
    } catch (err) {
      console.error("Failed to play audio:", err);
    }
  });
});
playPause.addEventListener('click', async () => {
  if (!audio1) return;

  try {
    if (isPlaying) {
      audio1.pause();
      isPlaying = false;
    } else {
      await audio1.play();
      isPlaying = true;
    }
    updatePlayPauseButton(isPlaying);
  } catch (err) {
    console.error("Error during play/pause:", err);
  }
});

let lastClickTime = 0;

backwardButton.addEventListener('click', async () => {
  const now = Date.now();
  const queue = getAudioQueue();
  let index = getCurrentIndex();

  // If double click within 800ms, go to previous song
  if (now - lastClickTime < 800 && index > 0) {
    const prevSong = queue[index - 1];
    setCurrentIndex(index - 1);
    await playNewSong(prevSong);
  } else if (audio1) {
    // First click just restarts current song
    audio1.currentTime = 0;
    await audio1.play();
  }

  lastClickTime = now;
});
forwardButton.addEventListener('click', async () => {
  const queue = getAudioQueue();
  let index = getCurrentIndex();

  if (index < queue.length - 1) {
    const nextSong = queue[index + 1];
    setCurrentIndex(index + 1);
    await playNewSong(nextSong);
  } else {
    console.log("No next song.");
  }
});



async function playNewSong(song) {
  if (audio1) {
    audio1.pause();
    audio1.currentTime = 0;
  }

  audio1 = new Audio(song.audio);
  getTime(audio1);
   
  // Add event listeners for time updates
  audio1.addEventListener('timeupdate', () => updateTimeDisplay(audio1));
  audio1.addEventListener('loadedmetadata', () => updateTimeDisplay(audio1));
  
  isPlaying = true;

  try {
    await audio1.play();
    updatePlayPauseButton(true);
    updateSongInfo(song);
    console.log(`Now playing: ${song.songName}`);
  } catch (err) {
    console.error("Failed to play song:", err);
  }
}

function updatePlayPauseButton(isPlaying) {
  playPause.classList.toggle('fa-play', !isPlaying);
  playPause.classList.toggle('fa-pause', isPlaying);
}

window.addEventListener('DOMContentLoaded', async () => {
  const queue = getAudioQueue();
  const index = getCurrentIndex();

  if (queue.length > 0 && queue[index]) {
    const song = queue[index];
    audio1 = new Audio(song.audio);
    getTime(audio1);

    audio1.addEventListener('timeupdate', () => updateTimeDisplay(audio1));
    audio1.addEventListener('loadedmetadata', () => updateTimeDisplay(audio1));

    isPlaying = false;
    updatePlayPauseButton(false);
    updateSongInfo(song);
    console.log(`Loaded from localStorage: ${song.songName}`);
  }

  // Seek by clicking progress bar
  const progressBarContainer = document.querySelector('.js-progress-bar');
  progressBarContainer.addEventListener('click', (event) => {
    if (!audio1 || !audio1.duration) return;

    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;

    const clickRatio = clickX / width;
    const newTime = audio1.duration * clickRatio;

    audio1.currentTime = newTime;
    updateTimeDisplay(audio1);
  });

  //  Volume control
  changeVolume(audio1);

});
