import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({character}) => {
    return (
        <div className={character.rarity === 5 ? "5star" : "4star"}>
            <img alt={`${character.name} icon`} src={require(`../../images/${character.imagePath}/icon.png`)}/>
            <span>{character.name}</span>
        </div>
    )
}

export default Card