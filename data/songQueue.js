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
