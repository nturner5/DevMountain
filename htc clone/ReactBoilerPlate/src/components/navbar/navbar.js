import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.onHover = this.onHover.bind(this)
        this.onExit = this.onExit.bind(this)
        this.state = {
            a: {display: 'none'},
            b: {display: 'none'},
            c: {display: 'none'}
        }
    }
    onHover (dropDown) {
        this.setState({
            dropDown: {
                display: 'block'
            }
        })
    }
    onExit (dropDown) {
        this.setState({
            dropDown: {
                display: 'none'
            }
        })
    }
    render() {
        return (
            <header>
                <nav className='nav-bar'>
                    <ul className='navbar-list'>
                        <div className='logo-box'>
                            <Link to="/">
                                <img src="../../../assets/images/htc-logo.png" alt=""/>
                            </Link>
                        </div>
                        <li className="dropdown-p" onMouseOver={this.onHover} onMouseOut={this.onExit}>
                            <Link to='products' className="dropbtn">Products<i className="fa fa-caret-down fa-fw" aria-hidden="true"></i></Link>

                        </li>
                        <li className="dropdown-s" onMouseOver={this.onHover.bind(this, 'b')} onMouseOut={this.onExit.bind(this, 'b')}>
                            <a href="#" className="dropbtn">Shop<i className="fa fa-caret-down fa-fw" aria-hidden="true"></i></a>

                        </li>
                        <li className='dropdown-v'><a href="#news">Vive</a></li>
                        <li className="dropdown-sup"  onMouseOver={this.onHover} onMouseOut={this.onExit}>
                            <a href="#" className="dropbtn">Support<i className="fa fa-caret-down fa-fw" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                    {/*NEW COMPONENT NEEDED*/}
                    <div className='join-search'>
                        <div className='boxes'>
                            <div className='join'>
                                <a href='#'>Join Team HTC and Get Perks! ></a>
                            </div>
                            <div className='cart'>
                                <a href='#'>CART (0)</a>
                            </div>
                        </div>
                        <form className='search'>
                            <img src="../../../assets/images/magnify.png" alt="" type='submit' value='Submit'/>
                            <input type="text" placeholder='Search'/>
                        </form>
                    </div>
                </nav>
                
                <div className="dropdown-product" onMouseOver={this.onHover.bind(this, 'a')} onMouseOut={this.onExit.bind(this, 'a')} style={this.state.a}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 3</a>
                </div>
                <div className="dropdown-shop" onMouseOver={this.onHover.bind(this, 'b')} onMouseOut={this.onExit.bind(this, 'b')} style={this.state.b}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 3</a>
                    <a href="#">ABC</a>
                    <a href="#">DEF</a>
                </div>
                <div className="dropdown-support" onMouseOver={this.onHover} onMouseOut={this.onExit} style={this.state.c}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 3</a>
                    <a href="#">AAA</a>
                </div>
            </header>
        )
    }

}