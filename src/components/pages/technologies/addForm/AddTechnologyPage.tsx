import React from "react";
import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import AddTechnologyForm, {TechnologyFormPayload} from "./AddTechnologyForm";
import {FormikHelpers} from "formik/dist/types";
import {TechnologyDataPayload} from "../../../../api/model/technologyDataPayload";
import {useDispatch} from "../../../../store/store";
import {addTechnology} from "../../../../store/technologies/actions";
import {GET_ROUTE} from "../../../../route/routes";
import {useHistory} from "react-router-dom";

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

const AddTechnologyPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (values: TechnologyFormPayload, {setSubmitting}: FormikHelpers<TechnologyFormPayload>) => {
        const {name, description, image} = values
        setSubmitting(true)

        const payload: TechnologyDataPayload = {
            name,
            description,
            image: image?.filename
        }
        const result = await dispatch(addTechnology(payload))

        setSubmitting(false);
        if (result) {
            history.push(GET_ROUTE.TECHNOLOGY(result.id))
        }
    }
    return <>
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" className={classes.title}>
                Add Technology
            </Typography>
            <div>
                <AddTechnologyForm onSubmit={onSubmit}/>
            </div>
        </Paper>
    </>
}
export default AddTechnologyPage