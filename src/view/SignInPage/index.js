import React, {useEffect, useState} from 'react';

// application routing components
import {Link as RouterLink, withRouter} from 'react-router-dom';

// @material-ui/core components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
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
import {PasswordForgetLink} from "../PasswordForgetPage";

// user authentication components
import {AuthUserContext, withAuthorization} from '../../components/Session';
import withAuthentication from '../../components/Session/withAuthentication';

import styles from '../../assets/jss/website-template/views/signInPage';

import image from '../../assets/img/kissing.JPG';

const SignInPage = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser === null ?
                <SignInForm authUser={null} /> :
                <SignInForm authUser={authUser}/> }
        </AuthUserContext.Consumer>
    </div>
);

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Company Here
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(styles);

const SignInFormBase = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const classes = useStyles();
    const isInvalid = password === '' || email === '';
    const {...rest} = props;

    console.log('In Sign In Page');
    console.log(props.authUser === null);

    const doSubmit = event => {
        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail(email);
                setPassword(password);
                props.history.push(ROUTES.HOME);
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
                brand="Material Kit React"
                rightLinks={<HeaderLinks authUser={props.authUser}/>}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <Grid container component="main" className={classes.container}>
                    <CssBaseline/>
                    <Grid item component={Paper} xs={12} sm={12} md={4}>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form className={classes.form} noValidate onSubmit={doSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    disabled={isInvalid}
                                >
                                    Sign In
                                </Button>
                                {error && <p>{error.message}</p>}
                                <Grid container>
                                    <Grid item xs>
                                        <PasswordForgetLink href="#" variant="body2"/>
                                    </Grid>
                                    <Grid item>
                                        <SignUpLink href="#" variant="body2"/>
                                    </Grid>
                                </Grid>
                                <Box mt={2}>
                                    <Copyright/>
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const SignInLink = () => (
    <p>
        <RouterLink to={ROUTES.SIGN_IN}>Already have an account? Sign in</RouterLink>
    </p>
);

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

// const condition = authUser => authUser !== null;

export default SignInPage;

export {SignInForm, SignInLink};