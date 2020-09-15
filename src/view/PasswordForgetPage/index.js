import React, {Component} from 'react';
import * as ROUTES from '../../constants/routes';
import {withFirebase} from '../../components/Firebase';
import {Link as RouterLink} from 'react-router-dom';

const PasswordForgetPage = () => (
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
)

const INITIAL_STATE = {
    email: '',
    error: null,
}

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    render() {
        return (
            <div><p>This is the password forget form</p></div>
        )
    }
}
const PasswordForgetLink = () => (
    <p>
        <RouterLink to={ROUTES.PASSWORD_FORGET}>Forgot Password?</RouterLink>
    </p>
)

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }