import React from 'react';
import classNames from 'classnames';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import location from '../../../assets/img/tucker_house_location.png';

import styles from '../../../assets/jss/website-template/views/travelPageSections/TravelDetails';
import {makeStyles} from '@material-ui/core/styles';
import * as URLS from '../../../constants/urls';

const useStyles = makeStyles(styles);

export default function TravelDetailsSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h1>
                    Travel Details
                </h1>

                <br/>
                <h4>
                    <strong>Tucker House Inn </strong> <br/>
                    <strong>Harrison House Suites: </strong> <br/>
                </h4>

                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={location}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>

                <br/>

                <h4>
                    <strong>Ferry Details:</strong><br/>
                    Travel to the island will require use of a ferry. Reservations can be made for the Washington State
                    Ferry online or via phone beginning 2 weeks before each new ferry schedule start date. Please go
                    <a href="https://secureapps.wsdot.wa.gov/Ferries/Reservations/Vehicle/default.aspx">here</a>
                    to make a reservation for the ferry. Bring the printed bar code from your  reservation or confirmation
                    number with you to the ferry. It is suggested to arrive no more than 90 minutes in advance of the
                    scheduled ferry time, and no later than 30 minutes before. Please feel free to reach out to us if
                    there are any questions about using the ferry.
                </h4>

                <br/>

                <h4>
                    <strong>Travel Time from Seattle, WA :</strong> 3 hours <br/>
                    <i>
                        <a
                            style={{color: 'black'}}
                            href={URLS.SEATTLE_DIRECTIONS}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Click here
                        </a>
                    </i> for directions from Seattle, WA <br/>

                    <strong>Travel Time from Spokane, WA :</strong> 7 hours <br/>
                    <i>
                        <a style={{color: 'black'}}
                           href={URLS.SPOKANE_DIRECTIONS}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            Click here
                        </a>
                    </i> for directions from Spokane, WA
                </h4>
            </div>
        </div>
    )
}