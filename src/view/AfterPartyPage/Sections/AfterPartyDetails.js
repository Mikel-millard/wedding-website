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
                    There will be a party several days after the wedding for friends and family to celebrate with the
                    bride and groom. The time and location, as well as travel details can be found below. There will also
                    be invitations sent out with these details.

                    <br/>
                    <br/>
                    We will be sending out invitations with RSVP cards. Please RSVP by June 30th 2021.
                </h4>
            </div>
        </div>
    )
}