import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

/**
 * 1. Vyplnit defaultní state
 */
const hlavniState = {
  surovina:""
};

export const GlobalContext = createContext(hlavniState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, hlavniState);
  /**
   * 
   * 3. Funkce která manipuluje s příslušným statem z bodu 1 
   */
 const zmenSurovinu = (surovina) => {
   dispatch({
     type:"ZMENA_SUROVINY",
     payload:surovina
   })
 }

  return (
    <GlobalContext.Provider
    /**
     * 2. Propíšete tu hodnotu z toho statu
     */
      value={{
        surovina:state.surovina,
        zmenSurovinu
      //Seznam vybraných surovin do receptu
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};