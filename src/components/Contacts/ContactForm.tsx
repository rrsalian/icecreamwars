import { useState } from "react";
import { Contact } from "../../models/Contacts/Contact";

export function ContactForm(props: {onAdd: (newContact: Contact) => void}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    // function handleFormSubmit(e: any) {
    //     e.preventDefault();
    //     const newContact = {
    //         firstName, lastName, phoneNumber, isFavorite
    //     };
        
    //     props.onAdd(newContact);
    // }

    return (
        <div>
            <form onSubmit={ e => {
                e.preventDefault();
                
                const newContact = {
                    firstName: firstName, 
                    lastName: lastName, 
                    phoneNumber: +phoneNumber, 
                    isFavorite: isFavorite
                };

                props.onAdd(newContact);
                
            }}>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                <label>Phone Number:</label>
                <input type="number" value={phoneNumber} onChange={e => setPhoneNumber(+e.target.value)}></input>
                <label>Favorite:</label>
                <input type="checkbox" checked={isFavorite} onChange={e => setIsFavorite(e.target.checked)}></input>
                <button>Add Contact</button>
            </form>
        </div>
    )
}