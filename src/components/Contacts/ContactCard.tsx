import { Contact } from "../../models/Contacts/Contact";

export function ContactCard(props: {contact: Contact}) {
    return (
        <div>
            First Name: {props.contact.firstName}
            Last Name: {props.contact.lastName}
            Phone Number: {props.contact.phoneNumber}
            Favorite : {props.contact.isFavorite}            
        </div>
    )
}