import { useState } from "react";

export function Typing () {
    const [ message, setMessage ] = useState('Henry');
    return (
        <div>
            <input value={message} onChange={e => setMessage(e.target.value)} />
            {message}
        </div>
    )
}