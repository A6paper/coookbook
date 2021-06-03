import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./pages/Main";
import AddIngredients from "./pages/AddIngredients";
import RecipePage from './pages/RecipePage/RecipePage'
import RecipeForm from '../src/pages/RecipeForm/RecipeForm';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/main" component={Main} />
      <Route exact path="/add-ingredient" component={AddIngredients}/>
      <Route exact path="/recipes/:id" component={RecipePage} />
      <Route exact path="/recipes/new" component={RecipeForm} />
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
//