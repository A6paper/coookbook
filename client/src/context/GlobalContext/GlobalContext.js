import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

//Defaultní state
 
const mainState = {
  surovina:""
};

export const GlobalContext = createContext(mainState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, mainState);
  
  //Funkce manipuluje s prislusnym statem z bodu 1 
  
 const zmenSurovinu = (surovina) => {
   dispatch({
     type:"ZMENA_SUROVINY",
     payload:surovina
   })
 }

  return (
    <GlobalContext.Provider
    // Propiseme hodnotu ze statu
    
      value={{
        surovina:state.surovina,
        zmenSurovinu
      //Seznam vybranych surovin do receptu
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};