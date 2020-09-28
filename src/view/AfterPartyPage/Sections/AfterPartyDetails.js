import React from 'react';

import styles from '../../../assets/jss/website-template/views/afterPartyPageSections/AfterPartyDetails';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

export default function AfterPartyDetailsSection() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h1>
                    After Party Details
                </h1>

                <br/>

                <h4>
                    We will be having a party for friends and family a couple days after the wedding. This page will
                    provide all the details of this party.
                </h4>
            </div>
        </div>
    )
}