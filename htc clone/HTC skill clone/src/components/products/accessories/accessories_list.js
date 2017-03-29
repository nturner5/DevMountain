import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAccessories } from '../../../actions/index';

class AccessoriesList extends Component {
    componentWillMount() {
        this.props.getAllAccessories();
        
    }
    renderList() {
         return this.props.accessory.map((accessory) => {
            return (
                             
                <div className='item-content-box' key={accessory.id}>
                    <a className='item-image' href='#'>
                        <img src={accessory.image} alt=""/>
                    </a>
                    <div className='item-text'>
                        <div className='item-name'>
                            {accessory.name}
                        </div>
                        <div className='item-desc'>
                            {accessory.description}
                        </div>
                    </div>
                    <div className='learn-more-item' >
                        <a href='#'>LEARN MORE</a>
                    </div>
                    <div className='green-buy-now'>
                        <a href='#'>Buy Now</a>
                    </div>
                </div>
            );
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className='list-products-buy'>
                <div className='list-products-box'>
                    {this.renderList()}
                </div>

            </div>
        )
    }

}
    


function mapStateToProps(state) {
    return {

      accessory: state.accessories.all
    }
}
export default connect(mapStateToProps, {getAllAccessories})(AccessoriesList);