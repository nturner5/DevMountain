import React, { Component } from 'react';
import { getOneProduct } from './services/products';
import './ProductDetail.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {title: 'Loading...'}
    }
  }

  componentDidMount() {
    getOneProduct(this.props.params.id)
    .then(product => {
      this.setState({product: product})
    })
  }

  render() {
    console.log(this.props)
    const { product } = this.state;

    return (
      <div>
        <img className="product-detail-image" src={product.image} alt='' />
        <h1>{product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>{product.desc}</p>
      </div>
    )
  }
}

export default ProductDetail;