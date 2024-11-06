//get json
const petPromise = await fetch(
  'https://learnwebcode.github.io/pet-adoption-data/pets.json'
);
const pets = await petPromise.json();

//query selectors
const animals = document.querySelector('.animals');
const filterButtons = document.querySelectorAll('.filter-nav button');

//Event Listeners
filterButtons.forEach(el => {
  el.addEventListener('click', handleFilterClick);
});

//calling functions
pets.forEach(pet => {
  addMarkup(pet);
});

//functions
function addMarkup(pet) {
  const currentYear = 2024;
  const markup = `      
    <div class="animal-card">
        <div class="animal-card-text">
          <h3>${pet.name}</h3>
          <small
            ><span class="age">${currentYear - +pet.birthYear} yeas old</span> -
            <span class="species">${pet.species}</span></small
          >
          <p class="description">
            ${pet.description}
          </p>
          <a href="https://learnwebcode.github.io/pet-adoption-data/pets/${
            pet.id
          }/" class="primary-btn">Adopt ${pet.name}</a>
        </div>
        <div class="animal-card-photo">
          <img
            src="${pet.photo}"
            alt="a cat names ${pet.name}"
          />
        </div>
    </div>
    `;
  animals.insertAdjacentHTML('beforeend', markup);
}

function handleFilterClick(e) {
  e.preventDefault();
  filterButtons.forEach(el => el.classList.remove('active'));

  e.target.classList.add('active');
  filterPets(e.target.dataset.filter);
}

function filterPets(species) {
  const allPets = document.querySelectorAll('.animal-card');
  if (species === 'all') allPets.forEach(el => (el.style.display = ''));
  else
    allPets.forEach(el => {
      if (el.querySelector('.species').textContent === species)
        el.style.display = '';
      else el.style.display = 'none';
    });
}
