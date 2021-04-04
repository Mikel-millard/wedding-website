import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import styles from '../../../assets/jss/website-template/views/afterPartyPageSections/AfterPartyLocation';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import classNames from 'classnames';
import gardenPavilion from "../../../assets/img/gardenPavilion.jpg";

const useStyles = makeStyles(styles);

export default function AfterPartyLocationSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>

                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={gardenPavilion}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>

                <h3>
                    <i>Soos Creek botanical Garden & Heritage Center</i>
                    <br/>
                    <i>29308 132nd Ave SE Auburn, WA 98092</i>
                </h3>

                <h4>
                    Soos Creek Botanical Garden and Heritage Center is a beautiful slice of nature located in Auburn,
                    Washington. In August, a huge variety of beautiful flowers will be in blom. Soos Creek Botanical
                    Garden has a wide variety of Scenery for us to enjoy. Please come prepared to explore!

                    <br/>
                    <br/>
                    Please join us at the pavilion for food and fun to celebrate our marriage!

                    <br/>
                    <br/>
                    Please find their website
                    &nbsp;<a href="https://www.sooscreekbotanicalgarden.org">here</a>&nbsp;
                    in case you want more information.
                </h4>
            </div>
        </div>
    )
}