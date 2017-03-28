import React, { Component } from 'react'
import HomeCarousel from './home-carousel'
import BuyToday from './buy_today'

const Home = () => {
    return(
        <main role='main'>
            <section>
                <div className='main-img-container'>
                    <img style={{ marginTop:'80px'}} src='/../../../assets/images/20170309-hp-htc-u-ultra.jpg' className='main-img' width='1180px' height='472px' />
                </div>
                <div className='mobile-main-container'>
                    <img style={{ marginTop:'30px'}} src='/../../../assets/images/mobile/htc-u-ultra-mobile.jpg' width='695px'  />
                </div>

                <div className='u-container'>
                    <img src="../../../assets/images/20170130-box-2-htc-u-ultra.jpg" width='530px' height='328px' alt=""/>

                    <img src="../../../assets/images/20170130-box-3-htc-u-ultra-dual-display.jpg" width='530px' height='328px' alt=""/>

                    <img src="../../../assets/images/20170130-box-4-htc-u-ultra.jpg" width='530px' height='328px' alt=""/>
                </div>
                <div className='u-mobile-container'>
                    <img src="../../../assets/images/20170130-box-2-htc-u-ultra.jpg" width='695px' alt=""/>

                    <img src="../../../assets/images/20170130-box-3-htc-u-ultra-dual-display.jpg" width='695px' alt=""/>

                    <img src="../../../assets/images/20170130-box-4-htc-u-ultra.jpg" width='695px' alt=""/>
                </div>
            </section>
            <HomeCarousel />
            <div className='onlyhtc-img-container'>
                <img src='/../../../assets/images/u-whybuy-homepage.jpg' className='onlyhtc-img' width='1180px' height='492px' />
            </div>
            <div className='onlyhtc-mobile-container'>
                <img src='/../../../assets/images/mobile/u-whybuy-homepage-mobile.jpg' className='onlyhtc-mobile' width='640px' />
            </div>
            <BuyToday />
        </main>
    )
}

export default Home