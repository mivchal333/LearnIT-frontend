import React from 'react'
import {getStaticImageUrl, SOCIAL_MEDIA_BANNER_IMAGE_PATH} from "../../../../service/staticProvider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

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
        height: "20vw",
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'linear-gradient( rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0.5) 90%)',
        borderRadius: "30px",

    },
    mainFeaturedPostContent: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingTop: theme.spacing(20),
            paddingRight: 0,
        },
    },
    title: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        textShadow: '2px 3px rgba(0, 0, 0, 0.6)'
    },
    subtitle: {
        fontSize: '1.3rem',
        fontWeight: 400,
        textShadow: '2px 2px rgba(0, 0, 0, 0.4)'
    },

}));

const TechnologiesBanner = () => {
    const classes = useStyles();

    return (
        <Paper
            className={classes.mainFeaturedPost}
            style={{backgroundImage: `url(${getStaticImageUrl(SOCIAL_MEDIA_BANNER_IMAGE_PATH)})`}}
        >
            <div className={classes.overlay}/>

            <div className={classes.mainFeaturedPostContent}>
                <Grid container justifyContent="space-around" direction="row" alignItems="flex-end">
                    <Grid item>
                        <Typography
                            component="h2"
                            variant="h4"
                            color="inherit"
                            gutterBottom
                            className={classes.title}
                        >
                            Przeglądaj dostępne technologie
                        </Typography>
                        <Typography variant="body1" color="inherit" paragraph className={classes.subtitle}>
                            Możesz zdobyć wiedzę we wszystkich dostępnych technologiach. Wybierz interesującą i
                            zacznij naukę!
                        </Typography>
                    </Grid>
                </Grid>

            </div>
        </Paper>
    )
}
export default TechnologiesBanner