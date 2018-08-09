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
]

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

// Initialise the guessing variables
let firstGuess = '';
let secondGuess = '';

// Initialise the count variable 
let count = 0;

let previousTarget = null;

// if count is less that 2 increment 
if (count < 2) {
    count++;

    // Add selected class
    clicked.classList.add('selected')
}

// Randomise game grid on each load 
gameGrid.sort(() => 0.5 - Math.random());

// Add match cass 
const match = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
}

// Find a div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

// For each item in the 'gameGrid' array
gameGrid.forEach(item => {

    // Create a div
    const card = document.createElement('div');

    // Apply a card class to the div 
    card.classList.add('card');

    // Set the data-name attribute of the div to the cardsArray name 
    card.dataset.name = item.name;

    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`;

    // Append the div to the grid section
    grid.appendChild(card);
});

// Add event listener to grid
grid.addEventListener('click', function (event) {
    
    // The event target is our clicked item
    let clicked = event.target;
  
    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (clicked.nodeName === 'SECTION') { return; }
    
    // Add selected class
    clicked.classList.add('selected');

   if (count < 2) {
    count++;
    if (count === 1) {
      // Assign first guess
      firstGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    } else {
      // Assign second guess
      secondGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    }
    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function
        match();
      } 
    }  
  }
});
