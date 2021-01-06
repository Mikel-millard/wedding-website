import React from 'react';

import styles from '../../../assets/jss/website-template/views/honeymoonPageSections/HoneymoonDetails';
import {makeStyles} from '@material-ui/core/styles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import resort from '../../../assets/img/under_construction.jpg';
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
                    wedding. Find more about the resort and Cancun, Q.R., Mexico below.
                </h4>

                <br/>

                <h3>
                    <i>Enter Resort Here -</i>
                </h3>
                <h4>
                    This is where the details of the resort we plan to stay at will be put. Please check back later, more
                    details will be added as plans ar finalized.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={resort}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}