import React, {useState} from 'react';

// application routing components
import {withRouter} from 'react-router-dom';

// @material-ui/core components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// firebase components
import {withFirebase} from "../../components/Firebase";

// constants
import * as ROUTES from "../../constants/routes";

// class composition
import {compose} from "recompose";

// core components
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';

// application views
import {SignUpLink} from "../SignUpPage";

// user authentication components
import AuthUserContext from '../../components/Session/context';

import styles from '../../assets/jss/website-template/views/signInPage';

import image from '../../assets/img/starring_into_lake.jpg';
import Footer from '../../components/Footer/Footer';
import * as TEXT from '../../constants/text';
import {Redirect} from 'react-router';

const PasswordChangePage = () => (
    <AuthUserContext.Consumer>
        {authUser => authUser === null ?
            <Redirect to={ROUTES.LANDING}/> :
            <PasswordChangeForm authUser={authUser}/> }
    </AuthUserContext.Consumer>
);

const useStyles = makeStyles(styles);

const PasswordChangePageBase = (props) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const classes = useStyles();
    const isInvalid = newPassword === '' || confirmPassword === '' || newPassword !== confirmPassword;
    const {...rest} = props;

    const doSubmit = event => {
        props.firebase
            .doPasswordUpdate(newPassword)
            .then(() => {
                setNewPassword(newPassword);
                setConfirmPassword(confirmPassword);
                props.history.push(ROUTES.WEDDING);
            })
            .catch(error => {
                setError(error);
            });

        event.preventDefault();
    }

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand={TEXT.MIKEL_AND_ABIGAIL_WEDDING}
                rightLinks={<HeaderLinks authUser={props.authUser}/>}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top left"
                }}
            >
                <Grid container component="main" justify="center" className={classes.container}>
                    <CssBaseline/>
                    <Grid item component={Paper} xs={12} sm={12} md={4}>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Change Password
                            </Typography>
                            <form className={classes.form} noValidate onSubmit={doSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="New Password"
                                    type="password"
                                    id="new-password"
                                    value={newPassword}
                                    onChange={event => setNewPassword(event.target.value)}
                                    autoComplete="current-password"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={event => setConfirmPassword(event.target.value)}
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    disabled={isInvalid}
                                >
                                    Change Password
                                </Button>
                                {error && <p>{error.message}</p>}
                                <Grid container>
                                    <Grid item>
                                        <SignUpLink href="#" variant="body2"/>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <Footer whiteFont/>
            </div>
        </div>
    );
}

const PasswordChangeForm = compose(
    withRouter,
    withFirebase,
)(PasswordChangePageBase);

// const condition = authUser => authUser !== null;

export default PasswordChangePage;

export {PasswordChangeForm};