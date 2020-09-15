import React, {useState} from 'react';

// react components for router app without refresh
import {Link} from 'react-router-dom';

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import {Apps, CloudDownload, ExitToApp} from '@material-ui/icons';

// need to add imports for own CustomDropdown and CustomButtons here
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Button from '../CustomButtons/Button';

// styles for header links
import styles from '../../assets/jss/website-template/components/headerLinksSytle';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import * as TEXT from '../../constants/text';

import SignOutButton from '../SignOutButton';
import * as VIEWS from '../../constants/authorizedViews';

const useStyles = makeStyles(styles);

export default function HeaderLinks({authUser}, props) {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {authUser === null ? null : <Dropdown authUser={authUser}/>}
            {authUser === null ? <SignInLink/> : null}
            {authUser === null ? <SignUpLink/> : null}
            {authUser === null ? null : <SignOutLink/>}
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Follow us on instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-instagram"}/>
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    )
}

const SignOutLink = () => {
    const classes = useStyles();

    return (
        <ListItem className={classes.listItem}>
            <SignOutButton/>
        </ListItem>
    )
}

const SignUpLink = () => {
    const classes = useStyles();

    return (
        <ListItem className={classes.listItem}>
            <Link to={ROUTES.SIGN_UP}
                  className={classes.customLink}
            >
                <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <i className={classes.icon + " fas fa-user-plus"}/> Sign Up
                </Button>
            </Link>
        </ListItem>
    )
}

const SignInLink = () => {
    const classes = useStyles();

    return (
        <ListItem className={classes.listItem}>
            <Link to={ROUTES.SIGN_IN}
                  className={classes.customLink}
            >
                <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <ExitToApp className={classes.icon}/> Sign In
                </Button>
            </Link>
        </ListItem>
    )
}

const Dropdown = (props) => {
    const role = props.authUser.role;
    const weddingViews = role === ROLES.WEDDING;
    const generalViews = role === ROLES.GENERAL;

    const classes = useStyles();

    const AfterPartyView = () => {
        return (
            <Link to={ROUTES.AFTER_PARTY} className={classes.dropdownLink}>
                {TEXT.AFTER_PARTY}
            </Link>
        )
    }

    const RegistryView = () => {
        return (
            <Link to={ROUTES.REGISTRY} className={classes.dropdownLink}>
                {TEXT.REGISTRY}
            </Link>
        )
    }

    const WeddingView = () => {
        return (
            <Link to={ROUTES.WEDDING} className={classes.dropdownLink}>
                {TEXT.WEDDING}
            </Link>
        )
    }

    return (
        <ListItem className={classes.listItem}>
            <CustomDropdown
                noLiPadding
                buttonText="Components"
                buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                }}
                buttonIcon={Apps}
                dropdownList={[
                    weddingViews ? WeddingView() : '',
                    weddingViews || generalViews ? AfterPartyView() : '',
                    weddingViews || generalViews ? RegistryView() : ''
                ]}
            />
        </ListItem>
    )
}



