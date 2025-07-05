let audioQueue = [];
let currentIndex = -1;

export function updateAudioQueue(song) {
  const existingIndex = audioQueue.findIndex(s => s.id === song.id);

  if (existingIndex !== -1) {
    currentIndex = existingIndex;
  } else {
    audioQueue.push(song);
    currentIndex = audioQueue.length - 1;
  }
}

export function getAudioQueue() {
  return audioQueue;
}

export function getCurrentIndex() {
  return currentIndex;
}

export function setCurrentIndex(index) {
  currentIndex = index;
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


