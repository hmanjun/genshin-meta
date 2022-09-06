import React from "react"
import ConstCard from "../constellation-card"


const ConstContainer = ({cons, imgPath}) => {
    return (
        <div>
            {cons.map((con) => (
                <ConstCard data={con} imgPath={imgPath}/>
            ))}
        </div>
    )
}

export default ConstContainer