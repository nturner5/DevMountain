import React, { Component } from 'react'
import { Link } from 'react-router'

class ProductNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTarget: ''
        }
    }

    activateTarget(target) {
        this.setState({
            activeTarget: target
        })
        console.log(target)
    }

    isThisActive(target) {
        console.log('ran')
        if (target === this.state.activeTarget) {
            console.log('isActive')
            return 'is-active'
        } else {
             console.log('product-leftnav-container')
            return 'item-nav-phone';
        }
    }


    render() {
        return (
            <div className='product-leftnav-container'>
                <Link to='products/phones'>
                    <div 
                    className={this.isThisActive.call(this, "smartphones")}
                     onClick={this.activateTarget.bind(this, 'smartphones')}
                    >
                        <div className='icon-and-text'>

                            <div id='phone'></div>
                            <h1>Smartphones</h1>
                        </div>
                    </div>
                </Link>
                <Link to='products/accessories'>
                    <div 
                    className={this.isThisActive.call(this, "accessories")}
                     onClick={this.activateTarget.bind(this, 'accessories')}
                    >
                        <div className='icon-and-text'>
                            <div id='accessory'></div>
                            <h1>Accessories</h1>
                        </div>
                    </div>
                </Link>
                <a href='#'>
                    <div className='item-nav-phone'>
                        <div className='icon-and-text'>
                            <div id='virtual'></div>
                            <h1>Virtual Reality</h1>
                        </div>
                    </div>
                </a>
                <a href='#'>
                    <div className='item-nav-phone'>
                        <div className='icon-and-text'>
                            <div id='fitness'></div>
                            <h1>Fitness</h1>
                        </div>
                    </div>
                </a>

            </div>
        )
    }
}

export default ProductNav