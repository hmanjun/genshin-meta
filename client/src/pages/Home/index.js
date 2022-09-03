import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CARD } from '../../utils/queries';


const Home = () => {
    const {loading, data} = useQuery(QUERY_CARD)
    const characters = data?.allCharacters || []

    return (
        <main>
            <div>
                <h1>Genshin Meta</h1>
            </div>
            <div>
                <div>
                    <h2>All Characters</h2>
                </div>
            </div>
            <div className="card-container">
                {loading ? (
                    <div>Loading cards...</div>
                ):(
                    <div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Home