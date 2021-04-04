import React from 'react';

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

// nodejs library that concatenates classes
import classNames from 'classnames';

import styles from '../../../assets/jss/website-template/views/accommodationsPageSections/AccommodationsDetails';
import suites from '../../../assets/img/tucker_house_harrison_house.jpg';

const useStyles = makeStyles(styles);

export default function AccommodationsSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2>
                    Accommodations Details
                </h2>

                <br/>

                <h4>
                    We will be providing the accommodations for wedding guests. Below is a little bit about the Tucker House Inn &
                    Harrison House Suites, which is where guests will be staying.
                </h4>

                <br/>

                <h3>
                    <strong>Accommodations :</strong> <br/>
                </h3>

                <h4>
                    <i>Tucker House Inn & Harrison House Suites -</i> <br/>
                    Located just 60 miles from Seattle, the Tucker House Inn & Harrison House Suites are an ideal base
                    for your Pacific Northwest retreat. Only steps from the ferry landing, lodging options in our 1898
                    Victorian and 1905 historic Craftsman homes are perfect for couples, families, and travelers of all
                    ages. You can even bring your four-legged friends along; our suites and cottages are pet friendly!
                    Our guests enjoy the comfortable and relaxed atmosphere of our guest accommodations, as well as a
                    hot, multi-course gourmet breakfast made from the freshest seasonal ingredients each day. Arrive
                    via airplane, seaplane, or ferry, and then spend the day exploring Friday Harbor’s eclectic
                    collection of art galleries, coffeehouses, boutiques, and restaurants, or take advantage of a
                    variety of exciting activities including whale and wildlife viewing, hiking and biking, and
                    world-class kayaking. Whatever you choose to do, a trip to the San Juan Islands is the ultimate
                    haven from the stresses of mainland life. Let our innkeepers assist you in planning your San Juan
                    Island getaway!
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={suites}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>

                <br/>

                <h4>
                    Below are the checkin and checkout times.
                        Check in: Wednesday August 4th after 4 pm.
                        Check out: Friday August 6th before 10 am.
                </h4>
            </div>
        </div>
    )
}