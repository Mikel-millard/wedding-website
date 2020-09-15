import React, {useState} from 'react';
import {Link as RouterLink, withRouter} from 'react-router-dom'
import {compose} from 'recompose';
import {withFirebase} from '../../components/Firebase'

import * as ROUTES from '../../constants/routes'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignInPage, {SignInLink} from "../SignInPage";
import styles from '../../assets/jss/website-template/views/signUpPage';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import image from '../../assets/img/kissing.JPG';
import Paper from '@material-ui/core/Paper';
import AuthUserContext from '../../components/Session/context';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(styles);


const SignUpPage = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser === null ?
                <SignUpForm authUser={null}  /> :
                <SignUpForm authUser={authUser} /> }
        </AuthUserContext.Consumer>
    </div>
);

const SignUpFormBase = (props) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [inviteCode, setInviteCode] = useState('');
    const [error, setError] = useState(null);
    const {...rest} = props;

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

    const doSubmit = event => {

        props.firebase
            .checkInviteCode(inviteCode)
            .then(role => {
                props.firebase
                    .doCreateUserWithEmailAndPassword(email, passwordOne)
                    .then(authUser => {
                        return props.firebase
                            .user(authUser.user.uid)
                            .set({
                                username,
                                email,
                                role,
                            });
                    })
                    .then(authUser => {
                        setUsername(username);
                        setPasswordOne(passwordOne);
                        setPasswordTwo(passwordTwo);
                        setEmail(email);
                        setInviteCode(inviteCode);
                        props.history.push(ROUTES.HOME);
                    })
                    .catch(error => {
                        setError(error);
                    });
            })
            .catch(error => {
                console.log(error);
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
                <Grid component="main" className={classes.container}>
                    <CssBaseline/>
                    <Grid item component={Paper} xs={12} sm={12} md={4}>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <form className={classes.form} noValidate onSubmit={doSubmit}>
                                <TextField
                                    margin="normal"
                                    autoComplete="fname"
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={passwordOne}
                                    onChange={event => setPasswordOne(event.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Confirm Password"
                                    type="password"
                                    id="password"
                                    autoComplete="confirm-password"
                                    value={passwordTwo}
                                    onChange={event => setPasswordTwo(event.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="inviteCode"
                                    label="InviteCode"
                                    id="inviteCode"
                                    autoComplete="inviteCode"
                                    value={inviteCode}
                                    onChange={event => setInviteCode(event.target.value)}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    disabled={isInvalid}
                                >
                                    Sign Up
                                </Button>
                                {error && <p>{error.message}</p>}
                                <Grid container>
                                    <Grid item>
                                        <SignInLink href="#" variant="body2"/>
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

const SignUpLink = () => (
    <p>
        <RouterLink to={ROUTES.SIGN_UP}>Don't have an account? Sign Up</RouterLink>
    </p>
);

const SignUpForm = compose(
    withFirebase,
    withRouter,
)(SignUpFormBase);

export default SignUpPage;

export {SignUpForm, SignUpLink};