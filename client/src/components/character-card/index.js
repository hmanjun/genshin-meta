import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Card = ({character}) => {
    return (
        <Link to={`/characters/${character.name}`} className={character.rarity === 5 ? "gold char-card" : "purple char-card"}>
            <img alt={`${character.name} icon`} src={require(`../../images/${character.imagePath}/icon.png`)}/>
            <div className='card-name'><h5>{character.name}</h5></div>
        </Link>
    )
}

export default Card