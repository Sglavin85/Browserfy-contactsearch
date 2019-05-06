import api from "./contactCollection"
import display from "./contact"

const listBuild = {
    allContacts: () => {api.getContacts()
                    .then(reply => {
                    reply.forEach(obj => {
                    display(obj, ".allContacts")
                    });
                    })
    }
}

export default listBuild