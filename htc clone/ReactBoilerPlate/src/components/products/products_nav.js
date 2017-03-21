import React, { Component } from 'react'

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
    }

    isThisActive(target) {
        if (target === this.state.activeTarget) {
            return 'is-active'
        } else {
            return 'item-nav-phone';
        }
    }


    render() {
        return (
            <div className='product-leftnav-container'>
                <a href='#'>
                    <div 
                    className={isThisActive("smartphones")}
                    onClick={this.activeTarget.bind(this, 'smartphones')}>
                        <div className='icon-and-text'>

                            <div id='phone'></div>
                            <h1>Smartphones</h1>
                        </div>
                    </div>
                </a>
                <a href='#'>
                    <div className='item-nav-phone'>
                        <div className='icon-and-text'>
                            <div id='accessory'></div>
                            <h1>Accessories</h1>
                        </div>
                    </div>
                </a>
                <a href='#'>
                    <div className='item-nav-phone'>
                        <div className='icon-and-text'>
                            <div id='phone'></div>
                            <h1>Virtual Reality</h1>
                        </div>
                    </div>
                </a>
                <a href='#'>
                    <div className='item-nav-phone'>
                        <div className='icon-and-text'>
                            <div id='phone'></div>
                            <h1>Fitness</h1>
                        </div>
                    </div>
                </a>

            </div>
        )
    }
}

export default ProductNav