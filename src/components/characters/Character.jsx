import React from 'react'
import PropTypes from 'prop-types'
import './characters.css'
export default function Character({id,image, name}) {
    return (
        <li>
            <img src={image}/>
            <p>{name}</p>
        </li>
    )
}

Character.propTypes = {
    image:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}



