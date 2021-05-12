import React from 'react';
import PropTypes from 'prop-types';
import './characters.css';
import { Link } from 'react-router-dom';

export default function Character({ id, image, name }) {
  return (
    <Link to={`/${id}`}>
      <li>
        <img src={image}/>
        <p>{name}</p>
      </li>
    </Link>
  );
}

Character.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
       
