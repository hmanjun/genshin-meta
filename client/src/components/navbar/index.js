import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_NAMES } from '../../utils/queries';
import './style.css'

const Navbar = () => {
    const {loading, data} = useQuery(QUERY_NAMES)
    const characters = data?.allCharacters || []

    return (
        <nav>
            <Link to='/' className="nav-link"> <span className="nav-span">Home</span></Link>
            {loading ? (
                <div>Loading links...</div>
            ) : (
                characters.map((char) => (
                    <Link to={`/characters/${char.name}`} className="nav-link">
                        <span className="nav-span">{`${char.name} build`}</span>
                    </Link>
                ))
            )}
        </nav>
    )
}

export default Navbar