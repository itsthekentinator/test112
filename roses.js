// Number of roses you want to generate
const numberOfRoses = 112;

// Get the roses container
const rosesContainer = document.querySelector('.roses-container');

// Create the roses and append them to the container
for (let i = 0; i < numberOfRoses; i++) {
  const rose = document.createElement('div');
  rose.classList.add('rose');
  rosesContainer.appendChild(rose);
}
