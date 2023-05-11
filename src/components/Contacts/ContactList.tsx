import { Contact } from "../../models/Contacts/Contact"
import { ContactCard } from "./ContactCard"

export function ContactList(props: { contacts: Contact[], onUpdate: (contact:Contact) => void, onDelete: (contact: Contact) => void }) {
    return (
        <div>
            <h3>Contacts</h3>
            {
                props.contacts.map(contact => <ContactCard contact={contact} onUpdate={props.onUpdate} onDelete={props.onDelete}></ContactCard>)
            }
        </div>
    )
}