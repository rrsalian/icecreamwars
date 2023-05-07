import { useState } from "react";
import "./Shapes.css"

export function Shapes () {

    const [ diameter, setDiameter ] = useState('180');
    const [ isCircle, setCircle ] = useState(false);
    
    return (
        <div>
            <input value={diameter} onChange={e => setDiameter(e.target.value)} />
            Diameter
            <input type="checkbox" checked={isCircle} onChange={e => setCircle(e.target.checked)}/>
            Is Circle
            <div className={ isCircle ? 'shape circle' : 'shape' } style = {{ 
                    width: `${diameter}px`,
                    height: `${diameter}px`
                }}>
            </div>
        </div>
    )
}