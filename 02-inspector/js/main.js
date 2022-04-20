document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This is Chief Inspector Clouseau"

function reDisplay(){
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top`
let location = `The URL is: ${window.location}`
let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${location}`
}

reDisplay()

let docTitle = `The title of the document is ${document.title}`
let docUpdates = `The document was last updated on ${document.lastModified}`
let myDocument = document.querySelector('#myDocument').innerText = `${docTitle} \n   ${docUpdates}`



