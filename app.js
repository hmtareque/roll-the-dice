let player1score = [];
let player2scroe = [];

let activePlayer = 0;

// new game 
const newGameBtn = document.querySelector('.btn-new');
newGameBtn.addEventListener('click', function(){
    console.log('new game');
});

// roll dice actions 
const rollDiceBtn = document.querySelector('.btn-roll');
rollDiceBtn.addEventListener('click', function(){
    console.log('roll the dice');
});

// hold actions 
const holdPontBtn = document.querySelector('.btn-hold');
holdPontBtn.addEventListener('click', function(){
    console.log('hold the points');
});