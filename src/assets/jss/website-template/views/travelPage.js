import {container} from '../material-kit-react';

const travelPageStyles = {
    container: {
        ...container,
        marginTop: "0px"
    },
    brand: {
        color: "#FFFFFF",
        textAlign: "left"
    },
    title: {
        fontFamily: "'Allura', cursive",
        fontSize: "4.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative"
    },
    containerTitle: {
        fontSize: "4.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative",
        textAlign: "center"
    },
    subtitle: {
        fontFamily: "'Allura'",
        // fontSize: "1.313rem",
        fontSize: "2rem",
        maxWidth: "500px",
        margin: "10px 0 0"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    description: {
        color: "#999"
    }
}

export default travelPageStyles;