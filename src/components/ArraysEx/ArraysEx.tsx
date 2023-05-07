import { useState } from "react"
import { Pet } from "./Pet";

export function ArraysEx () {

    const [colors, setColors] = useState (['red', 'orange', 'yellow'])

    const [pets, setPets] = useState<Pet[]> ([ { name: 'Fluffer Nutters', type : 'cat', id: 1 } ,
                                        { name: 'Mocha', type : 'dog', id: 2 },
                                        { name: 'Sophie', type : 'hamster', id: 3 }])

    function addColor(color:string):void {
        setColors([...colors, color])
    }

    function deletePetByIndex(index: number) {
        setPets([...pets.splice(0, index), ...pets.splice(index + 1)]);
    }

    function deletePetById(id: number) {
        setPets(pets.filter(pet => pet.id !== id));
    }

    function deletePetByPet(pet: Pet) {
        setPets(pets.filter(p => p.id !== pet.id));
    }
    
     function changeName(newName: string) {
    //     setNewPet({...newPet, name: newName});
     }

    return (
        <div>
            <ol>
                {
                    colors.map((color,i) => <li key={i}>{ color }</li>)
                }
            </ol>
            <button disabled={colors.includes("Green")} onClick={() => addColor('Green')}>Add Green</button>
            <button disabled={colors.includes("Blue")} onClick={() => addColor('Blue')}>Add Blue</button>
            <button disabled={colors.includes("Violet")} onClick={() => addColor('Violet')}>Add Violet</button>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Action</th>
                    <th>Change Name</th>
                </tr>
                {
                    pets.map((pet,i) => <tr key={pet.id}>
                                            <td>{pet.name}</td>
                                            <td>{pet.type}</td>
                                            <button onClick={() => deletePetByIndex(i)}>Delete</button>
                                            <button onClick={() => changeName('Chilli')}>Change Name</button>
                                        </tr>)
                    
                }
                
            </table>
        </div>
    )
}