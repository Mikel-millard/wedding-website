import React, {useState} from 'react';
import * as ROUTES from '../../constants/routes';
import {withFirebase} from '../../components/Firebase';
import {Link as RouterLink} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import image from '../../assets/img/starring_into_lake.jpg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import styles from '../../assets/jss/website-template/views/signInPage';
import AuthUserContext from '../../components/Session/context';

import Footer from '../../components/Footer/Footer';
import * as TEXT from '../../constants/text';

const PasswordForgetPage = () => (
        <AuthUserContext.Consumer>
            {authUser => authUser === null ?
                <PasswordForgetForm authUser={null}/> :
                <PasswordForgetForm authUser={authUser}/>}
        </AuthUserContext.Consumer>
)

const useStyles = makeStyles(styles);

const PasswordForgetFormBase = props => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const {...rest} = props;
    const classes = useStyles();
    const isInvalid = email === '';

    const doSubmit = event => {
        props.firebase
            .doPasswordReset(email)
            .then(() => {
                setEmail(email);
                setMessage("Check your email for password reset link");
            })
            .catch(error => {
                setError(error);
            });

        event.preventDefault();
    };

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand={TEXT.MIKEL_AND_ABIGAIL_WEDDING}
                rightLinks={<HeaderLinks authUser={props.authUser}/>}
                {...rest}
            >
            </Header>
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
                                Forgot Password
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
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    disabled={isInvalid}
                                >
                                    Send Email
                                </Button>
                                {error && <p>{error.message}</p>}
                                {message !== '' && <p>{message}</p>}
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <Footer whiteFont/>
            </div>
        </div>
    )

}
const PasswordForgetLink = () => (
    <p>
        <RouterLink to={ROUTES.PASSWORD_FORGET}>Forgot Password?</RouterLink>
    </p>
)

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export {PasswordForgetForm, PasswordForgetLink}