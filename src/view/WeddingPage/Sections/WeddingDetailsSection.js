import React from 'react';

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

// nodejs library that concatenates classes
import classNames from 'classnames';

import styles from '../../../assets/jss/website-template/views/weddingPageSections/WeddingDetails';
import marina from '../../../assets/img/friday_harbor_marina.jpg';
import garden from '../../../assets/img/tucker_house_inn_garden.jpg';
import coho from '../../../assets/img/coho_restaurant.jpg';

const useStyles = makeStyles(styles);

export default function WeddingDetailsSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2>
                    Wedding Details
                </h2>

                <br/>

                <h3>
                    <strong>Location :</strong>
                </h3>
                <h4>
                    <i>Friday Harbor, San Juan Island - </i> <br/>
                    When you travel to San Juan Island via ferry you land right in the picturesque seaport of Friday
                    Harbor. A large public marina, great bars and restaurants, specialty shops, art galleries, water
                    activities, business services, and transportation options are all within a short walk. Drive 20
                    minutes from town in any direction to discover a landscape of golden meadows, wooded hillsides,
                    historic parks, hiking trails, mega yachts, and OMG vistas of the nearby islands, snow-capped
                    mountains, shipping channels, and Victoria BC.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={marina}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>

                <br/>
                <br/>

                <h3>
                    <strong>Ceremony :</strong>
                </h3>
                <h4>
                    <i>Tucker House Inn Garden -</i>  <br/>
                    The ceremony will be taking place at the Tucker House Inn garden. This private garden is right outside
                    from the Victoria Flower Garden suite. This garden is the perfect spot for a private and intimate
                    wedding ceremony.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={garden}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>

                <br/>
                <br/>

                <h3>
                    <strong>Reception :</strong>
                </h3>
                <h4>
                    <i>Coho Restaurant -</i>  <br/>
                    A passion for the highest quality ingredients, Coho Restaurant works closely with farmers, growers
                    and local producers throughout the San Juan Islands and the Pacific Northwest. Chef Tim Payne
                    sources the best seasonal offerings to showcase each night on our menu. Coho Restaurant is proud to
                    participate in the Island’s Certified Local Program. Besides obtaining the freshest products around,
                    our local producers offer incredible quality. Coho Restaurant not only showcases local food, but the
                    restaurant’s walls are adorned with local artwork from three Friday Harbor artists. While dining,
                    please enjoy the rotating gallery graciously provided by Dona Reed, BJ Dollahite and Matt Dollahite.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={coho}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}