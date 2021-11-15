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
import DifficultySliderInput from "./inputs/DifficultySliderInput";
import MultilineText from "./inputs/MultilineText";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {FormikHelpers} from "formik/dist/types";
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";
import CodeAttachment from "./inputs/CodeAttachment";
import CodeAttachmentButton from "./CodeAttachmentButton";
import {CodeLanguage} from "../../../../constant/codeLanguages";

export type CreateQuestionForm = {
    body: string,
    difficultyValue: number,
    correctAnswer: string,
    badAnswer1: string,
    badAnswer2: string,
    badAnswer3: string,
    addCodeAttachment: boolean,
    codeLang?: CodeLanguage,
    codeAttachment?: string,
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

        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        tickIcon: {
            color: theme.palette.success.main,
        },
        wrongIcon: {
            color: theme.palette.error.main,
        }
    }),
);

const AddQuestionForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()
    const technologyId = useSelector(selectTechnologyContextId);
    usePathTechnologyContext()

    const initialValues: CreateQuestionForm = {
        body: "",
        correctAnswer: "",
        difficultyValue: 1,
        badAnswer1: "",
        badAnswer2: "",
        badAnswer3: "",
        addCodeAttachment: false,
    }

    const validateFields = (values: CreateQuestionForm) => {
        const errors: FormErrorState = {};
        if (isEmpty(values.body)) {
            errors.body = 'Required';
        } else if (!values.difficultyValue)
            errors.difficultyValue = 'Required';
        else if (isEmpty(values.correctAnswer))
            errors.correctAnswer = 'Required';
        else if (isEmpty(values.badAnswer1))
            errors.badAnswer1 = 'Required';
        else if (isEmpty(values.badAnswer2))
            errors.badAnswer2 = 'Required';
        else if (isEmpty(values.badAnswer3))
            errors.badAnswer3 = 'Required';
        return errors;
    };

    const onSubmit = async (values: CreateQuestionForm, {setSubmitting}: FormikHelpers<CreateQuestionForm>) => {
        console.log('submit')
        const isSuccess = await dispatch(addQuestion(values))

        setSubmitting(false);
        if (isSuccess) {
            history.push(GET_ROUTE.TECHNOLOGY(technologyId))
        }
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={onSubmit}
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
                            <Grid item xs={12}>
                                <DifficultySliderInput
                                    value={values.difficultyValue}
                                    onChange={(value) => setFieldValue("difficultyValue", value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container alignItems={"center"} justifyContent="space-between">
                                    <Grid item xs={9}>
                                        <MultilineText
                                            label="Body"
                                            name="body"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.body}
                                            isError={touched.body && !isEmpty(errors.body)}
                                        />
                                    </Grid>
                                    <CodeAttachmentButton
                                        value={values.addCodeAttachment}
                                        onChange={(value) => setFieldValue("addCodeAttachment", value)}
                                    />
                                </Grid>
                            </Grid>
                            {values.addCodeAttachment && (
                                <Grid item xs={12}>
                                    <CodeAttachment
                                        codeMode={values.codeLang}
                                        codeValue={values.codeAttachment}
                                        onCodeLangChange={handleChange}
                                        onCodeValueChange={code => setFieldValue("codeAttachment", code)}

                                    />
                                </Grid>
                            )}
                            <Grid item xs={8}>
                                <Grid container spacing={4} alignItems="center">
                                    <Grid item xs={1}>
                                        <CheckCircleIcon className={classes.tickIcon}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <TextField
                                            required
                                            label="Correct answer"
                                            name="correctAnswer"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.correctAnswer}
                                            error={touched.correctAnswer && !isEmpty(errors.correctAnswer)}
                                            fullWidth
                                            multiline
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container spacing={4} alignItems="center">
                                    <Grid item xs={1}>
                                        <HighlightOffIcon className={classes.wrongIcon}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <TextField
                                            required
                                            label="Bad answer"
                                            name="badAnswer1"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.badAnswer1}
                                            error={touched.badAnswer1 && !isEmpty(errors.badAnswer1)}
                                            multiline
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container spacing={4} alignItems="center">
                                    <Grid item xs={1}>
                                        <HighlightOffIcon className={classes.wrongIcon}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <TextField
                                            required
                                            label="Bad answer"
                                            name="badAnswer2"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.badAnswer2}
                                            error={touched.badAnswer2 && !isEmpty(errors.badAnswer2)}
                                            multiline
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container spacing={4} alignItems="center">
                                    <Grid item xs={1}>
                                        <HighlightOffIcon className={classes.wrongIcon}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <TextField
                                            required
                                            label="Bad answer"
                                            name="badAnswer3"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.badAnswer3}
                                            error={touched.badAnswer3 && !isEmpty(errors.badAnswer3)}
                                            multiline
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
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