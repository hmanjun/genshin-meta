import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_NAMES } from '../../utils/queries';

const Navbar = () => {
    const {loading, data} = useQuery(QUERY_NAMES)
    const characters = data?.allCharacters || []

    return (
        <nav>
            <Link to='/'><button>Home</button></Link>

            <label htmlFor="char-dropdown"><span>Characters</span></label>
            <input type="checkbox" id="char-dropdown"></input>

            <ul>
                {loading ? (
                    <div>Loading links...</div>
                ) : (
                    characters.map((char) => (
                        <li><Link to={`/characters/${char.name}`}>{char.name}</Link></li>
                    ))
                )}
            </ul>
            
        </nav>
    )
}

export default Navbar