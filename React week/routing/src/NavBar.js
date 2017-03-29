import React, { Component } from 'react'
import { Link } from 'react-router'
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar-header'>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/store'>
                    Store
                </Link>
                {this.props.children}
            </div>
        )
    }
}

export default NavBar