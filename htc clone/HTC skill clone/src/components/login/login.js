import React, { Component } from 'react'
import LoginForm from './loginForm'
import { login } from '../../actions/index'

class Login extends Component {
    submit = (values) => {
        console.log(values);
        login(values)
    }
    render() {
        console.log(this.props)
        return (
            <LoginForm onSubmit={this.submit}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.all
    }
}
export default Login