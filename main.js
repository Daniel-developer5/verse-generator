let frameIn = document.getElementById("generator-insert")
if (frameIn != null) {
    frameIn.style.color = frameIn.dataset.color
    frameIn.style.fontSize = frameIn.dataset.size
    frameIn.style.fontFamily = frameIn.dataset.font
}

let requestURL = 'https://daniel-developer5.github.io/json-verses/verses.json'
let request = new XMLHttpRequest()

let verse = document.querySelector(".verse")
let link = document.querySelector(".verse-link")

request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.addEventListener('load', () => {
    let cont = request.response
    fill(cont)
})

let randNum
let prevNum

function rand() {
    randNum = Math.floor(Math.random() * (11 - 1) + 1)
    if (randNum === prevNum) {
        rand()
    }
    prevNum = randNum
}

rand()

function fill(jsonObj) {
    verse.textContent = jsonObj[`verse${randNum}`]
    link.textContent = jsonObj[`link${randNum}`]
}