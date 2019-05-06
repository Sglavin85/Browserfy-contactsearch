import builder from "./contactList"
import contact from "./contactForm"
import search from "./searchContacts"
const allContactsBtn = document.querySelector("#seeAllContacts")
const newContactBtn = document.querySelector("#submitBtn")
const searchContactsBtn = document.querySelector("#searchContacts")
const addContactsBtn = document.querySelector("#newContact")
const submitSearchBtn = document.querySelector("#submitSearch")

allContactsBtn.addEventListener("click", () => {
    builder.allContacts()
})


newContactBtn.addEventListener("click", () => {
    contact()
})

submitSearchBtn.addEventListener("click", () => {
    search()
})



function displayToggle (button, element) {
let target = button
target.addEventListener("click", () => {
    let div = document.querySelector(element)
    div.classList.toggle("off")
    div.classList.toggle("on")
})
}

displayToggle(addContactsBtn, ".form")
displayToggle(allContactsBtn, ".allContacts")
displayToggle(searchContactsBtn, ".search")