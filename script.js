const cardScroll = document.querySelector('.card-scroll');
const cards = document.querySelectorAll('.card');  

cardScroll.addEventListener('scroll', () => {
  cards.forEach(card => {  
    const rect = card.getBoundingClientRect();  
    const scrollRect = cardScroll.getBoundingClientRect();

            // Check if the card is partially out of view  
            const isVisible = rect.right > scrollRect.left && rect.left < scrollRect.right;  

            // If not visible, apply the blurry class  
            if (!isVisible) {  
                card.classList.add('blurry');  
            } else {  
                card.classList.remove('blurry');  
            }  
        });  
    });  
</script>
