import React from 'react';

import styles from '../../../assets/jss/website-template/views/honeymoonPageSections/HoneymoonDetails';
import {makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(styles);

export default function HoneymoonDetailsSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2>
                    Honeymoon Details
                </h2>

                <br/>

                <h4>
                    We are currently planning to spend 5 nights in Cancun, Q.R., Mexico. These are
                    currently tentative plans so the date and location may change. Check back for updates closer to the
                    wedding. Find more about Cancun, Q.R., Mexico below.
                </h4>
            </div>
        </div>
    )
}