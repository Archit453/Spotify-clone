import { trendingSong } from "../data/trendingSongs.js";
import { updateAudioQueue } from "../data/songQueue.js";
import { updateSongInfo } from "./updateSongAtInfo.js";

let audio1 = null;
let isPlaying = false;

const playPause = document.querySelector('.js-play-pause');
const backwardButton = document.querySelector('.js-backward');
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

backwardButton.addEventListener('click', async () => {
  if (!audio1) return;

  audio1.currentTime = 0;
  try {
    await audio1.play();
    isPlaying = true;
    updatePlayPauseButton(true);
    console.log("Restarted song from beginning");
  } catch (err) {
    console.error("Error restarting song:", err);
  }
});

function updatePlayPauseButton(isPlaying) {
  playPause.classList.toggle('fa-play', !isPlaying);
  playPause.classList.toggle('fa-pause', isPlaying);
}
