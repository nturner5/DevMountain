import React, { Component } from 'react'
import RegisterForm from './registerForm'
import { register } from '../../actions/index'

class Register extends Component {
    submit = (values) => {
        console.log(values);
        register(values)
    }
    render() {
        return (
            <RegisterForm onSubmit={this.submit}/>
        )
    }
}

export default Register