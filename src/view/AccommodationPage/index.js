import React from 'react';

// authorization component
import {AuthUserContext, withAuthorization} from '../../components/Session/';
import * as ROLES from '../../constants/roles';
import {Redirect} from 'react-router';
import * as ROUTES from '../../constants/routes';
import Header from '../../components/Header/Header';
import * as TEXT from '../../constants/text';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import styles from '../../assets/jss/website-template/views/accommodationsPage';
import {makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import AccommodationsDetails from './Sections/AccommodationsDetails';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles(styles);

const AccommodationPage = () => {
    return (
        <AuthUserContext.Consumer>
            {authUser => authUser.role !== ROLES.WEDDING ?
                <Redirect to={ROUTES.AFTER_PARTY}/> :
                <AccommodationPageBase authUser={authUser}/>
            }
        </AuthUserContext.Consumer>
    )
}

const AccommodationPageBase = (props) => {
    const {...rest} = props;
    const classes = useStyles();

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
            <Parallax image={require('../../assets/img/friday_harbor.jpg')}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Accommodations</h1>
                                <h3 className={classes.subtitle}>
                                    Tucker House Inn & Harrison House Suites
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <AccommodationsDetails/>
            </div>
            <Footer />
        </div>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccommodationPage);