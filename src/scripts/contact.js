function createContactDisplay (obj, target) {
    let div = document.createElement("div")
    div.setAttribute("id", `contact${obj.id}`)
    div.setAttribute("class", "contact")
    let name = document.createElement("h1")
    name.textContent = `Name: ${obj.nameFirst} ${obj.nameLast}`
    let number = document.createElement("h2")
    number.textContent = `Phone Number: ${obj.phone}`
    let address = document.createElement("h2")
    address.textContent = `Address: ${obj.street} ${obj.city}, ${obj.state} ${obj.zip}`
    let hr = document.createElement("hr")
    div.appendChild(name)
    div.appendChild(number)
    div.appendChild(address)
    div.appendChild(hr)

    document.querySelector(target).appendChild(div)
}

const contact = (contactObj, target) => {
        createContactDisplay(contactObj, target)
    }

export default contact