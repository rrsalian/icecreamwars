import { useState, useEffect } from "react";

import { getQuotes } from "../../services/QuotesService";
export function Quotes() {
    const [quotes, setQuotes] = useState<any[]>([]);

    useEffect( () => {
        getQuotes().then(data => setQuotes(data));
    },[])

    return (
        <div>
            {
                quotes?.map( quote => 
                    <ul>
                        <li> {quote.text} - {quote.author} </li>
                    </ul>    
                )
            }

        </div>
    )
}