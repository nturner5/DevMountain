import React, { Component } from 'react';
import { getProducts } from './services/products'

class Store extends Component {
    constructor(props) {
        console.log('CONSTRUCTING STORE COMPONENT')
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        console.log('COMPONENT HAS MOUNTED')
        //Mount means loaded on to the DOM
        getProducts().then(products => {
            console.log('GOT PRODUCTS')
            this.setState({
                products: products
            })
        })
    }

    componentWillMount() {
        console.log('COMPONENT IS ABOUT TO MOUNT')
    }

    componentWillUpdate() {
        console.log('COMPONENT IS GOING TO UPDATE')
    }

    componentDidUpdate() {
        console.log('COMPONENT HAS UPDATED')
    }

    render() {
        console.log('RENDERING COMPONENT')
        const products = this.state.products.map((products, i ) => {
            return <div key={i}>{products.title}</div>
        });
        return (
            <div>
                <h1>This is the store!</h1>
                {products[0] ? products: 'loading...'}
            </div>
        )
    }
}

export default Store