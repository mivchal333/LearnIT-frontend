import React, {useState} from "react";
import {Formik} from 'formik';
import {Button, Grid, Snackbar, TextField} from "@material-ui/core";
import {isEmpty} from "lodash-es";
import {useDispatch} from "../../../store/store";
import {addTechnology} from "../../../store/technologies/actions";
import AddIcon from '@material-ui/icons/Add';
import MuiAlert from '@material-ui/lab/Alert';

export interface CreateTechnologyPayload {
    name: string,
    description: string,
}

interface FormErrorState {
    name?: string,
    description?: string,
}

const AddTechnologyForm = () => {
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
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    helperText={errors.name}
                                    error={!isEmpty(errors.name)}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    label="Description"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    helperText={errors.description}
                                    error={!isEmpty(errors.description)}
                                    multiline
                                    rows={4}
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
                <MuiAlert onClose={() => setShowMessage(false)} severity="success" elevation={6} variant="filled">
                    Success! Technology added.
                </MuiAlert>
            </Snackbar>
        </>
    )
}
export default AddTechnologyForm