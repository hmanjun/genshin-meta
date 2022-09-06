import React from 'react'
import './style.css'

const ConstCard = ({data, imgPath}) => {
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}

export default ConstCard