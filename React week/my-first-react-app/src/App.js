import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      groceries: ['tomotos', 'apples', 'grapes'],
      chores: ['sweep', 'dishes', 'dust']
    }

    this.removeItem = this.removeItem.bind(this)
    //bind will return the function def of the old function and it changes the context of 'this' for you
  }

  removeItem(listName, itemName) {
    let targetList = this.state[listName];

    let index = targetList.indexOf(itemName);
    targetList.splice(index, 1)

    let newState = {};
    newState[listName] = targetList;

    this.setState(newState);
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <List 
            listName='groceries'
            whenClicked={this.removeItem}
            title='Groceries'
            list={this.state.groceries}
          />
          <List 
            listName='chores'
            whenClicked={this.removeItem}
            title='Chores' 
            list={this.state.chores}
          />

      </div>
    );
  }
}

export default App;
