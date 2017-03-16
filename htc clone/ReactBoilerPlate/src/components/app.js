import React, { Component } from 'react';
import Navbar from './navbar/navbar'
import Home from './home/home';ff
import

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
