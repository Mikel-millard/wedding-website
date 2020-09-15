import React from 'react';

// router components
import {withRouter} from 'react-router-dom';

// class composition
import {compose} from 'recompose';

// user authentication
import AuthUserContext from './context';

// firebase components
import {withFirebase} from '../Firebase';

//constants
import * as ROUTES from '../../constants/routes';

const withAuthorization = (condition, route) => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
                () => this.props.history.push(ROUTES.SIGN_IN),
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return compose(
        withRouter,
        withFirebase,
    )(WithAuthorization);
};

export default withAuthorization;