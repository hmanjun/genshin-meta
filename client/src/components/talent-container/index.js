import React from 'react'
import TalentCard from '../talent-card'
import './style.css'

const TalentContainer = ({talents, passive}) => {
    return (
        <div>
            {talents.map((talent) => (
                <TalentCard info={talent} passive={passive}/>
            ))}
        </div>
    )
}

export default TalentContainer