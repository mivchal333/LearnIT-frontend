import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {getStaticImageUrl, LEARNING_BANNER_IMAGE_PATH} from "../../../service/staticProvider";
import {Button} from "@material-ui/core";
import {GET_ROUTE} from "../../../route/routes";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: "30px",
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'linear-gradient( rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0.6) 90%)',
        borderRadius: "30px",

    },
    mainFeaturedPostContent: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingTop: theme.spacing(40),
            paddingRight: 0,
        },
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        textShadow: '3px 3px rgba(0, 0, 0, 0.6)'
    },
    subtitle: {
        fontSize: '1.3rem',
        fontWeight: 400,
        textShadow: '2px 2px rgba(0, 0, 0, 0.4)'
    },

}));
const LearningBanner = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturedPost}
               style={{backgroundImage: `url(${getStaticImageUrl(LEARNING_BANNER_IMAGE_PATH)})`}}>
            <div className={classes.overlay}/>
            <Grid container>
                <Grid item md={12}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Grid container justifyContent="space-around" direction="row" alignItems="flex-end">
                            <Grid item>
                                <Typography component="h2" variant="h4" color="inherit" gutterBottom
                                            className={classes.title}>
                                    Sprawimy, że będziesz prawdziwym mistrzem!
                                </Typography>
                                <Typography variant="body1" color="inherit" paragraph className={classes.subtitle}>
                                    Opanuj różne technologie, osiągaj sukcesy na każdym polu
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="default"
                                    to={GET_ROUTE.TECHNOLOGIES()}
                                    component={Link}
                                    size="large"
                                >
                                    Przeglądaj technologie
                                </Button>
                            </Grid>
                        </Grid>

                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default LearningBanner