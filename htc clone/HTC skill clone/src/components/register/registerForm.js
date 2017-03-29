import React, { Component } from 'react'
import { connect } from 'react-redux';
import { register } from '../../actions/index';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
 
class RegisterForm extends Component {
    
    render() {
        console.log(this.props)
        const { handleSubmit } = this.props
        return (
            <div className='register-container' >
                <div className='register-panel'>
                    <h1> Register </h1>

                    <div>
                        <Link to='login'>Already a member? Sign in!</Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text"/>
                        </div>
                        <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text"/>
                        </div>
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

RegisterForm = reduxForm ({
    form: 'usersignup' 
})(RegisterForm);



export default RegisterForm