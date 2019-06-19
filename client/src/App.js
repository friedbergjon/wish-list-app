import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import ShowWishlist from './components/ShowWishlist';
import AddItem from './components/AddItem'
import AddEvent from './components/AddEvent'
import UpdateItem from './components/UpdateItem'

function App() {
 return (
   <div>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/wishlist/:id" component={ShowWishlist} />
         <Route exact path="/add-item" component={AddItem} />
         <Route exact path="/add-event" component={AddEvent} />   
         <Route exact path="/update-item" component={UpdateItem} /> 
       </Switch>
   </div>
 );

}

export default App;
