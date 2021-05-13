const cards = document.querySelector(".cards")
const cardsNavRight = document.querySelector(".cards-nav-right")
const cardsNavLeft = document.querySelector(".cards-nav-left")
const allCards = document.querySelectorAll(".card")
const singleCardWidth = allCards[0].scrollWidth + 16
const allCardsWidth = (singleCardWidth * allCards.length)
const viewportWidth = window.innerWidth
const endPoint = -Math.abs(allCardsWidth - viewportWidth)
let scrollAmount = viewportWidth
let clicksRight = 0;

cardsNavRight.addEventListener("click", (e) => {
    clicksRight = clicksRight + 1
    scrollAmount = -Math.abs(scrollAmount)
    cards.style.left = `${scrollAmount*clicksRight}px`;
    cardsNavLeft.classList.remove("disabled")
    let numericValue = -Math.abs(`${-scrollAmount*clicksRight}`)

    if (numericValue < endPoint) {
        cardsNavRight.classList.add("disabled")
        cards.style.left = `${endPoint}px`
    }
})

cardsNavLeft.addEventListener("click", (e) => {
    clicksRight = clicksRight - 1
    cards.style.left = `${scrollAmount*clicksRight}px`;
    cardsNavRight.classList.remove("disabled")
    let numericValue = -Math.abs(`${-scrollAmount*clicksRight}`)

    if (numericValue === 0) {
        cardsNavLeft.classList.add("disabled")
    }
})