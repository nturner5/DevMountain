import React, { Component } from 'react'
import HomeCarousel from './home-carousel'

const Home = () => {
    return(
        <main role='main'>
            <section>
                <div className='main-img-container'>
                    <img src='/../../../assets/images/20170309-hp-htc-u-ultra.jpg' className='main-img' width='1180px' height='472px' />
                </div>
                <div className='u-container'>
                    <img src="../../../assets/images/20170130-box-2-htc-u-ultra.jpg" width='530px' height='328px' alt=""/>

                    <img src="../../../assets/images/20170130-box-3-htc-u-ultra-dual-display.jpg" width='530px' height='328px' alt=""/>

                    <img src="../../../assets/images/20170130-box-4-htc-u-ultra.jpg" width='530px' height='328px' alt=""/>
                </div>
            </section>
            <HomeCarousel />
            <div className='main-img-container'>
                    <img src='/../../../assets/images/u-whybuy-homepage.jpg' className='main-img' width='1180px' height='492px' />
                </div>
        </main>
    )
}

export default Home