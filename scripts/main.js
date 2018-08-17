// Preloader before showing game
var myVar;

function preLoader() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// Card Data 
const cardsArray = [{
    'name': 'shell',
    'img': 'media/images/blueshell.png',
  },

  {
    'name': 'star',
    'img': 'media/images/star.png',
  },

  {
    'name': 'bobomb',
    'img': 'media/images/bobomb.png',
  },

  {
    'name': 'mario',
    'img': 'media/images/mario.png',
  },

  {
    'name': 'luigi',
    'img': 'media/images/luigi.png',
  },

  {
    'name': 'peach',
    'img': 'media/images/peach.png',
  },

  {
    'name': '1up',
    'img': 'media/images/1up.png',
  },

  {
    'name': 'mushroom',
    'img': 'media/images/mushroom.png',
  },

  {
    'name': 'thwomp',
    'img': 'media/images/thwomp.png',
  },

  {
    'name': 'bulletbill',
    'img': 'media/images/bulletbill.png',
  },

  {
    'name': 'coin',
    'img': 'media/images/coin.png',
  },

  {
    'name': 'goomba',
    'img': 'media/images/goomba.png',
  },
];

// Randomise the 'gameGrid on each load 
const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

// Selection of block scope varables
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
// Set the duration for 1200ms (1.2 seconds) between guesses 
let delay = 1200;

// Find the div with an ID of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the 'gameGrid' array 
gameGrid.forEach(item => {
  const { name, img } = item;

  // Create a card element with the name dataset
  const card = document.createElement('div');

  // Apply a card class to that div
  card.classList.add('card');

  card.dataset.name = name;

  // Create the front element of the card
  const front = document.createElement('div');
  front.classList.add('front');

  // Create the back element of the card 
  const back = document.createElement('div');
  back.classList.add('back');

  // Apply the background image of the div to the cardsArray image
  back.style.backgroundImage = `url(${img})`;

  // Append card to the grid and front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// Loop through all 'selected' element once called and then add the 'match' class
const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

// reset the guesses after two attempts back to 0
const resetGuesses = () => {

  // Place holder variables to store guesses 
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;
  
  // Removed the selected CSS after the two guesses have been made
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {

    card.classList.remove('selected');
  });
};

// Add an event listner to the grid 
grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    // Do not allow the grid section itself to be selected; only the selected divs inside the grid
    clicked.nodeName === 'SECTION' || clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    // To prevent already matched items from being selected again.
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      // Assign the first guess
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      // Assign the second guess 
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    // If both guesses are made 
    if (firstGuess && secondGuess) {
      // and the first guess matches the second match >
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    // Set previous target to clicked
    previousTarget = clicked;
  }

});
