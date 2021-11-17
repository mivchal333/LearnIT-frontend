import React from 'react'
import RegisterForm from "./RegisterForm";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import {getStaticImageUrl, GIRL_LEARNING_LAPTOP_IMAGE_PATH} from "../../../service/staticProvider";
import Typography from "@material-ui/core/Typography";


interface StyleProps {
    imagePath: string,
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: (props) => `url(${props.imagePath})`,
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
        fontWeight: 450,
        color: theme.palette.grey["700"],
        padding: theme.spacing(1)
    }
}));


const RegisterPage = () => {
    const imagePath = getStaticImageUrl(GIRL_LEARNING_LAPTOP_IMAGE_PATH)
    const classes = useStyles({imagePath});

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}>
                <div className={classes.titleWrapper}>
                    <Typography variant="h4" color="textPrimary" className={classes.title}>
                        Wyeliminuj zgadywanie na rozmowach rekrutacyjnych. Zarejestruj się już
                        dziś.
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <RegisterForm/>
            </Grid>
        </Grid>
    )
}
export default RegisterPage