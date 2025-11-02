// Tilt cards based on mouse position
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.3s ease-out';
  });

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (maximum 15 degrees)
    const rotateX = (-(y - rect.height / 2) / rect.height) * 30;
    const rotateY = ((x - rect.width / 2) / rect.width) * 30;
    
    // Apply transform with slight scale for depth effect
    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      scale3d(1.05, 1.05, 1.05)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});

// Play sound when a card is clicked
function playSound(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}
