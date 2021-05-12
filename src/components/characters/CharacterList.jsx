import React from 'react'
import Character from './Character'

export default function CharacterList({characters}) {
    return (
        <ul aria-label='characters'>
            {characters.map(character=>(
            <Character 
            key={character._id}
            id={character._id}
            image={character.image}
            name={character.name}
            /> 
            ))}
        </ul>
   
)
}
        
                        

