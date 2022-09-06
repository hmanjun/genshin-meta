import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { QUERY_CHARACTER } from '../../utils/queries'

import InfoSection from '../../components/basic-info-section'
import TalentContainer from '../../components/talent-container'
import ConstContainer from '../../components/constellation-container'
import WeaponContainer from '../../components/weapons-container'

const Character = () => {
    let {id} = useParams()

    const {loading, data} = useQuery(QUERY_CHARACTER, {
        variables: {id}
    })
    const character = data?.getCharacter[0] || []
    
    //window.document.title = `${character.name} Build | Genshin Meta`
    //console.log(character)

    return (
        <main>
            {loading ? (
                <div><h1>Loading data...</h1></div>
            ):(
                <div className="hacked-wrapper">
                    <div className="title">
                        <h1>{character.name}</h1>
                    </div>
                    <div className='content'>
                        <h2 className='content-title'>Basic Info</h2>
                        <InfoSection character={character}/>
                    </div>
                    <div className='content'>
                        <h2 className='content-title'>Skill Talents</h2>
                        <TalentContainer talents={character.skillTalents} passive={false} imgPath={character.imagePath}/>
                    </div>
                    <div className='content'>
                        <h2 className='content-title'>Passive Talents</h2>
                        <TalentContainer talents={character.passiveTalents} passive={true} imgPath={character.imagePath}/>
                    </div>
                    <div className='content'>
                        <h2 className='content-title'>Constellations</h2>
                        <ConstContainer cons={character.constellations} imgPath={character.imagePath}/>
                    </div>
                    <div className='content'>
                        <h2 className='content-title'>Best Weapons</h2>
                        <WeaponContainer weapons={{"premiumWeapon": character.premiumWeapon, "budgetWeapon": character.budgetWeapon}}/>
                    </div>
                </div>
            )}
            
        </main>
    )

}

export default Character