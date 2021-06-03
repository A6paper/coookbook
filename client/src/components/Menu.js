import React from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from "../context/GlobalContext/GlobalContext";

const Menu = () => {
   const {surovina} = useContext(GlobalContext)
    
    return(
        <div>
            <Link to="/">Hlavni stranka</Link>
            <Link to="/add-material">Pridani materialu</Link>
            <div>{surovina}</div>
        </div>
    )
}
export default Menu;