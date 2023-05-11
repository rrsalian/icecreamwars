import { Contact } from "../../models/Contacts/Contact";

export function ContactCard(props: {contact: Contact , onUpdate: (contact:Contact) => void, onDelete: (contact: Contact) => void}) {
    return (
        <div>
            First Name: {props.contact.firstName}
            Last Name: {props.contact.lastName}
            Phone Number: {props.contact.phoneNumber}
            <label>
                <input type="checkbox" checked={props.contact.isFavorite}></input>                  
            </label>
        </div>
    )
}