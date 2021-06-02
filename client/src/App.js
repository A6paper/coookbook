import React from 'react';
import './App.css';
import Main from "./pages/Main";
import AddIngredients from "./pages/AddIngredients";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/add-ingredient" component={AddIngredients}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
