import React, {useState} from 'react'

const AddIngredients = () => {
    const [iserteddata, setIserteddata] = useState("");
    
    return (
        <div>
            <input type="text" value={iserteddata} onInput={(e) =>{
                setIserteddata(e.target.value);
            }}/>
            <div className="btn">Vlozit material</div>
        <p>This is a page for adding ingredients</p>
        <div></div>
        </div>
        
    )

}
export default AddIngredients