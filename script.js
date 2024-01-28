document.addEventListener('DOMContentLoaded', function () {
    const featuredMovies = [
      {
        title: 'beast',
        image: 'beast.jpg',
        description: 'A indian raw agent saves the a shopping mall and saves civilian people and caught the dangerous terrorist attack from india.',
      },
      {
        title: 'Salaar part-1 ceasefire',
        image: 'Salaar1.jpg',
        description: 'A gang leader tries to keep a promise made to  his dying friend and takes on the other criminal gangs.',
      },
      {
        title: 'Hi-nanna',
        image: 'Hi-nanna.jpg',
        description: 'Single father begins to narrate the story of the missing mother to his child and nothing remains the same.',
      },
    ];
  
    const movieContainer = document.querySelector('.movie-container');
  
    featuredMovies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-details">
          <h3>${movie.title}</h3>
          <p>${movie.description}</p>
        </div>
      `;
  
      movieElement.addEventListener('click', () => {
        movieElement.classList.toggle('active');
      });
  
      movieContainer.appendChild(movieElement);
    });
  });
  