document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.github.com/users/RealTonyBlaq/repos')
    .then(response => {
      if (!response.ok) alert('Network connection error');
      else return response.json();
    })
    .then(data => {
      const projects = document.querySelector('.projects');
      for (const repo of data) {
        const repoName = repo.name;
        const description = repo.description;

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = 'https://avatars.githubusercontent.com/u/132378140?v=4';
        img.alt = `${repoName} image` || 'Deafult image';

        const h3 = document.createElement('h3');
        h3.textContent = repoName;

        const p = document.createElement('p');
        p.textContent = description;

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);

        projects.appendChild(card);
      }
    })
    .catch(err => alert(err.message));

  cardScroll.addEventListener('scroll', () => {
    const cardScroll = document.querySelector('.scroller');
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const scrollRect = cardScroll.getBoundingClientRect();

      const isVisible = rect.right > scrollRect.left && rect.left < scrollRect.right;
      if (!isVisible) card.classList.add('blurry');
      else card.classList.remove('blurry');
    });
  });
});
