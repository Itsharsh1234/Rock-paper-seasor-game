  function getComputerChoice() {
    const moves = ['Rock', 'Paper', 'Scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    return moves[randomNumber]
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'draww'
    else if (playerSelection === 'rock' && computerSelection === 'scissor')
      return 'player'
    else if (playerSelection === 'rock' && computerSelection === 'paper')
      return 'computer'
    else if (playerSelection === 'paper' && computerSelection === 'scissor')
      return 'computer'
    else if (playerSelection === 'paper' && computerSelection === 'rock')
      return 'player'
    else if (playerSelection === 'scissor' && computerSelection === 'paper')
      return 'player'
    else if (playerSelection === 'scissor' && computerSelection === 'rock')
      return 'computer'
  }
  
  function game() {
    let playerPoints = 0,
      computerPoints = 0
    for (let i = 0; i < 3; i++) {
      let playerSelection = 'Choose'
      const computerSelection = getComputerChoice().toLowerCase()
      while (
        playerSelection !== 'rock' &&
        playerSelection !== 'paper' &&
        playerSelection !== 'scissor'
      ) {
        playerSelection = prompt(
          'Enter Your choice [Rock, Paper, Scissor] : '
        ).toLowerCase()
        if (
          playerSelection !== 'rock' &&
          playerSelection !== 'paper' &&
          playerSelection !== 'scissor'
        )
          console.log('Wrong Input')
      }
  
      const gameResult = playRound(playerSelection, computerSelection)
      if (gameResult === 'player') playerPoints++
      else if (gameResult === 'computer') computerPoints++
      console.log(
        `Round ${
          i + 1
        } : Player Move : ${playerSelection.toUpperCase()} | Points : ${playerPoints} || Computer Move : ${computerSelection.toUpperCase()} | Points : ${computerPoints}`
      )
    }
    if (computerPoints === playerPoints) alert('RESULTS : DRAWx')
    else if (playerPoints > computerPoints)
      alert('RESULTS: CONGRATULATIONS!!! YOU WIN !')
    else alert('RESULTS: YOU LOOSE! BETTER LUCK NEXT TIME !')
  }
  
  game()