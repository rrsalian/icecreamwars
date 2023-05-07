import { useState } from "react";
import { Child } from "./Child";

export function Parent() {

const [ name, setName ] = useState('');

    return (
        // <div>
        //     <Child name='Jack' getAttention={ name => console.log(`!!!${name} wants your Attention`)}></Child>
        //     <Child name='Henry' getAttention={ name => console.log(`!!!${name} wants your Attention`)}></Child>
        // </div>
        <div>
            <h1>You need to talk to: {name}</h1>
            <Child name='Jack' getAttention={ name => setName(name)}></Child>
            <Child name='Henry' getAttention={ name => setName(name)}></Child>
        </div>

    )
}