import React from 'react';

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

// nodejs library that concatenates classes
import classNames from 'classnames';

import styles from '../../../assets/jss/website-template/views/aboutUsPageSections/AboutUsDetails';
import cwu from '../../../assets/img/cwu.jpg';

const useStyles = makeStyles(styles);

export default function AboutUsSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2>
                    About Us
                </h2>

                <br/>

                <h4>
                    Love was in the air in Spring Quarter at Central Washington University. Mike and Abigail met in class,
                    which was just a secret code for swiping right on Tinder. He asked her on a coffee date and she accepted.
                    She introduced him to the wibbly wobbly world of Doctor Who and they bonded over Seattle Seahawks games.
                    <br/>
                    <br/>
                    Abigail was drawn to Mike’s fiery red beard and his gift to make her smile and laugh no matter what.
                    She felt they complimented each other immediately. For Mike, it was Abigail’s witty humor and piercing
                    sarcasm. These traits made every day interesting and fun to spend with her.
                    <br/>
                    <br/>
                    Three years of college romance, Mike moved to Herndon to start a job while Abigail stayed in Washington
                    to finish her degree with only a few months left until graduation. They powered through the thousands
                    of miles of distance and stayed connected. June 2018, Abigail graduated and July 3rd Mike flew to help
                    pack her car and they spent the Fourth of July in Seattle before starting their drive East. Three days
                    and 2,719 miles later they arrived to begin their next adventure. They stopped at Mount Rushmore and
                    drove through the terrible  traffic of Chicago, but they eventually arrived in Virginia July 7th.
                    <br/>
                    <br/>
                    The first year on the East Coast was difficult. Abigail didn’t start working until November and they
                    had to make their own holiday traditions. They traveled home the next year, spending Thanksgiving with
                    Mike’s family and Christmas with Abigail’s. It was Christmas Mike decided to pop the special question.
                    He was able to buy the ring without her knowing with the assistance of Abigail’s sister. He asked her in private and they were able to celebrate with family.
                    <br/>
                    <br/>
                    Mike and Abigail are looking forward to the exciting promises of 2021 and the rest of their future.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={cwu}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}