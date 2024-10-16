import axios from "axios";

export class ContactServices {
    static serverURL = "http://localhost:9000"

    static getContacts(){
        let contactURL = `${this.serverURL}/contacts`;
        return axios.get(contactURL);
    }

    static creatContacts(Contact) {
        let contactURL = `${this.serverURL}/contacts`
        return axios.post(contactURL, Contact);
    }

    static getSingleContact(Contact) {
        let contactURL = `${this.serverURL}/contacts/${Contact}`
        return axios.get(contactURL);
    }

    static editContact(Contact, contactid) {
        let contactURL = `${this.serverURL}/contacts/${contactid}`
        return axios.put(contactURL, Contact);
    }

    static deleteContact(Contact) {
        let contactURL = `${this.serverURL}/contacts/${Contact}`
        return axios.delete(contactURL);
    }
}