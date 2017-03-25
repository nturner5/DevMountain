import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/index';
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {
    
    render() {
        console.log(this.props)
        const { handleSubmit } = this.props
        return (
            <div className='register-container' >
                <div className='register-panel'>
                    <h1> Login </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email"/>
                        </div>
                        <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="password"/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>                    
                    
                </div>

            </div>
        )
    }
}

LoginForm = reduxForm ({
    form: 'login' 
})(LoginForm);



export default LoginForm