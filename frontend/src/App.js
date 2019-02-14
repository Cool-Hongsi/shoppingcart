import React from 'react';
import Home from './components/User/Home';
import Administrator from './components/Administrator/Administrator';
import Product from './components/User/Product';
import Cart from './components/User/Cart';
import { Route, Switch } from 'react-router-dom';
import './App.css';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch> 

          {/* Administrator */}
          <Route exact path="/administrator" render={() => (
              <Administrator />
          )}/>
      
          {/* User */}
          <Route exact path="/" render={() => (
              <Home title="Shopping Cart" />
          )}/>
          <Route exact path="/product" render={() => (
              <Product />
          )}/>
          <Route exact path="/cart" render={() => (
              <Cart />
          )}/>
      </Switch>
      </div>
    )
  }
}