import { Contact } from "../../models/Contacts/Contact"
import { ContactCard } from "./ContactCard"

export function ContactList(props: { contacts: Contact[] }) {
    return (
        <div>
            <h3>Contacts</h3>
            {
                props.contacts.map(contact => <ContactCard contact={contact}></ContactCard>)
            }
        </div>
    )
}