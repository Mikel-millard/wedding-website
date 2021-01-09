import React from 'react';

//nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

//core components
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import LandingCarouselSection from './Sections/LandingCarouselSection';

// authentication component
import AuthUserContext from '../../components/Session/context';

// constants
import * as TEXT from '../../constants/text';

import styles from '../../assets/jss/website-template/views/landingPage';
import {Redirect} from 'react-router';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const useStyles = makeStyles(styles);

const LandingPage = () => (
    <AuthUserContext.Consumer>
        {authUser => authUser === null ?
            <LandingPageBase authUser={null}/> :
            authUser.role === ROLES.WEDDING ?
            <Redirect to={ROUTES.WEDDING}/> :
            <Redirect to={ROUTES.AFTER_PARTY}/>
        }
    </AuthUserContext.Consumer>
);

const LandingPageBase = (props) => {
    const classes = useStyles();
    const {...rest} = props;

    return (
        <div>
            <Header
                color="transparent"
                brand={TEXT.MIKEL_AND_ABIGAIL_WEDDING}
                rightLinks={<HeaderLinks authUser={props.authUser}/>}
                fixed
                changeColorOnScroll={{
                    height: 350,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require('../../assets/img/kissing.JPG')}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Welcome to Mikel and Abigail's wedding website</h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <LandingCarouselSection/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default LandingPage;