import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

export default function CharacterList({ characters }) {
  return (
    <ul aria-label="characters">
      {characters.map(character => (
        <Character 
          key={character._id}
          id={character._id}
          image={character.image}
          name={character.name}
        /> 
      ))}
    </ul>
   
  );
}
        
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};                        

