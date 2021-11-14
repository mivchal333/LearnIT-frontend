import React from "react";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {getStaticImageUrl, GIRL_LEARNING_LAPTOP_IMAGE_PATH} from "../../../service/staticProvider";
import LoginForm from "./LoginForm";

interface StyleProps {
    imageUrl: string
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: props => `url(${props.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    titleWrapper: {
        padding: theme.spacing(6, 2, 2, 2),
        display: "flex",
        justifyContent: "center",
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
    }
}));

const LoginPage = () => {
    const imageUrl = getStaticImageUrl(GIRL_LEARNING_LAPTOP_IMAGE_PATH);
    const classes = useStyles({imageUrl});

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}>
                <div className={classes.titleWrapper}>
                    <Typography variant="h4" color="textPrimary" className={classes.title}>
                        Ucz się pilnie we własnym domu.
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Logowanie
                    </Typography>
                    <LoginForm/>
                </div>
            </Grid>
        </Grid>
    );
}
export default LoginPage