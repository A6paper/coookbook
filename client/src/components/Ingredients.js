import React, { useContext } from 'react'
import {GlobalContext} from "../context/GlobalContext/GlobalContext"

const Ingredients = ({cislovporadi, name, eventclick}) => {
    const {zmenSurovinu} = useContext(GlobalContext);
    return (
        <div>
            {cislovporadi} - {name}
            <div className="btn" onClick={() => {
                zmenSurovinu(name);
                eventclick(name);
            }}>Zobrazit detail</div>
        
        </div>
    )
}
export default Ingredients;