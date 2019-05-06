import api from "./contactCollection"

let newContact = () => {
    let newNameF = document.querySelector("#nameF").value
    let newNameL = document.querySelector("#nameL").value
    let newPhone = document.querySelector("#phone").value
    let newEmail = document.querySelector("#email").value
    let newStreet = document.querySelector("#street").value
    let newCity = document.querySelector("#city").value
    let newState = document.querySelector("#state").value
    let newZip = document.querySelector("#zip").value
    let contact = {
        nameFirst: newNameF,
        nameLast: newNameL,
        phone: newPhone,
        email: newEmail,
        street: newStreet,
        city: newCity,
        state: newState,
        zip: newZip
    }
    api.saveContact(contact)
}

export default newContact