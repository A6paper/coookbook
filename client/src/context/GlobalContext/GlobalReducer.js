const reducer = (state, action) => {
    switch (action.type) {
      
       //zpracovava finalni operace
       
      case "ZMENA_SUROVINY":
        return{
          ...state,
          surovina:action.payload
        }
      default:
        return state;
    }
  };

  export default reducer;

