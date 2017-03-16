import React, { Component } from 'react'

export default class BuyToday extends Component {
    constructor(props) {
    super(props);
    this.onHover = this.onHover.bind(this)
    this.onExit = this.onExit.bind(this)
    this.state = {
        changeImg: {
            display: 'none'
        },
        changeBackImg: {
            display: 'block'
        }

    }
}
    onHover () {
        this.setState({
            changeImg: {
                display: 'block'
            },
            changeBackImg: {
                display: 'none'
            }
        })
    }
    onExit () {
        this.setState({
            changeImg: {
                display: 'none'
            },
            changeBackImg: {
                display: 'block'
            }
        })
    }
    
    render() {
        return (
            <div className='buy-today-container'>
                <h2>buy yours today</h2>

                <div className='phone-container'>
                    <div className='item-container' onMouseOver={this.onHover} onMouseOut={this.onExit}>
                        <div className='image-container'>
                            <img className='front' style={this.state.changeImg}
                            src="../../../assets/images/phones/htc-u-ultra-global-blue-buy-front.png" alt=""/>
                            <img className='back' style={this.state.changeBackImg}src="../../../assets/images/phones/htc-u-ultra-global-blue-buy-back.png" alt=""/>
                        </div>
                        <h3>HTC U ULTRA</h3>
                        <div className='buy-button'><a href='#'>BUY</a></div>
                    </div>
                    <div className='item-container' >
                        <div className='image-container' onMouseOver={this.onHover} onMouseOut={this.onExit}>
                            <img className='front' style={this.state.changeImg}
                            src="../../../assets/images/phones/htc-bolt-front-buy.png" alt=""/>
                            <img className='back' style={this.state.changeBackImg}src="../../../assets/images/phones/htc-bolt-back-buy.png" alt=""/>
                        </div>
                        <h3>HTC Bolt</h3>
                        <div className='buy-button'><a href='#'>BUY</a></div>
                    </div>
                    <div className='item-container' onMouseOver={this.onHover} onMouseOut={this.onExit}>
                        <div className='image-container'>
                            <img className='front' style={this.state.changeImg}
                            src="../../../assets/images/phones/htc-10-global-gray-front-buy.png" alt=""/>
                            <img className='back' style={this.state.changeBackImg}src="../../../assets/images/phones/htc-10-global-carbon-gray-buy-back.png" alt=""/>
                        </div>
                        <h3>HTC 10</h3>
                        <div className='buy-button'><a href='#'>BUY</a></div>
                    </div>
                    <div className='item-container' onMouseOver={this.onHover} onMouseOut={this.onExit}>
                        <div className='image-container'>
                            <img className='front' style={this.state.changeImg}
                            src="../../../assets/images/phones/htc-aero-global-carbon-gray-buy-front.png" alt=""/>
                            <img className='back' style={this.state.changeBackImg}src="../../../assets/images/phones/htc-aero-global-carbon-gray-buy-back.png" alt=""/>
                        </div>
                        <h3>HTC One A9</h3>
                        <div className='buy-button'><a href='#'>BUY</a></div>
                    </div>
                    <div className='item-container' onMouseOver={this.onHover} onMouseOut={this.onExit}>
                        <div className='image-container'>
                            <img className='accessories' 
                            src="../../../assets/images/phones/accessories-buy.png" alt=""/>
                        </div>
                        <h3>HTC Accesories</h3>
                        <div className='buy-button'>
                            <a href='#'>BUY</a>
                        </div>
                    </div>
                </div>
                <div className='view-phones'>
                    <a href='#'>VIEW ALL SMARTPHONES</a>
                </div>
            </div>
        )
    }

}