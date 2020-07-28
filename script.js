const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreBoard = {
    player: 0,
    computer: 0
}

//Play Game
const play = (e) =>{
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = getWinner(playerChoice,computerChoice);
    showWinner(winner,computerChoice);
}

//get Computer choice
const getComputerChoice = () =>{
    const rand = Math.random();
    if(rand<0.33){
        return 'rock';
    }
    else if(rand >0.66){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

//get winner
const getWinner = (player,computer) =>{
    if(player === computer){
        return 'draw'
    }
    else if(player === 'rock'){
        if(computer === 'paper'){
            return 'computer'
        }
        else{
            return 'player'
        }
    }
    else if(player === 'paper'){
        if(computer === 'scissors'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(player === 'scissors'){
        if(computer === 'rock'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
};

const showWinner = (winner,computerChoice) =>{
    if(winner === 'player'){
        scoreBoard.player++;
        //Show Modal
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    }else if(winner === 'computer'){
        scoreBoard.computer++;
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    }
    else{
        result.innerHTML = `
        <h1>It's a Draw</h1>
        <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `
    }

    //score
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    `
    modal.style.display = 'block';
}

const clearModal = (e) =>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
}

const restartGame = (e) =>{
    restart.style.display = 'none';
    scoreBoard.player=0;
    scoreBoard.computer=0;
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    `
}

//Event Listernes
choices.forEach(choice => {
    choice.addEventListener('click',play);
});

window.addEventListener('click',clearModal);

restart.addEventListener('click',restartGame);