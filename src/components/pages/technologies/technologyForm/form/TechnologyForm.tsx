import React from "react";
import {Formik} from 'formik';
import {Button, createStyles, Grid, makeStyles, TextField} from "@material-ui/core";
import {isEmpty} from "lodash-es";
import AddIcon from '@material-ui/icons/Add';
import {Theme} from "@material-ui/core/styles";
import ImageField from "./field/ImageField";
import {UploadedFile} from "../../../../../api/model/uploadedFile.model";
import {useHistory} from "react-router-dom";
import {FormikHelpers} from "formik/dist/types";
import SaveIcon from '@material-ui/icons/Save';

export interface TechnologyFormPayload {
    name: string,
    description: string,
    image?: UploadedFile,
}

export enum FormType {
    ADD, EDIT
}

interface FormErrorState {
    name?: string,
    description?: string,
    image?: string,
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
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        }
    }),
);

export const initialFormState = {name: '', description: ''};

interface PropsType {
    initialValues?: TechnologyFormPayload,
    onSubmit: (values: TechnologyFormPayload, formikHelpers: FormikHelpers<TechnologyFormPayload>) => void | Promise<any>,
    type: FormType,
}

const TechnologyForm = (props: PropsType) => {
    const classes = useStyles();
    const history = useHistory()

    const {initialValues = initialFormState, type} = props

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={(values: TechnologyFormPayload) => {
                    const errors: FormErrorState = {};
                    if (isEmpty(values.name)) {
                        errors.name = 'Required';
                    } else if (isEmpty(values.description))
                        errors.description = 'Required';
                    return errors;
                }}
                onSubmit={props.onSubmit}
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
                                    value={values.image}
                                    onChange={(value) => setFieldValue('image', value)}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    className={classes.nameField}
                                    label="Name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    error={touched.name && !isEmpty(errors.name)}
                                    helperText={errors.name}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Description"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    error={touched.description && !isEmpty(errors.description)}
                                    helperText={errors.description}
                                    multiline
                                    minRows={5}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item className={classes.buttons} xs={12}>
                                <Button
                                    onClick={() => history.goBack()}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={isSubmitting}
                                    color="primary"
                                    startIcon={type == FormType.ADD ? <AddIcon/> : <SaveIcon/>}
                                >
                                    {type == FormType.ADD ? 'ADD' : 'SAVE'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    )
}
export default TechnologyForm