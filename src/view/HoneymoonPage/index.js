import React from 'react';

// authorization component
import {AuthUserContext, withAuthorization} from '../../components/Session/';
import {Redirect} from 'react-router';
import * as ROUTES from '../../constants/routes';
import Header from '../../components/Header/Header';
import * as TEXT from '../../constants/text';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import styles from '../../assets/jss/website-template/views/honeymoonPage';
import HoneymoonDetailsSection from './Sections/HoneymoonDetailsSection';
import Footer from '../../components/Footer/Footer';
import HoneymoonLocationSection from './Sections/HoneymoonLocationSection';

const useStyles = makeStyles(styles);

const HoneymoonPage = () => {
    return (
        <AuthUserContext.Consumer>
            {authUser => authUser === null ?
                <Redirect to={ROUTES.LANDING}/> :
                <HoneymoonPageBase authUser={authUser}/>
            }
        </AuthUserContext.Consumer>
    )
}

const HoneymoonPageBase = (props) => {
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
            <Parallax image={require('../../assets/img/cancun2.jpg')}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Honeymoon</h1>
                                <h3 style={{color: "white"}} className={classes.subtitle}>
                                    <b>August 9th, 2021 - August 14th, 2021
                                    Cancun, Q.R., Mexico</b>
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <HoneymoonDetailsSection/>
                <HoneymoonLocationSection/>
            </div>
            <Footer/>
        </div>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HoneymoonPage);