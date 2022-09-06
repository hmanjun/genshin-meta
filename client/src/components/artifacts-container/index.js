import React from "react"
import ArtifactCard from "../artifact-card"

const ArtifactsContainer = ({set}) => {
    const twoPiece = set.names.lenght > 1
    return (
        <div>
            <ArtifactCard data={set} index={0} twoPiece={twoPiece}/>
            {twoPiece && (
                <ArtifactCard data={set} index={1} twoPiece={twoPiece}/>
            )}
        </div>
    )
}

export default ArtifactsContainer