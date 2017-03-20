import React, { Component } from 'react'

export default class BuyToday extends Component {
    constructor(props) {
    super(props);
    this.onHoverA = this.onHoverA.bind(this)
    this.onExitA = this.onExitA.bind(this)
    this.onHoverB = this.onHoverB.bind(this)
    this.onExitB = this.onExitB.bind(this)
    this.onHoverC = this.onHoverC.bind(this)
    this.onExitC = this.onExitC.bind(this)
    this.onHoverD = this.onHoverD.bind(this)
    this.onExitD = this.onExitD.bind(this)
    this.state = {
        a: {
            display: 'none'
        },
        ac: {
            display: 'block'
        },
        b: {
            display: 'none'
        },
        bc: {
            display: 'block'
        },
        c: {
            display: 'none'
        },
        cc: {
            display: 'block'
        },
        d: {
            display: 'none'
        },
        dc: {
            display: 'block'
        }

    }
}
    onHoverA () {
        this.setState({
            a: {
                display: 'block'
            },
            ac: {
                display: 'none'
            }
        })
    }
    onExitA () {
        this.setState({
            a: {
                display: 'none'
            },
            ac: {
                display: 'block'
            }
        })
    }
    onHoverB () {
        this.setState({
            b: {
                display: 'block'
            },
            bc: {
                display: 'none'
            }
        })
    }
    onExitB () {
        this.setState({
            b: {
                display: 'none'
            },
            bc: {
                display: 'block'
            }
        })
    }
    onHoverC () {
        this.setState({
            c: {
                display: 'block'
            },
            cc: {
                display: 'none'
            }
        })
    }
    onExitC () {
        this.setState({
            c: {
                display: 'none'
            },
            cc: {
                display: 'block'
            }
        })
    }
    onHoverD () {
        this.setState({
            d: {
                display: 'block'
            },
            dc: {
                display: 'none'
            }
        })
    }
    onExitD () {
        this.setState({
            d: {
                display: 'none'
            },
            dc: {
                display: 'block'
            }
        })
    }
    
    render() {
        return (
            <div className='buy-today-container'>
                <h2>buy yours today</h2>

                <div className='phone-container'>
                    <div className='item-container' onMouseOver={this.onHoverA} onMouseOut={this.onExitA}>
                        <div className='image-container'>
                            <img className='front' style={this.state.a}
                            src="../../../assets/images/phones/htc-u-ultra-global-blue-buy-front.png" alt=""/>
                            <img className='back' style={this.state.ac}src="../../../assets/images/phones/htc-u-ultra-global-blue-buy-back.png" alt=""/>
                        </div>
                        <h3>HTC U ULTRA</h3>
                        <div className='buy-button'><a href='#'>BUY</a></div>
                    </div>
                    <div className='item-container' onMouseOver={this.onHoverB} onMouseOut={this.onExitB} >
                        <div className='image-container' >
                            <img className='front' style={this.state.b}
                            src="../../../assets/images/phones/htc-bolt-front-buy.png" alt=""/>
                            <img className='back' style={this.state.bc}src="../../../assets/images/phones/htc-bolt-back-buy.png" alt=""/>
                        </div>
                        <h3>HTC Bolt</h3>
                        <div className='buy-button'><a href='#'>BUY</a></div>
                    </div>
                    <div className='item-container' onMouseOver={this.onHoverC} onMouseOut={this.onExitC}>
                        <div className='image-container'>
                            <img className='front' style={this.state.c}
                            src="../../../assets/images/phones/htc-10-global-gray-front-buy.png" alt=""/>
                            <img className='back' style={this.state.cc}src="../../../assets/images/phones/htc-10-global-carbon-gray-buy-back.png" alt=""/>
                        </div>
                        <h3>HTC 10</h3>
                        <div className='buy-button'><a href='#'>BUY</a></div>
                    </div>
                    <div className='item-container' onMouseOver={this.onHoverD} onMouseOut={this.onExitD}>
                        <div className='image-container'>
                            <img className='front' style={this.state.d}
                            src="../../../assets/images/phones/htc-aero-global-carbon-gray-buy-front.png" alt=""/>
                            <img className='back' style={this.state.dc}src="../../../assets/images/phones/htc-aero-global-carbon-gray-buy-back.png" alt=""/>
                        </div>
                        <h3>HTC One A9</h3>
                        <div className='buy-button'><a href='#'>BUY</a></div>
                    </div>
                    <div className='item-container'>
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