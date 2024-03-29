import React from 'react';

import {withFirebase} from '../Firebase';
import Button from '../CustomButtons/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styles from '../../assets/jss/website-template/components/headerLinksSytle';

const useStyles = makeStyles(styles);

const SignOutButton = ({firebase}) => {
    const classes = useStyles();

    return (
        <Button
            onClick={firebase.doSignOut}
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            <i className={classes.icon + " fas fa-sign-out-alt"}/> Sign Out
        </Button>
    )
};

export default withFirebase(SignOutButton);