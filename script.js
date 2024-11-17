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
