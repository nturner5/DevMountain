import React, { Component } from 'react'
import { connect } from 'react-redux';
import { register } from '../../actions/index';

class Register extends Component {
    componentWillMount() {
        this.props.register();
    }

    render() {
        console.log(this.props)
        return (
            <div className='register-container' >
                <div className='register-panel'>
                    <h1>Register</h1>
                    
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        signup: state.register.all
    }
}



export default connect(mapStateToProps, {register})(Register)