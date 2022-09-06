import React from "react"
import WeaponCard from "../weapon-card"

const WeaponContainer = ({weapons}) => {
    return (
        <div>
            <WeaponCard data={weapons.premiumWeapon} premium={true}/>
            <WeaponCard data={weapons.budgetWeapon} premium={false}/>
        </div>
    )
}

export default WeaponContainer