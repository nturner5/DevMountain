import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MobileNav extends Component {
        componentDidMount() {

    }

    constructor(props) {
    super(props);
        this.onHoverA = this.onHoverA.bind(this)
        this.onExitA = this.onExitA.bind(this)
        this.onHoverB = this.onHoverB.bind(this)
        this.onExitB = this.onExitB.bind(this)
    this.state = {
        a: { display: 'none' },
        b: { display: 'none' },
    }
}

    onHoverA (target) {
        this.setState({
            [target]: { display: 'block'}
        })
    }
    onExitA (target) {
        this.setState({
            [target]: { display: 'none' }
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
    render() {
        return (
            <div className='mobile-navbar-box'>
                <div className='mobile-nav-container'>
                    <nav className='mobile-navbar'>
                        <div className='mobile-logo'>
                        <Link to='/'><img src='../../assets/images/logos/htc-logo.png' alt=""/></Link>
                        </div>
                        <div className='mobile-products-drop'onMouseOver={this.onHoverA.bind(this, 'a')} onMouseOut={this.onExitA.bind(this, 'a')}>
                            <p>Products</p> <i className="fa fa-caret-down fa-fw" aria-hidden="true"></i>
                        </div>
                        <div className='mobile-icon-container'>
                            <img src="../../assets/images/icons/m-magnify-grey.png" width='16px' height='16px' alt=""/>
                        </div>
                        <div className='mobile-icon-container'>
                            <img src="../../assets/images/icons/m-cart.png" width='16px' height='16px' alt=""/>
                        </div>
                        <div className='mobile-menu-drop'>
                            <img src="../../assets/images/icons/m-menu.png" width='16px' height='13px' alt=""/>
                        </div>
                    </nav>
                </div>
                <div className='mobile-dropdown' onMouseOver={this.onHoverA.bind(this, 'a')} onMouseOut={this.onExitA.bind(this, 'a')} style={this.state.a}>
                    <div className='mobile-dropdown-content'>
                            <a href="#">HTC U Ultra</a>
                    
                    </div>
                    <div className='mobile-dropdown-content'>
                            <a href="#">HTC 10</a>
  
                    </div>
                    <div className='mobile-dropdown-content'>
                            <a href="#">HTC One A9</a>

                    </div>
                    <div className='mobile-dropdown-content'>
                            <a href="#">HTC Bolt</a> 
                    </div>
                </div>
            </div>
        )
    }
} 