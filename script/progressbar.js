import { formatTime } from "../utils/time.js";

export function getTime(audio1){
  audio1.addEventListener('loadedmetadata', () => {
    const formatted = formatTime(audio1.duration);
    console.log("Duration:", formatted); // e.g. "3:15"
    updateAudioDurationHtml(formatted);
  });
}

// Function to get current time from audio player
export function getCurrentTime(audio1) {
  if (audio1) {
    return audio1.currentTime;
  }
  return 0;
}

// Function to get formatted current time
export function getFormattedCurrentTime(audio1) {
  const currentTime = getCurrentTime(audio1);
  return formatTime(currentTime);
}

// Function to update time display (call this regularly)
export function updateTimeDisplay(audio1) {
  if (!audio1) return;

  const currentTime = getCurrentTime(audio1);
  const duration = audio1.duration || 0;

  const currentTimeFormatted = formatTime(currentTime);
  const durationFormatted = formatTime(duration);

  const timeDisplay = document.querySelector('.js-current-time');
  const durationDisplay = document.querySelector('.js-duration');
  const progressBar = document.querySelector('.progress-bar .progress');

  // Update time text
  if (timeDisplay) {
    timeDisplay.innerText = currentTimeFormatted;
  }
  if (durationDisplay) {
    durationDisplay.innerText = durationFormatted;
  }

  // Update progress bar width
  if (progressBar && duration > 0) {
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

  updateAudioCurrentTimeHtml(currentTimeFormatted);
  
  console.log(`Current time: ${currentTimeFormatted} / ${durationFormatted}`);
}

function updateAudioDurationHtml(formatted){
  document.querySelector('.js-duration').innerHTML=
  `
  ${formatted}
  `
}

function updateAudioCurrentTimeHtml(currentTimeFormatted){
  document.querySelector('.js-current-time').innerHTML=
  `
  ${currentTimeFormatted}
  `
}