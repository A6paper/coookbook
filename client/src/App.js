import React from 'react';
import './App.css';
import Main from "./pages/Main";
import AddIngredients from "./pages/AddIngredients";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import RecipePage from './pages/RecipePage/RecipePage'
import RecipeForm from '../src/pages/RecipeForm/RecipeForm';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      
      <Route exact path="/add-ingredient" component={AddIngredients}/>
      <Route exact path="/recipes/:id" component={RecipePage} />
      <Route exact path="/recipes/new" component={RecipeForm} />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
