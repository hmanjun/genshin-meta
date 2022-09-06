import React from 'react'
import './style.css'

const InfoSection = ({character}) => {
    return (
        <div className='basic-info-holder'>
            <div className={character.rarity === 5 ? "gold spread" : "purple spread"}>
                <img className='spread-icon' alt={`${character.name} icon`} src={require(`../../images/${character.imagePath}/icon.webp`)}/>
                <img className='spread-ele' alt="element" src={require(`../../images/${character.imagePath}/element.png`)}/>
            </div>
            <table className='table'>
                <tr className='table-row t-l'>
                    <span className='th-col t-l'>Name</span>
                    <span className='tr-cont t-l'>{character.name}</span>
                </tr>
                <tr className='table-row t-b'>
                    <span className='th-col t-b'>Nation</span>
                    <span className='tr-cont t-b'>{character.nation}</span>
                </tr>
                <tr className='table-row t-l'>
                    <span className='th-col t-l'>Rarity</span>
                    <span className='tr-cont t-l'>{`${character.rarity}-star`}</span>
                </tr>
                <tr className='table-row t-b'>
                    <span className='th-col t-b'>Weapon</span>
                    <span className='tr-cont t-b'>{character.weaponType}</span>
                </tr>
                <tr className='table-row t-l'>
                    <span className='th-col t-l'>Element</span>
                    <span className='tr-cont t-l'>{character.vision}</span>
                </tr>
                <tr className='table-row t-b'>
                    <span className='th-col t-b'>Description</span>
                    <span className='tr-cont t-b'>{character.description}</span>
                </tr>
            </table>
        </div>
    )
}

export default InfoSection