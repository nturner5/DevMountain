import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.onHoverA = this.onHoverA.bind(this)
        this.onExitA = this.onExitA.bind(this)
        this.onHoverB = this.onHoverB.bind(this)
        this.onExitB = this.onExitB.bind(this)
        this.onHoverC = this.onHoverC.bind(this)
        this.onExitC = this.onExitC.bind(this)
        this.state = {
            a: { display: 'none' },
            b: { display: 'none' },
            c: { display: 'none' }
        }
    }
    onHoverA () {
        this.setState({
            a: { display: 'block' }
        })
    }
    onExitA () {
        this.setState({
            a: { display: 'none' }
        })
    }
    onHoverB () {
        this.setState({
            b: { display: 'block' }
        })
    }
    onExitB () {
        this.setState({
            b: { display: 'none' }
        })
    }
    onHoverC () {
        this.setState({
            c: { display: 'block' }
        })
    }
    onExitC () {
        this.setState({
            c: { display: 'none' }
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
                        <li className="dropdown-p" onMouseOver={this.onHoverA} onMouseOut={this.onExitA}>
                            <Link to='products' className="dropbtn">Products<i className="fa fa-caret-down fa-fw" aria-hidden="true"></i></Link>

                        </li>
                        <li className="dropdown-s" onMouseOver={this.onHoverB} onMouseOut={this.onExitB}>
                            <a href="#" className="dropbtn">Shop<i className="fa fa-caret-down fa-fw" aria-hidden="true"></i></a>

                        </li>
                        <li className='dropdown-v'><a href="#news">Vive</a></li>
                        <li className="dropdown-sup"  onMouseOver={this.onHoverC} onMouseOut={this.onExitC}>
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
                
                <div className="dropdown-product" onMouseOver={this.onHoverA} onMouseOut={this.onExitA} style={this.state.a}>
                    <a href="#">A 1</a>
                    <a href="#">A 2</a>
                    <a href="#">A 3</a>
                    <a href="#">A 3</a>
                    <a href="#">A 3</a>
                </div>
                <div className="dropdown-shop" onMouseOver={this.onHoverB} onMouseOut={this.onExitB} style={this.state.b}>
                    <a href="#">B 1</a>
                    <a href="#">B 2</a>
                    <a href="#">B 3</a>
                    <a href="#">B 3</a>
                    <a href="#">ABC</a>
                    <a href="#">DEF</a>
                </div>
                <div className="dropdown-support" onMouseOver={this.onHoverC} onMouseOut={this.onExitC} style={this.state.c}>
                    <a href="#">C 1</a>
                    <a href="#">C 2</a>
                    <a href="#">C 3</a>
                    <a href="#">C 3</a>
                    <a href="#">AAA</a>
                </div>
            </header>
        )
    }

}