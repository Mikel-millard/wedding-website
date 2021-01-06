import React from 'react'

// application routing components
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

// scss styling file for material-kit-react component
import '../../assets/scss/material-kit-react.scss';

// application views
import LandingPage from '../LandingPage';
import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';
import PasswordForgetPage from '../PasswordForgetPage';

// constants
import * as ROUTES from '../../constants/routes';

// authentication component
import {withAuthentication} from '../../components/Session';

import history from '../../components/History/history';
import WeddingPage from '../WeddingPage';
import RegistryPage from '../RegistryPage';
import HoneymoonPage from '../HoneymoonPage';
import AccommodationPage from '../AccommodationPage';
import AfterPartyPage from '../AfterPartyPage';
import TravelPage from '../TravelPage';
import PasswordChangePage from '../PasswordChangePage';
import AboutUsPage from '../AboutUs';

const App = () => (
    <Router history={history}>
            <AppMainView/>
    </Router>
);

const AppMainView = () => {

    return (
        <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} name="Landing"/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage} name="SignIn"/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} name="SignUp"/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} name="Password Forget"/>
            <Route path={ROUTES.WEDDING} component={WeddingPage} name="Wedding"/>
            <Route path={ROUTES.REGISTRY} component={RegistryPage} name="Registry"/>
            <Route path={ROUTES.HONEYMOON} component={HoneymoonPage} name="Honeymoon"/>
            <Route path={ROUTES.ACCOMMODATIONS} component={AccommodationPage} name="Accommodation"/>
            <Route path={ROUTES.AFTER_PARTY} component={AfterPartyPage} name="AfterParty"/>
            <Route path={ROUTES.TRAVEL} component={TravelPage} name="TravelPage" />
            <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} name="PasswordChange"/>
            <Route path={ROUTES.ABOUT_US} component={AboutUsPage} name="AboutUs"/>
        </Switch>
    )
}

export default withAuthentication(App);