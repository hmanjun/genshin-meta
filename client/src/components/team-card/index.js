import React from 'react'
import './style.css'

const TeamCard = ({data}) => {
    return (
        <div className='flex-col'>
            <h2 style={{color: "white"}}>{data.name}</h2>
            <div className='flex-wrap'>
            {data.members.map((member) => (
                <div className='talent-sumary-wrapper team-card-wrapper'>
                    <img alt={`${member.name}`} src={require(`../../images/${member.imgPath}/icon.webp`)}/>
                    <h4 className='talent-name team-name'>{member.name}</h4>
                    <h5>{member.role}</h5>
                </div>
            ))}
            </div>
        </div>
    )
}

export default TeamCard