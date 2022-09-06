import React from 'react'
import './style.css'

const WeaponCard = ({data}) => {
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}

export default WeaponCard