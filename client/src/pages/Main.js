import React,{useState, useEffect} from 'react';
import Ingredients from "../components/Ingredients";

const Main = () => {
    const [ingredients, setIngredients] = useState([]);
    const [serverMsg, setServerMsg] = useState("")
    const [userClick, setUserClick] = useState("")

    useEffect(()=>{
        pridaniIngredientu();

    }, [])
    const pridaniIngredientu = async() => {
        setServerMsg("Nacitam data")
      const data = await fetch("http://localhost:5000/get-ingredient");
      const finalData = await data.json();
      const {msg, documents} = finalData;
      setIngredients(documents);
      setServerMsg(msg);
    }

    const click = (ingredient) =>{
        setUserClick(ingredient)
    }
    return(
        <div>
            {ingredients.map((ingredient, index) => {
                return(
                    <Ingredients eventclick={click} key = {index} name={ingredient.name} cislovporadi = {index}/>
                )
                })
            }
      
        <div className="msg">{serverMsg}</div>
        {userClick}
        </div>
    )
}
export default Main