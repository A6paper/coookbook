import React from 'react'

const Ingredients = ({cislovporadi, name, eventclick}) => {
    return (
        <div>
            {cislovporadi} - {name}
            <div className="btn" onClick={() => {
                eventclick(name);
            }}>Zobraz detail</div>
        
        </div>
    )
}
export default Ingredients;