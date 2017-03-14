import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default htc-nav">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to='/' className="navbar-brand" href="#"><img src="../../../assets/images/htc-logo.png" alt=""/></Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li ClassName="active"><Link to='products'>Products<i class="fa fa-caret-down fa-3x" aria-hidden="true"></i></Link></li>
                            <li><Link to='shop' >Shop</Link></li>
                            <li><Link to='vive'>Vive</Link></li>
                            <li><Link to='Support'>Support</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

}