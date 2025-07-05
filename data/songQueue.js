export let audioQueue = JSON.parse(localStorage.getItem('audioQueue')) || [];
let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;


export function updateAudioQueue(song) {
  const existingIndex = audioQueue.findIndex(s => s.id === song.id);

  if (existingIndex !== -1) {
    currentIndex = existingIndex;
  } else {
    audioQueue.push(song);
    currentIndex = audioQueue.length - 1;
  }
  localStorage.setItem('audioQueue', JSON.stringify(audioQueue));
  localStorage.setItem('currentIndex', currentIndex);
}

export function getAudioQueue() {
  return audioQueue;
}

export function getCurrentIndex() {
  return currentIndex;
}

export function setCurrentIndex(index) {
  currentIndex = index;
  localStorage.setItem('currentIndex', index);
}



/*
export let audioQueue = [];

export function updateAudioQueue(newAudioUrl) {
  // If the new song is already in the queue, remove it first
  const existingIndex = audioQueue.indexOf(newAudioUrl);
  if (existingIndex !== -1) {
    audioQueue.splice(existingIndex, 1);
  }

  // Add the new song at the front
  audioQueue.unshift(newAudioUrl);
  console.log(audioQueue)
}
*/


