const main = document.querySelector(".container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.createElement("div");
const human = document.createElement("p");
const computer = document.createElement("p");
const tie = document.createElement("p");
const humanChoiceComputerChoice = document.createElement("p");
const result = document.querySelector(".container");
let textComputerScore = "Computer score = ";
let textHumanScore = "Human score = "
let textTie = "Ties in the math = " ;

container.appendChild(human);
container.appendChild(computer);
container.appendChild(tie);
main.appendChild(container);
computer.textContent = textComputerScore + 0;
human.textContent = textHumanScore + 0; 
tie.textContent = textTie + 0;
const buttonOptions = document.querySelectorAll(".buttons > button")
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function getComputerChoice() {
            const options = ['rock', 'paper', 'scissors'];
            let randomOption = Math.floor(Math.random() * options.length)
            let result = options[randomOption]
            return result;
        }

function getHumanChoice() {
        return button.textContent.toLowerCase();
        
        }

function playRound(getComputerChoice, getHumanChoice) {
    humanChoiceComputerChoice.textContent = `Computer: ${getComputerChoice} ------X------ Human: ${getHumanChoice}`
    result.appendChild(humanChoiceComputerChoice);
    switch (getComputerChoice) {
        case 'paper':  
            if(getHumanChoice == 'paper') {
                ++tieScore;
                tie.textContent = textTie + tieScore;
            } else if (getHumanChoice == 'rock') {
                ++computerScore;
                computer.textContent = textComputerScore + computerScore;
            } else if (getHumanChoice == 'scissors') {
                ++humanScore;
                human.textContent = textHumanScore + humanScore;
            }
        break;
        case 'rock': 
            if(getHumanChoice == 'paper') {
                ++humanScore;
                human.textContent = textHumanScore + humanScore;
            
            } else if (getHumanChoice == 'scissors') {
                ++computerScore;
                computer.textContent = textComputerScore + computerScore;
            } else if (getHumanChoice == 'rock') {
                ++tieScore;
                tie.textContent = textTie + tieScore;
            }
        break;
        case 'scissors': 
            if(getHumanChoice == 'paper') {
                ++computerScore;
                computer.textContent = textComputerScore + computerScore;
                } else if (getHumanChoice == 'scissors') {
                ++tieScore;
                tie.textContent = textTie + tieScore;
                } else if (getHumanChoice == 'rock') {
                ++humanScore;
                human.textContent = textHumanScore + humanScore;
                }
        break;   
    }
}

buttonOptions.forEach((button) => {
    
    button.addEventListener("click", () => { 
        
        let computerChoiceOk = getComputerChoice();
        let humanChoiceOk = button.textContent.toLocaleLowerCase();
        
          
        playRound(computerChoiceOk, humanChoiceOk);
        
        if(humanScore === 5) {
            human.textContent = `Human score = 5. Congratulations, you won this one!`;
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            rock.style.backgroundColor = "#E2DED2";
            paper.style.backgroundColor = "#E2DED2";
            scissors.style.backgroundColor = "#E2DED2";
            const btnReset = document.createElement("button");
            btnReset.id = "reset";
            btnReset.textContent = "Reset";
            container.appendChild(btnReset);
             btnReset.addEventListener("click", () => {
               window.location.reload();
            });
            
        } else if (computerScore === 5) {
            computer.textContent = `Computer score = 5. Unfortunately, you lost this one!`;
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            rock.style.backgroundColor = "#E2DED2";
            paper.style.backgroundColor = "#E2DED2";
            scissors.style.backgroundColor = "#E2DED2";
            const btnReset = document.createElement("button");
            btnReset.id = "reset";
            btnReset.textContent = "Reset";
            container.appendChild(btnReset);
            btnReset.addEventListener("click", () => {
                window.location.reload();
            });
        }    
    })
});
