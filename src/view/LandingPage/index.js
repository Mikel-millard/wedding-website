import React from 'react';

//nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

//core components
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import image from '../../assets/img/kissing.JPG';

import styles from '../../assets/jss/website-template/views/landingPage';
import AuthUserContext from '../../components/Session/context';
import {withAuthentication} from '../../components/Session';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const LandingPage = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser === null ?
                <LandingPageBase authUser={null}/> :
                <LandingPageBase authUser={authUser} />}
        </AuthUserContext.Consumer>
    </div>
);

const LandingPageBase = (props) => {
    const classes = useStyles();
    const { ...rest } = props;

    // console.log('In Landing Page');
    // console.log(authUser === null);

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="Mikel and Abigail's Wedding"
                rightLinks={<HeaderLinks authUser={props.authUser}/>}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <h1 className={classes.container}>This is the landing page</h1>
            </div>
        </div>
    )
}

export default LandingPage;