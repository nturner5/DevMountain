import React, { Component } from 'react';
import './List.css';

class List extends Component {

    handleClick(itemName) {
        this.props.whenClicked(this.props.listName, itemName)
    }

    render() {
        var list = [];

        for (let i = 0; i < this.props.list.length; i++) {
            list.push(
                <li 
                    onClick={this.handleClick.bind(this, this.props.list[i])} 
                    key={i}
                >{this.props.list[i]}</li>
            )
        }

        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}  

export default List