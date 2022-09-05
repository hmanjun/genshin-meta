import React from 'react'
import TalentCard from '../talent-card'
import './style.css'

const TalentContainer = ({talents, passive, imgPath}) => {
    return (
        <div>
            {talents.map((talent, index) => (
                <TalentCard info={talent} passive={passive} imgPath={imgPath} index={index+1}/>
            ))}
        </div>
    )
}

export default TalentContainer