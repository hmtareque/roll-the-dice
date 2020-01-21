var scores = [0, 0];

var roundPoints = 0;
var activePlayer = 0;

//console.log(diceNo);

var dice = document.getElementById('dice');

//dice.src = 'dice-' + diceNo + '.png';

// new game 
const newGameBtn = document.querySelector('.btn-new');
newGameBtn.addEventListener('click', function () {
    console.log('new game');

    dice.style.display = "none";

    // set active player
    // reset all score 
});

// roll dice actions 
const rollDiceBtn = document.querySelector('.btn-roll');
rollDiceBtn.addEventListener('click', function () {

    console.log('roll the dice');
    dice.style.display = 'block';
    var diceNo = Math.floor((Math.random() * 6) + 1);
    dice.src = 'dice-' + diceNo + '.png';

    console.log(activePlayer);

    if (diceNo > 1) {
        roundPoints += diceNo;
        document.querySelector('#score-' + activePlayer).textContent = roundPoints;
        document.querySelector('#current-' + activePlayer).textContent = diceNo;
    } else {
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer();
    }

    //scores[activePlayer] += roundPoints;
});

// hold actions 
const holdPontBtn = document.querySelector('.btn-hold');
holdPontBtn.addEventListener('click', function () {
   console.log(roundPoints);
   scores[activePlayer] += roundPoints;
   nextPlayer();
});

function nextPlayer() {

    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundPoints = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.getElementById('dice').style.display = 'none';
}