import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import styles from '../../assets/jss/website-template/components/footerStyle';

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="/"
                                className={classes.block}
                                target="_blank"
                            >
                                Mikel Millard
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="mailto:mikel_and_abigail@outlook.com?subject=Support for mikel-and-abigails-wedding.web.app"
                                className={classes.block}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact Us
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="/"
                                className={classes.block}
                                target="_blank"
                            >
                                Licenses
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} , made with{" "}
                    <Favorite className={classes.icon} /> by{" "}
                    <a
                        href="/"
                        className={aClasses}
                        target="_blank"
                    >
                        Mikel Millard
                    </a>{" "}
                    Created for Mikel and Abigails Wedding
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};