import React, { Component } from 'react'
import MobileNav from './mobile_nav'
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
            <div>
            <MobileNav/>
            <header>
                <nav className='nav-bar'>
                    <ul className='navbar-list'>
                        <div className='logo-box'>
                            <Link to="/">
                                <img src="../../../assets/images/logos/htc-logo.png" alt=""/>
                            </Link>
                        </div>
                        <li className="dropdown-p" onMouseOver={this.onHoverA.bind(this, 'a')} onMouseOut={this.onExitA.bind(this, 'a')}>
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
                                <Link to='register'>Join Team HTC and Get Perks! ></Link>
                            </div>
                            <div className='cart'>
                                <a href='#'>CART (0)</a>
                            </div>
                        </div>
                        <form className='search'>
                            <img src="../../../assets/images/icons/magnify.png" alt="" type='submit' value='Submit'/>
                            <input type="text" placeholder='Search'/>
                        </form>
                    </div>
                </nav>
                
                <div className="dropdown-product" onMouseOver={this.onHoverA.bind(this, 'a')} onMouseOut={this.onExitA.bind(this, 'a')} style={this.state.a}>
                    <div className='drop-menu-container'>
                        <div className='product-phone-link'>
                            <a href="#">_HTC U Ultra</a>
                            <a href="#">_HTC 10</a>
                            <a href="#">_HTC One A9</a>
                            <a href="#">_HTC Accessories</a>
                            <a href="#">_VIVE</a>
                        </div>
                        <div className='product-img-name'>
                                <div className='nav-phone-box'>
                                    <div className='nav-phone-img'>
                                        <img src="../../../assets/images/nav-phones/htc-u-ultra-blue-global-2v-listing-copy.png" width='177px' height='170px' alt=""/>
                                        <div className='nav-prod-name'>
                                            HTC U Ultra
                                        </div>
                                        <div className='nav-prod-desc'>
                                            It's all about U
                                        </div>
                                    </div>
                                </div>
                                <div className='nav-phone-box'>
                                    <div className='nav-phone-img'>
                                        <img src="../../../assets/images/nav-phones/htc-10-global-carbon-gray-2v-listing.png" width='177px' height='170px' alt=""/>
                                    </div>
                                        <div className='nav-prod-name'>
                                            HTC 10
                                        </div>
                                        <div className='nav-prod-desc'>
                                            the power of 10
                                        </div>                                    
                                </div>
                                <div className='nav-phone-box'>
                                    <div className='nav-phone-img'>
                                        <img src="../../../assets/images/nav-phones/htc-aero-global-opal-silver-2v-listing.png" width='177px' height='170px' alt=""/>
                                    </div>
                                        <div className='nav-prod-name'>
                                            HTC One A9
                                        </div>
                                        <div className='nav-prod-desc'>
                                            be brilliant
                                        </div>                                    
                                </div>
                                <div className='nav-phone-box'>
                                    <div className='nav-phone-img'>
                                        <img src="../../../assets/images/nav-phones/htc-bolt-grey-us-2v-listing.png" width='177px' height='170px' alt=""/>
                                    </div>
                                        <div className='nav-prod-name'>
                                            HTC One A9
                                        </div>
                                        <div className='nav-prod-desc'>
                                            sculpted by light. illuminated by sound
                                        </div>                                    
                                </div>
                        </div>
                    </div>
                    
                </div>
                <div className="dropdown-shop" onMouseOver={this.onHoverB} onMouseOut={this.onExitB} style={this.state.b}>
                    <div className='drop-menu-container'>
                        <div className='shop-phone-link'>
                            <a href="#">_HTC U Ultra</a>
                            <a href="#">_HTC 10</a>
                            <a href="#">_HTC One A9</a>
                            <a href="#">_HTC Bolt</a>
                            <a href="#">_HTC Accessories</a>
                        </div>
                        <div className='product-img-name'>
                                <div className='nav-shop-box'>
                                    <div className='nav-shop-img'>
                                        <img src="../../../assets/images/htc-u-ultra-pdp-nav.png" width='394px' height='185px' alt=""/>
                                        <div className='nav-prod-name'>
                                            HTC U Ultra
                                        </div>
                                        <div className='nav-prod-desc'>
                                            It's all about U
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
                <div className="dropdown-support" onMouseOver={this.onHoverC} onMouseOut={this.onExitC} style={this.state.c}>
                    <div className='drop-menu-container'>
                        <div className='supp-phone-link'>
                            <a href="#">_Devices & Accessories</a>
                            <a href="#">_Purchase & Order Questions</a>
                            <a href="#">_Video Tutorials</a>
                            <a href="#">_Software+Apps</a>
                        </div>
                        <div className='support-img-name'>
                                <div className='nav-supp-box'>
                                    <div className='nav-shop-img'>
                                        <img src="../../../assets/images/HTC-U-Ultra-unlocked-nav.png" width='394px' height='222px' alt=""/>
                                        <div className='nav-prod-name'>
                                            Tips & Tricks
                                        </div>
                                        <div className='nav-prod-desc'>
                                            Get the Most from your HTC phone.
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </header>
            </div>
        )
    }

}