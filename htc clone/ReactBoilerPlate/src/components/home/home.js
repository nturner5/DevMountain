import React, { Component } from 'react'
var styles = {
    h1: {
        fontSize: '75px'
    }
}

const Home = () => {
    return(
        <div>
            <h1 className={styles.h1}> hello im main home</h1>
        </div>
    )
}

export default Home