let frameIn = document.getElementById("generator-insert")
let verseBox = document.querySelector(".verse-box")
if (frameIn != null) {
    verseBox.style.color = frameIn.dataset.color
    verseBox.style.fontSize = frameIn.dataset.size
    verseBox.style.fontFamily = frameIn.dataset.font
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

function rand(max) {
    randNum = Math.floor(Math.random() * (max - 1) + 1)
}

function fill(jsonObj) {
    rand(+jsonObj['total'] - 7)
    verse.textContent = jsonObj[`verse${randNum}`]
    link.textContent = jsonObj[`link${randNum}`]
}