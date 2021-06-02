const reducer = (state, action) => {
    switch (action.type) {
      /**
       * 4 - zde se  zpracuje finální operace
       */
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

