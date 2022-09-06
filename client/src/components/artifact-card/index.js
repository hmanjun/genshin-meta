import React from 'react'

const ArtifactCard = ({data, index, twoPiece}) => {
    console.log(data, index)
    return (
        <div className='talent-card'>
            <div className='talent-sumary-wrapper'>
                <img alt={data.names[index]} src={require(`../../images/artifacts/${data.imagePaths[index]}.webp`)} className='talent-icon'/>
                <h4 className='talent-name'>{data.names[index]}</h4>
                <h5>{data.mainStats}</h5>
            </div>
            <div className='talent-description-wrapper'>
                <p>
                    {twoPiece ? (
                        <p>
                            {`(${data.benefits[index].piece}) ${data.benefits[index].description}`}
                        </p>
                    ):(
                        <div>
                            <p>
                                {`(${data.benefits[0].piece}) ${data.benefits[0].description}`}
                            </p>
                            <p>
                                {`(${data.benefits[1].piece}) ${data.benefits[1].description}`}
                            </p>
                        </div>
                    )}
                </p>
            </div>
        </div>
    )
}

export default ArtifactCard