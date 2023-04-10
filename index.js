let player = {
    name: "User",
    chips: 100
}
let pot =0
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let funds =document.getElementById("funds-el")
playerEl.textContent = player.name + ": $" + player.chips
//funds.textContent=pl
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function noFunds(){
    funds.textContent="!!!NOT ENOUGH FUNDS!!!";
    
}
function startGame() {
    if(player.chips>0){
    pot+=10
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    }
    else{
        noFunds();
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips+=pot
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips-=pot
        playerEl.textContent = player.name + ": $" + player.chips
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        pot+=10
        renderGame()        
    }
}

function addBalance(){
    player.chips+=100;
    playerEl.textContent = player.name + ": $" + player.chips
   // pl=player.chips;
}
