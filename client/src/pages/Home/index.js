import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CARD } from '../../utils/queries';
import Card from '../../components/character-card'

import './style.css'


const Home = () => {
    const {loading, data} = useQuery(QUERY_CARD)
    const characters = data?.allCharacters || []

    return (
        <main>
            <div className="title">
                <h1>Genshin Meta</h1>
            </div>
            <div class="content">
                <h2 class="content-title">All Characters</h2>
                <div id="card-container">
                    {loading ? (
                        <div>Loading cards...</div>
                    ):(
                        characters.map((char) => (<Card character={char}/>))
                    )}
                </div>
            </div>
        </main>
    )
}

export default Home