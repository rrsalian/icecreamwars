import { useState } from "react";
import { Contact } from "../../models/Contacts/Contact";
import { Header } from "./Header";
import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";

export function Home() {

    const [ contacts, setContacts ] = useState<Contact[]>([]);

    return (
        <div>
            <Header></Header>
            <ContactForm onAdd={(newContact: Contact) => setContacts([...contacts, newContact])}></ContactForm>
            <ContactList contacts={contacts}></ContactList>
        </div>
    )    
}