document.addEventListener('DOMContentLoaded', () => {
  const cardScroll = document.querySelector('.scroller');
  const cards = document.querySelectorAll('.card');

  cardScroll.addEventListener('scroll', () => {
    cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const scrollRect = cardScroll.getBoundingClientRect();

    const isVisible = rect.right > scrollRect.left && rect.left < scrollRect.right;
    if (!isVisible) card.classList.add('blurry');  
    else card.classList.remove('blurry');  
    });
  });

  fetch('https://api.github.com/users/RealTonyBlaq/repos')
    .then(response => {
      if (!response.ok) alert('Network connection error');
      else return response.json();
    })
    .then(data => {
      const projects = document.getElementsByClassName('projects');
      const card
    })
});
