import React, {useState} from "react";
import {Formik} from 'formik';
import {Button, createStyles, Grid, makeStyles, Snackbar, TextField} from "@material-ui/core";
import {isEmpty} from "lodash-es";
import AddIcon from '@material-ui/icons/Add';
import MuiAlert from '@material-ui/lab/Alert';
import {Link} from "react-router-dom";
import {GET_ROUTE} from "../../../../route/routes";
import {useDispatch} from "../../../../store/store";
import {addTechnology} from "../../../../store/technologies/actions";
import {Theme} from "@material-ui/core/styles";
import ImageField from "./ImageField";

export interface CreateTechnologyPayload {
    name: string,
    description: string,
    imageUrl?: string,
}

interface FormErrorState {
    name?: string,
    description?: string,
    imageUrl?: string,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        nameField: {
            display: 'flex',
        }
    }),
);

const AddTechnologyForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(false)

    const initialValues: CreateTechnologyPayload = {name: '', description: ''}

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={(values: CreateTechnologyPayload) => {
                    const errors: FormErrorState = {};
                    if (isEmpty(values.name)) {
                        errors.name = 'Required';
                    } else if (isEmpty(values.description))
                        errors.description = 'Required';
                    return errors;
                }}
                onSubmit={async (values: CreateTechnologyPayload, {setSubmitting}) => {
                    console.log(values)
                    await dispatch(addTechnology(values))
                    setSubmitting(false);
                    setShowMessage(true)

                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      setFieldValue
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <ImageField
                                    value={values.imageUrl}
                                    onChange={(value) => setFieldValue('imageUrl', value)}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    className={classes.nameField}
                                    label="Name"
                                    name="name"
                                    variant="filled"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    helperText={errors.name}
                                    error={!isEmpty(errors.name)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    name="description"
                                    variant="filled"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    helperText={errors.description}
                                    error={!isEmpty(errors.description)}
                                    multiline
                                    minRows={5}
                                    fullWidth
                                />
                            </Grid>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                color="primary"
                                variant="outlined"
                                startIcon={<AddIcon/>}
                            >

                                Add
                            </Button>
                        </Grid>
                    </form>
                )}
            </Formik>
            <Snackbar open={showMessage} autoHideDuration={6000} onClose={() => setShowMessage(false)}>
                <MuiAlert onClose={() => setShowMessage(false)} severity="success" elevation={6} variant="filled"
                          action={<Button to={GET_ROUTE.TECHNOLOGIES()} component={Link}>
                              Go to list
                          </Button>}>
                    <span>
                        Success! Technology added.
                    </span>
                </MuiAlert>
            </Snackbar>
        </>
    )
}
export default AddTechnologyForm