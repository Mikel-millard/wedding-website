import React from 'react';
import classNames from 'classnames';
import travelersJoy from '../../../assets/img/travelers_joy.png';
import macys from '../../../assets/img/macys.jpg';
import bedBathBeyond from '../../../assets/img/bedBathBeyond.jpg';
import styles from '../../../assets/jss/website-template/views/registryPageSections/RegistryDetails';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

export default function RegistryDetailsSection() {
    const classes = useStyles();
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
                    Wedding gits are not expected from any of the wedding or secondary reception guests. However, below
                    are the links to our current registries if you feel inclined. We are currently registered at Macy's
                    and Bed Bath and Beyond,  but we also have registered at a honeymoon registry. If you feel inclined
                    to help with experiences on our honeymoon rather than physical gifts, feel free to check out the
                    below link to Travelers Joy.
                </h4>

                <br/>
                <br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                    href="http://www.travelersjoy.com/mikellovesabigail/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={travelersJoy}
                        alt="..."
                        className={imageClasses}
                    />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                    href="https://www.macys.com/wgl/registry/guest/MIKEL-MILLARD-ABIGAIL-BROWN/7255839"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={macys}
                        alt="..."
                        className={imageClasses}
                    />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                    href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550148748?eventType=Wedding"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={bedBathBeyond}
                        alt="..."
                        className={imageClasses}
                    />
                </a>
            </div>
        </div>
    )
}