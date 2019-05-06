const contactCollection = {
    getContacts: () => {
        return fetch("http://localhost:8088/contacts")
        .then(response => response.json())
    },
    saveContact: (obj) => {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json());
    },
    searchContact: (searchKey, searchValue) => {
        return fetch(`http://localhost:8088/contacts?${searchKey}=${searchValue}`)
        .then(response => response.json())
    }
}

export default contactCollection