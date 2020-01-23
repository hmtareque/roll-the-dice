var scores, roundPoints, activePlayer;

init();

// new game 
const newGameBtn = document.querySelector('.btn-new');
newGameBtn.addEventListener('click', init);

// roll dice actions 
const rollDiceBtn = document.querySelector('.btn-roll');
rollDiceBtn.addEventListener('click', function () {

    dice.style.display = 'block';
    var diceNo = Math.floor((Math.random() * 6) + 1);
    dice.src = 'dice-' + diceNo + '.png';

    document.querySelector('.btn-hold').style.display = 'block';

    if (diceNo !== 1) {
        roundPoints += diceNo;
        document.querySelector('#current-' + activePlayer).textContent = roundPoints;
    } else {
       nextPlayer();
    }
});

// hold actions 
const holdPontBtn = document.querySelector('.btn-hold');
holdPontBtn.addEventListener('click', function () {
    console.log(roundPoints);
    scores[activePlayer] += roundPoints;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';

        this.style.display = 'none';

        document.querySelector('.btn-new').style.display = 'block';
        document.querySelector('.btn-roll').style.display = 'none';

    } else {
        nextPlayer();
    }

});

function nextPlayer() {

    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundPoints = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}


function init() {
    scores = [0, 0];
    roundPoints = 0;
    activePlayer = 0;
    dice = document.querySelector('.dice');
    dice.style.display = 'none';

    document.querySelector('.btn-new').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'none';
}