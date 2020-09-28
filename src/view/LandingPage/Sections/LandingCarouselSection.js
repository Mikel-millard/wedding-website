import React from 'react';

// react component for creating beautiful carousel
import Carousel from 'react-slick';

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';

// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Card from '../../../components/Cards/Card';

// add images here
import image1 from '../../../assets/img/railing_kiss.jpg';
import image2 from '../../../assets/img/bench_back.jpg';
import image3 from '../../../assets/img/ring_solo.jpg';
import image4 from '../../../assets/img/flower_covered_isle_garden.jpg';

import styles from '../../../assets/jss/website-template/views/landingPageSections/LandingCarousel';

const useStyles = makeStyles(styles);

export default function LandingCarouselSection() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                        <Card carousel>
                            <Carousel {...settings}>
                                <div>
                                    <img
                                        src={image1}
                                        alt="First slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons"/>
                                            Riverbend Park, Virginia
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={image2}
                                        alt="Second slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            Riverbend Park, Virginia
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={image3}
                                        alt="Third slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            Riverbend Park, Virginia
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={image4}
                                        alt="Fourth slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            Tucker House Inn, San Juan Island, Washington
                                        </h4>
                                    </div>
                                </div>
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
