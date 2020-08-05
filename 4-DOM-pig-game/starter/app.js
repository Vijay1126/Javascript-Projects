/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, isTheGameActive;



initializeGame()

var diceDom = document.querySelector('.dice');

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1 . We need a random number
    if (isTheGameActive){
        var dice = Math.floor(Math.random()*6)+1;

    
        diceDom.style.display = 'block'
        diceDom.src = 'dice-' + dice + '.png'; 
    
        if (dice !== 1){
    
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
        }
        else{
            //Do something
            nextPlayer()
            
        }
    }
    
});

document.querySelector('.btn-new').addEventListener('click', initializeGame)
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (isTheGameActive){
        scores[activePlayer] += roundScore
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 20){
            isTheGameActive = false
            document.querySelector('#name-'+activePlayer).textContent = "Winner!";
            diceDom.style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
        }
        else{
            nextPlayer()
        }
    }

});

function nextPlayer() {
    activePlayer === 0? activePlayer = 1 : activePlayer = 0 
        roundScore = 0

        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDom.style.display = 'none'
}

function initializeGame(){
    isTheGameActive = true
    scores = [0,0]; 
    roundScore = 0;
    activePlayer = 0;
    
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
}


























