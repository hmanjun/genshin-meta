import React from 'react'
import './style.css'

const ConstCard = ({data, imgPath, index}) => {
    return (
        <div className='talent-card'>
            <div className='talent-sumary-wrapper'>
                <img alt={data.unlock} src={require(`../../images/${imgPath}/c${index}.png`)} className='talent-icon'/>
                <h4 className='talent-name'>{data.name}</h4>
                <h5>{data.unlock}</h5>
            </div>
            <div className='talent-description-wrapper'>
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default ConstCard