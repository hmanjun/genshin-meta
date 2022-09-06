import React from 'react'

const WeaponCard = ({data, premium}) => {
    return (
        <div className='talent-card'>
            <div className='talent-sumary-wrapper'>
                <img alt={data.unlock} src={require(`../../images/weapons/${data.imagePath}.png`)} className='talent-icon'/>
                <h4 className='talent-name'>{data.name}</h4>
                {premium ? (
                    <h5 style={{color: "CornflowerBlue"}}>Premium Weapon</h5>
                ):(
                    <h5 style={{color: "CornflowerBlue"}}>Budget Weapon</h5>
                )} 
                <h5>Type:</h5>
                <h5>{data.type}</h5>
            </div>
            <div className='talent-description-wrapper'>
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default WeaponCard