import React from "react"
import WeaponCard from "../weapon-card"

const WeaponContainer = ({weapons}) => {
    console.log(weapons)
    return (
        <div>
            <WeaponCard data={weapons.premiumWeapon}/>
            <WeaponCard data={weapons.budgetWeapon}/>
        </div>
    )
}

export default WeaponContainer