import React from "react"
import TeamCard from "../team-card"

const TeamsContainer = ({teams}) => {
    return (
        <div>
            {teams.map((team) => (
                <TeamCard data={team}/>
            ))}
        </div>
    )
}

export default TeamsContainer