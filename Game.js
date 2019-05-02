
var score = 0

const userScore_span = document.getElementById("scoreA")
const water_div = document.getElementById("water")
const fire_div = document.getElementById("fire")
const air_div = document.getElementById("air")


  function main(){
    water_div.addEventListener('click', function () {
            game(1)
        })
      fire_div.addEventListener('click', function () {
          game(2)
      })
      air_div .addEventListener('click', function () {
          game(3)
      })
    }
  function game(userChoice) {
    userVsComp(userChoice)
  }
  //1 is water 2 is fire 3 is air
  function computersTurn()
  {
      var compChoice =Math.floor((Math.random() *3)) +1
      return compChoice
  }
 game()

function userVsComp(userChoice, compChoice = computersTurn()) {
    console.log(compChoice)
    console.log(userChoice)
    if((compChoice == 1 && userChoice ==1) ||(compChoice == 2 && userChoice ==2) || (compChoice == 3 && userChoice ==3))
    {
        document.getElementById("winP").innerText = "It is a tie"
        console.log("Its a tie")
    }
    else if((compChoice ==1 && userChoice ==2) || (compChoice ==2 && userChoice ==3) || (compChoice ==3 && userChoice ==1))
    {
        document.getElementById("winP").innerText = "Computer wins this round"
        console.log("Computer wins")
    }
    else if((compChoice ==2 && userChoice ==1) || (compChoice ==3 && userChoice ==2) || (compChoice ==1 && userChoice ==3))
    {
        document.getElementById("winP").innerText = "You win this round"
        console.log("You win")
        score += 1
    }
    console.log(score)
    userScore_span.innerHTML = score.toString();
}
main()
game()