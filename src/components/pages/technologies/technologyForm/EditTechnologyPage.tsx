import React from "react";
import {CircularProgress, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import TechnologyForm, {TechnologyFormPayload} from "./form/TechnologyForm";
import {useTechnologyPathContext} from "../../game/cards/useTechnologyPathContext";
import {Technology} from "../../../../api/model/technology.model";
import {TechnologyDataPayload} from "../../../../api/model/technologyDataPayload";
import {editTechnology} from "../../../../store/technologies/actions";
import {GET_ROUTE} from "../../../../route/routes";
import {useHistory} from "react-router-dom";
import {useDispatch} from "../../../../store/store";
import {FormikHelpers} from "formik/dist/types";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    title: {
        marginBottom: theme.spacing(3)
    }
}));

const EditTechnologyPage = () => {
    const classes = useStyles();
    const [technology, technologyId] = useTechnologyPathContext()
    const history = useHistory()
    const dispatch = useDispatch()

    const mapToFormValues = (technology: Technology) => ({
        name: technology.name,
        description: technology.description,
        image: technology.image,
    })

    const onSubmit = async (values: TechnologyFormPayload, {setSubmitting}: FormikHelpers<TechnologyFormPayload>) => {
        const {name, description, image} = values
        setSubmitting(true)

        const payload: TechnologyDataPayload = {
            name,
            description,
            image: image?.filename
        }
        const isSuccess: boolean = await dispatch(editTechnology(payload))

        setSubmitting(false);
        if (isSuccess) {
            history.push(GET_ROUTE.TECHNOLOGY(technologyId))
        }
    }
    return <>
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" className={classes.title}>
                Edit Technology
            </Typography>
            <div>
                {technology
                    ? <TechnologyForm initialValues={mapToFormValues(technology)} onSubmit={onSubmit}/>
                    : <CircularProgress/>
                }
            </div>
        </Paper>
    </>
}
export default EditTechnologyPage