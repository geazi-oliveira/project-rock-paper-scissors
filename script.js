function playGame() {
   
    let humanScore = 0;
    let computerScore = 0;
    let tie = 0;
    for (i=1; i <= 5; i++) {
        let computerChoiceOk = getComputerChoice();
        let choiceOk = getHumanChoice();
        console.log(`Round ${i}`)
            
        function getComputerChoice() {
            const options = ['rock', 'paper', 'scissors'];
            let randomOption = Math.floor(Math.random()* options.length)
            let result = options[randomOption]
            return result;
        } //This function generates the computer's choice
                                      
    
        function getHumanChoice() {
            let choice = prompt('Choice rock, paper ou scissors!'); 
            return choice.toLowerCase();
        } //Gathers the user's input
    
        function playRound(getComputerChoice, getHumanChoice) {
            switch (getComputerChoice) {
                case 'paper':  
                    if(getHumanChoice == 'paper') {
                        console.log('It\'s a tie! Paper ties with paper!')
                        ++tie;
                    } else if (getHumanChoice == 'rock') {
                        console.log('You lost! Paper beats rock!')
                        return ++computerScore;
                    } else if (getHumanChoice == 'scissors') {
                        console.log('You won! Scissors beats paper!')
                        return ++humanScore;
                    }
                break;
                case 'rock': 
                    if(getHumanChoice == 'paper') {
                        console.log('You won! Paper beats rock!')
                        ++humanScore;
                    
                    } else if (getHumanChoice == 'scissors') {
                        console.log('You lost! Rock beats scissors!')
                        ++computerScore;
                    } else if (getHumanChoice == 'rock') {
                        console.log('Rock ties with rock!')
                        ++tie;
                    }
                break;
                case 'scissors': 
                    if(getHumanChoice == 'paper') {
                        console.log('You lost! Scissors beats paper!')
                        ++computerScore;
                        } else if (getHumanChoice == 'scissors') {
                        console.log('Scissors ties with scissors.')
                        ++tie;
                        } else if (getHumanChoice == 'rock') {
                        console.log('You won! Rock beats scissors.')
                        ++humanScore;
                        }
                break;   
            }
        }  //Check for the winner
        playRound(computerChoiceOk, choiceOk);
    }
    console.log('Result:')
    if(humanScore > computerScore) { //Announce the winner
        console.log(`You won ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost ${computerScore} - ${humanScore}`);
    } else  {
        console.log(`This game was a tie ${computerScore} - ${humanScore}`)
    }
    
    if(tie > 0) { // Announce the draws
        console.log(`This match had ${tie} tie.`)
    } 
}
    
playGame();
    