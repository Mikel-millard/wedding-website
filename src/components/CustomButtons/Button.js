import React from 'react';

// nodejs library to set properties for components
import PropTypes from 'prop-types';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

// core components
import buttonStyle from '../../assets/jss/website-template/components/buttonStyle';

const makeComponentStyles = makeStyles(() => ({
    ...buttonStyle
}));

const RegularButton = React.forwardRef((props, ref) => {
    const {
        block,
        color,
        children,
        disabled,
        fullWidth,
        justIcon,
        link,
        round,
        simple,
        size,
        className,
        ...rest
    } = props;

    const classes = makeComponentStyles();

    const btnClasses = classNames({
        [classes.button]: true,
        [classes.block]: block,
        [classes[color]]: color,
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,
        [classes.justIcon]: justIcon,
        [classes.link]: link,
        [classes.round]: round,
        [classes.simple]: simple,
        [classes[size]]: size,
        [className]: className
    });

    return (
        <Button {...rest} ref={ref} className={btnClasses}>
            {children}
        </Button>
    );
});

RegularButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "facebook",
        "twitter",
        "google",
        "github",
        "transparent"
    ]),
    size: PropTypes.oneOf(["sm", "lg"]),
    simple: PropTypes.bool,
    round: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.bool,
    justIcon: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
};

export default RegularButton;