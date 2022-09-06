import React from "react"
import ConstCard from "../constellation-card"


const ConstContainer = ({cons, imgPath}) => {
    return (
        <div>
            {cons.map((con, index) => (
                <ConstCard data={con} imgPath={imgPath} index={index+1}/>
            ))}
        </div>
    )
}

export default ConstContainer