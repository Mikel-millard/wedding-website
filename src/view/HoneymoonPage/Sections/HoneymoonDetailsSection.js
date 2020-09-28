import React from 'react';

import styles from '../../../assets/jss/website-template/views/honeymoonPageSections/HoneymoonDetails';
import {makeStyles} from '@material-ui/core/styles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import royalBahamian from '../../../assets/img/royal_bahamian.jpg';
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
                    We are currently planning to spend 4 nights at the Sandals Resort in the Bahamas. These are
                    currently tentative plans so the date and location may change. Check back for updates closer to the
                    wedding. Find more about the resort and Nassau, Bahamas below.
                </h4>

                <br/>

                <h3>
                    <i>Sandals Royal Bahamian -</i>
                </h3>
                <h4>
                    World renowned Sandals and Beaches Resorts has transformed from one brand and one resort in Montego
                    Bay, Jamaica to become one of the most well-known and award-winning hospitality names in the world.
                    With five brands and 24 properties in seven countries including Antigua, The Bahamas, Grenada,
                    Barbados, Jamaica, Saint Lucia and Turks and Caicos, Sandals and Beaches Resorts is the undisputed
                    leader of Caribbean vacation experiences and remains fiercely committed to the region, dedicating
                    itself to innovative resort development that in the words of Chairman and Founder Gordon "Butch"
                    Stewart, "exceed expectations" for guests, associates and the people who call the Caribbean home.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={royalBahamian}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}