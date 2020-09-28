import React from 'react';
import {withAuthorization} from '../../components/Session';
import * as ROLES from '../../constants/roles';
import AuthUserContext from '../../components/Session/context';
import {Redirect} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Header from '../../components/Header/Header';
import * as TEXT from '../../constants/text';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import styles from '../../assets/jss/website-template/views/weddingPage';
import {makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import WeddingDetailsSection from './Sections/WeddingDetailsSection';
import Footer from '../../components/Footer/Footer';

const WeddingPage = () => (
    <AuthUserContext.Consumer>
        {authUser => authUser.role !== ROLES.WEDDING ?
            <Redirect to={ROUTES.AFTER_PARTY}/> :
            <WeddingPageBase authUser={authUser}/>}
    </AuthUserContext.Consumer>
)

const useStyles = makeStyles(styles);

const WeddingPageBase = (props) => {
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
                                <h1 className={classes.title}>August 5th, 2021</h1>
                                <h3 className={classes.subtitle}>
                                    Tucker House Inn, Friday Harbor, Washington
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <WeddingDetailsSection/>
            </div>
            <Footer />
        </div>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WeddingPage);