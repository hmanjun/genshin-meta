import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { QUERY_CHARACTER } from '../../utils/queries'

import InfoSection from '../../components/basic-info-section'

const Character = () => {
    let {id} = useParams()

    const {loading, data} = useQuery(QUERY_CHARACTER, {
        variables: {id}
    })
    const character = data?.getCharacter[0] || []
    
    //window.document.title = `${character.name} Build | Genshin Meta`

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
                </div>
            )}
            
        </main>
    )

}

export default Character