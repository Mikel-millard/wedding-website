import {container} from '../material-kit-react';
import commonStyles from '../commonStyles';

const signUpPageStyle = theme => ({
    ...commonStyles,
    container: {
        ...commonStyles.container,
        paddingBottom: "0px"
    },
    paper: {
        margin: theme.spacing(0, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

export default signUpPageStyle;