import React from "react";
import {Formik} from 'formik';
import {Button, createStyles, Grid, makeStyles, TextField} from "@material-ui/core";
import {isEmpty} from "lodash-es";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "../../../../store/store";
import {addTechnology} from "../../../../store/technologies/actions";
import {Theme} from "@material-ui/core/styles";
import ImageField from "./ImageField";
import {UploadedFile} from "../../../../api/model/uploadedFile.model";
import {CreateTechnologyPayload} from "../../../../store/technologies/createTechnologyPayload";

export interface CreateTechnologyForm {
    name: string,
    description: string,
    image?: UploadedFile,
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
        }
    }),
);

const AddTechnologyForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const initialValues: CreateTechnologyForm = {name: '', description: ''}

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={(values: CreateTechnologyForm) => {
                    const errors: FormErrorState = {};
                    if (isEmpty(values.name)) {
                        errors.name = 'Required';
                    } else if (isEmpty(values.description))
                        errors.description = 'Required';
                    return errors;
                }}
                onSubmit={async (values: CreateTechnologyForm, {setSubmitting}) => {
                    console.log(values)
                    const {name, description, image} = values

                    const payload: CreateTechnologyPayload = {
                        name,
                        description,
                        image: image?.filename
                    }
                    await dispatch(addTechnology(payload))

                    setSubmitting(false);
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
                                    value={values.image}
                                    onChange={(value) => setFieldValue('image', value)}
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
                                    error={touched.name && !isEmpty(errors.name)}
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
                                    error={touched.description && !isEmpty(errors.description)}
                                    multiline
                                    minRows={5}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
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
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    )
}
export default AddTechnologyForm