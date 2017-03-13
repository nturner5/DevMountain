import React, { Component } from 'react';
import Home from './home/home';
import Products from './products/products'

export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        <Home />
      </div>
    );
  }
}
