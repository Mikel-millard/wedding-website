import React from 'react';
import classNames from 'classnames';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import location from '../../../assets/img/tucker_house_location.png';
import travelersJoy from '../../../assets/img/travelers_joy.png';
import styles from '../../../assets/jss/website-template/views/registryPageSections/RegistryDetails';
import {makeStyles} from '@material-ui/core/styles';
import * as URLS from '../../../constants/urls';

const useStyles = makeStyles(styles);

export default function RegistryDetailsSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h1>
                    <strong>Registry Details</strong>
                </h1>

                <br/>
                <h4>
                    Below are the links to our current registries. We are currently registered at (insert places here),
                    but we also have registered at a honeymoon registry. If you feel inclined to help with experiences
                    on our honeymoon rather than physical gifts, feel free to check out the below link to Travelers Joy.
                </h4>

                <a
                    href="http://www.travelersjoy.com/mikellovesabigail/"
                    target="_blank"
                >
                    <img
                        src={travelersJoy}
                        alt="..."
                        className={imageClasses}
                    />
                </a>
            </div>
        </div>
    )
}