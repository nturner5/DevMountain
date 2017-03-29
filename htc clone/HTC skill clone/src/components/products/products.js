import React, { Component } from 'react'
import ProductNav from './products_nav'


class Products extends Component {
    render() {
        return (
            <div className='products-shop-container'>
                <ProductNav />
                {this.props.children}
            </div>
        )
    }
}

export default Products