import builder from "./contact"
import api from "./contactCollection"


const search = () => {
    let searchVal = document.querySelector("#searchValue").value
    let searchType = document.querySelector("#searchType").value
    if(searchType === "name"){
        let searchValArray = searchVal.split(" ")
        let searchCat = "nameLast"
        console.log(searchCat, searchValArray[1])
        api.searchContact(searchCat, searchValArray[1])
            .then(reply => {
                builder(reply[0], "#results")
            })
    }else{
        api.searchContact(searchType, searchVal)
        .then(reply => {
            builder(reply, "#results")
        })
    }
}

export default search