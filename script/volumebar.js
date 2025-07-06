
export function changeVolume(audio1){
  const volumeBar = document.querySelector('.js-volume-progress-bar');
  const volumeProgress = volumeBar.querySelector('.progress'); // your inner fill bar

  let isDraggingVolume = false;

  // Start dragging or click
  volumeBar.addEventListener('mousedown', (e) => {
    isDraggingVolume = true;
    setVolumeFromEvent(e);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDraggingVolume) {
      setVolumeFromEvent(e);
    }
  });

  document.addEventListener('mouseup', () => {
    isDraggingVolume = false;
  });

  function setVolumeFromEvent(e) {
    if (!audio1) return;

    const rect = volumeBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, x / rect.width)); // clamp 0–1

    audio1.volume = ratio;

    // Update bar fill
    volumeProgress.style.width = `${ratio * 100}%`;

    console.log(`Volume set to: ${Math.round(ratio * 100)}%`);

    
  }
}