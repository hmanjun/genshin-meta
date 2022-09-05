import React from 'react'
import './style.css'

const TalentCard = ({info, passive, imgPath, index}) => {
    //console.log(info, passive, imgPath, index)
    return (
        <div className='talent-card'>
            <div className='talent-sumary-wrapper'>
                <img alt={`skill ${index}`} src={require(`../../images/${imgPath}/s${index}.png`)} className='talent-icon'/>
                <h4 className='talent-name'>{info.name}</h4>
                {passive ? (
                    <h5>{info.unlock}</h5>
                ):(
                    <div className='upg-wrapper'>
                        <h5>{info.type}</h5>
                        <br></br>
                        <div>
                            {info.upgrades.map((upgrade,index) => (
                                <div className={(index + 1) % 2 === 0 ? "upg-row light-row" : "upg-row dark-row"}>
                                    <span className='upg-col'>{upgrade.name}</span>
                                    <span className='upg-cont'>{upgrade.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className='talent-description-wrapper'>
                    <p>
                        {info.description}
                    </p>
            </div>
        </div>
    )
}

export default TalentCard