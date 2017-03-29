import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSmartphones } from '../../../actions/index';


class PhoneList extends Component {
    componentWillMount() {
        this.props.getAllSmartphones();
        
    }
    renderList() {
         return this.props.smartphone.map((smartphone) => {
            return (
                             
                <div className='item-content-box' key={smartphone.id}>
                    <a className='item-image' href='#'>
                        <img src={smartphone.image} alt=""/>
                    </a>
                    <div className='item-text'>
                        <div className='item-name'>
                            {smartphone.name}
                        </div>
                        <div className='item-desc'>
                            {smartphone.description}
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
        console.log(this.props.smartphones)
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

      smartphone: state.smartphones.all
    }
}
export default connect(mapStateToProps, {getAllSmartphones})(PhoneList);