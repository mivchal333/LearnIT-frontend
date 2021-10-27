import React from "react";
import {Formik} from 'formik';
import {Button, createStyles, Grid, makeStyles, TextField} from "@material-ui/core";
import {isEmpty} from "lodash-es";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch, useSelector} from "../../../../store/store";
import {addQuestion} from "../../../../store/technologies/actions";
import {Theme} from "@material-ui/core/styles";
import {GET_ROUTE} from "../../../../route/routes";
import {Link, useHistory} from "react-router-dom";
import {selectTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import {useTechnologyContext} from "../../game/cards/useTechnologyContext";

export type CreateQuestionForm = {
    body: string,
    difficulty: number,
    correctAnswer: string,
    badAnswer1: string,
    badAnswer2: string,
    badAnswer3: string,
}

type FormErrorState = {
    [Property in keyof CreateQuestionForm]?: string
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

const AddQuestionForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()
    const technologyId = useSelector(selectTechnologyContextId);
    useTechnologyContext()

    const initialValues: CreateQuestionForm = {
        body: "", correctAnswer: "", difficulty: 0, badAnswer1: "", badAnswer2: "", badAnswer3: ""
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={(values: CreateQuestionForm) => {
                    const errors: FormErrorState = {};
                    if (isEmpty(values.body)) {
                        errors.body = 'Required';
                    } else if (isEmpty(values.difficulty))
                        errors.difficulty = 'Required';
                    else if (isEmpty(values.correctAnswer))
                        errors.correctAnswer = 'Required';
                    else if (isEmpty(values.badAnswer1))
                        errors.badAnswer1 = 'Required';
                    else if (isEmpty(values.badAnswer2))
                        errors.badAnswer2 = 'Required';
                    else if (isEmpty(values.badAnswer3))
                        errors.badAnswer3 = 'Required';
                    return errors;
                }}
                onSubmit={async (values: CreateQuestionForm, {setSubmitting}) => {
                    console.log('ala')
                    const isSuccess = await dispatch(addQuestion(values))

                    setSubmitting(false);
                    if (isSuccess) {
                        history.push(GET_ROUTE.TECHNOLOGY(technologyId))
                    }
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                {/*// TODO difficulty field!*/}
                                <TextField
                                    required
                                    className={classes.nameField}
                                    label="Body"
                                    name="body"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.body}
                                    helperText={errors.body}
                                    error={touched.body && !isEmpty(errors.body)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Correct answer"
                                    name="correctAnswer"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.correctAnswer}
                                    helperText={errors.correctAnswer}
                                    error={touched.correctAnswer && !isEmpty(errors.correctAnswer)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Bad answer (1)"
                                    name="badAnswer1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.badAnswer1}
                                    helperText={errors.badAnswer1}
                                    error={touched.badAnswer1 && !isEmpty(errors.badAnswer1)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Bad answer (2)"
                                    name="badAnswer2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.badAnswer2}
                                    helperText={errors.badAnswer2}
                                    error={touched.badAnswer2 && !isEmpty(errors.badAnswer2)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Bad answer (3)"
                                    name="badAnswer3"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.badAnswer3}
                                    helperText={errors.badAnswer3}
                                    error={touched.badAnswer3 && !isEmpty(errors.badAnswer3)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item className={classes.buttons} xs={12}>
                                <Button
                                    to={GET_ROUTE.TECHNOLOGY(technologyId)}
                                    component={Link}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={isSubmitting}
                                    color="primary"
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
export default AddQuestionForm