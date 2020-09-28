import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import styles from '../../../assets/jss/website-template/views/honeymoonPageSections/HoneymoonLocation';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import nassau from '../../../assets/img/nassau.JPEG';
import classNames from 'classnames';

const useStyles = makeStyles(styles);

export default function HoneymoonDetailsSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h3>
                    <i>Nassau, Bahamas -</i>
                </h3>
                <h4>
                    With the lure of a big city and the ease of tropical utopia, Nassau & Paradise Island are considered
                    by many as, well, paradise. Nassau, the capital of The Bahamas, is a bustling metropolitan hub full
                    of culture and modern amenities. To the north lies Paradise Island. Its name tells you everything.
                    It’s 685 acres of pure euphoria, developed almost exclusively to delight and accommodate visitors.
                    The island boasts resorts, hotels, restaurants, shops, nightlife, a golf course, an aquarium and a
                    casino.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={nassau}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}