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
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
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

            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Przeglądaj dostępne technologie
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Możesz zdobyć wiedzę we wszystkich dostępnych technologiach. Wybierz interesującą i zacznij
                            naukę!
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TechnologiesBanner