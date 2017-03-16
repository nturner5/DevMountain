import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='region-block'>
                    <div className='region-text'>USA</div>
                    <img src="../../../assets/images/icons/globe_nbg.png" alt=""/>
                    <div className='copyright-years'>
                        © 2011-2017 HTC Corporation
                    </div>
                    
                </div>
                <div className='privacy-block'>
                    <div className='privacy'>Privacy Policy</div>
                    <div>Product Security</div>
                </div>
                <div className='connect-block'>
                    <div className='dots'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div>CONNECT</div>
                </div>
            </footer>
        )
    }
}