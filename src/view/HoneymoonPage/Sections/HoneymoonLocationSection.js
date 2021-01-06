import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import styles from '../../../assets/jss/website-template/views/honeymoonPageSections/HoneymoonLocation';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import cancun from '../../../assets/img/cancun.jpg';
import classNames from 'classnames';

const useStyles = makeStyles(styles);

export default function HoneymoonDetailsSection() {
    const classes = useStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h3>
                    <i>Cancun, Q.R., Mexico -</i>
                </h3>
                <h4>
                    Cancún is located in the Yucatán Peninsula in the north of Quintana Roo State in Mexico. Its airport
                    is located five kilometers away from the Hotel Zone.
                    <br/>
                    <br/>
                    Taken from <a href="https://www.visitmexico.com/en/quintana-roo/cancun">visitmexico.com</a>, below are
                    some more details about cancun.
                    <br/>
                    <br/>
                    Its beautiful scenery framed by white sand beaches and turquoise sea; its extension and biodiversity
                    in its reefs, lagoons, cenotes and forest; its ancestral Mayan culture wealth; its great air and ground
                    transportation connectivity and; its highest level hotel infrastructure have positioned Cancún, Quintana Roo,
                    as the most awarded Mexican tourist destination in the world and as a leader city in Latin America.
                    <br/>
                    <br/>
                    Cancún was the first tourist development of the Fondo Nacional de Turismo (FONATUR in its Spanish acronym).
                    After its opening in the early seventies, travelers from all latitudes immediately arrived to explore
                    its 23 kilometer coastline and to enjoy the quality of its hotels (35 thousand rooms) that still set
                    the highest hospitality standards for the rest of the world.
                    <br/>
                    <br/>
                    When talking about Cancún, it's impossible to avoid its beaches, which are mainly located along the
                    Kukulkan Boulevard in the Hotel Zone. If you travel with children, elderly people, or in the case
                    that you can´t swim very well, we suggest you choose a hotel located between kilometers 3 to 8.5. In
                    those specific beaches, ocean waves are soft as they are located in front of Isla Mujeres which allows
                    the formation of a bay called Bahía de Isla Mujeres.
                    <br/>
                    <br/>
                    On the other hand, if you stay downtown, you will be able to find 11 public beaches such as Perlas,
                    Langostas, Tortugas, Delfines and Chac Mol. Most of them have been granted with the Blue Flag eco-label
                    which certifies coast destinations that have reached top standards in water quality, environmental management,
                    safety, services and environmental education activities.
                    <br/>
                    <br/>
                    Besides having the best beaches in the world, you can enjoy exciting water activities in Cancún such
                    as diving, snorkeling, kayaking, sailing on a Catamaran or speed boat, flyboarding, windsurfing and
                    paddle boarding in the Caribbean Sea or the Nichupte Lagoon. Both immense water bodies frame the scenery.
                    <br/>
                    <br/>
                    When it comes to food, Cancún offers a culinary experience through the fusion of Mexican and international
                    flavors which are masterfully developed by the best chefs in the world. There are restaurants that have
                    been granted with the 5 Diamonds of the American Automobile Association and have been recognized by
                    Michelin Guide.
                    <br/>
                    <br/>
                    It is not possible to have vacation time in Cancún without being caught by its nightlife, which flows
                    in clubs where international DJs and acrobatic performances can be found. In addition, fun can go beyond
                    the shore and you can enjoy parties on board a Pirate boat or on a trajinera.
                    <br/>
                    <br/>
                    If you want to explore the surroundings, Cancún is also an entry to other popular destinations in the
                    Riviera Maya: Playa del Carmen, Tulum, Holbox, Isla Mujeres and Cozumel. Moreover, you can visit the
                    Mayan Archaeological Sites such as Chichén Itzá, Cobá and Muyil, just to name a few.
                </h4>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={cancun}
                            className={navImageClasses}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}