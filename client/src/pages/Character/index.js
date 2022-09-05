import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { QUERY_CHARACTER } from '../../utils/queries'

const Character = () => {
    let {id} = useParams()

    const {loading, data} = useQuery(QUERY_CHARACTER, {
        variables: {id}
    })
    const character = data?.getCharacter[0] || []
    console.log(character)

    return (
        <main>
            {loading ? (
                <div>
                    <h1>Loading character data...</h1>
                </div>
            ):(
                <h1>{character.name}</h1>
            )}
        </main>
    )

}

export default Character