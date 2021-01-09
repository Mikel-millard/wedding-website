import React from 'react';
import classNames from 'classnames';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

import styles from '../../assets/jss/website-template/components/underConstructionStyle';
import {makeStyles} from '@material-ui/core/styles';
import construction from '../../assets/img/under_construction.jpg';

const useStyles = makeStyles(styles);

export default function UnderConstruction() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2>
                    <strong>Under Construction</strong>
                </h2>

                <br/>

                <h4>
                    This page is still under construction. Please check back later for updates as the details get worked
                    out. Thank you for your patience.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={construction}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}