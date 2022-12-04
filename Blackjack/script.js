let firstCard, secondCard;
let sum = 0
let card = []
let hasBlackJack = false
let message = ""
let isAlive = false
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function startGame() {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < card.length; i++){
        cardsEl.textContent += card[i] + " - " 
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Black Jack!!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game..."
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newcard = getRandomCard()
        sum += newcard
        card.push(newcard)
        renderGame()
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1 // number from 1-13
    if (randomCard >= 11) randomCard = 10
    else if (randomCard === 1 ) randomCard = 11
    return randomCard
}