import React from "react";
import {Formik} from 'formik';
import {Button, createStyles, Grid, makeStyles} from "@material-ui/core";
import {isEmpty} from "lodash-es";
import {useDispatch, useSelector} from "../../../../store/store";
import {addQuestion} from "../../../../store/technologies/actions";
import {Theme} from "@material-ui/core/styles";
import {GET_ROUTE} from "../../../../route/routes";
import {Link, useHistory} from "react-router-dom";
import {selectTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import DifficultySliderInput from "./inputs/DifficultySliderInput";
import MultilineText from "./inputs/MultilineText";
import {FormikHelpers} from "formik/dist/types";
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";
import CodeAttachment from "./inputs/CodeAttachment";
import CodeAttachmentButton from "./CodeAttachmentButton";
import {CodeLanguage} from "../../../../constant/codeLanguages";
import AddIcon from "@material-ui/icons/Add";
import AnswerSection, {AnswerType} from "./inputs/AnswerSection";
import {CreateQuestionAnswerModel} from "../../../../model/createQuestionAnswer.model";

export type CreateQuestionForm = {
    body: string,
    difficultyValue: number,
    correctAnswer: CreateQuestionAnswerModel,
    addCodeAttachment: boolean,
    codeAttachment?: string,
    codeLang?: CodeLanguage,

    badAnswer1: CreateQuestionAnswerModel,
    badAnswer2: CreateQuestionAnswerModel,
    badAnswer3: CreateQuestionAnswerModel,
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
    }),
);
type AnswerName = "correctAnswer" | "badAnswer1" | "badAnswer2" | "badAnswer3";

interface Answer {
    label: string,
    name: AnswerName,
    type: AnswerType,
}

const AddQuestionForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()
    const technologyId = useSelector(selectTechnologyContextId);
    usePathTechnologyContext()

    const initialValues: CreateQuestionForm = {
        body: "",
        correctAnswer: {
            addCode: false,
            body: '',
        },
        difficultyValue: 1,
        badAnswer1: {
            body: '',
            addCode: false,
        },
        badAnswer2: {
            body: '',
            addCode: false,
        },
        badAnswer3: {
            body: '',
            addCode: false,
        },
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
        const isSuccess = await dispatch(addQuestion(values))

        setSubmitting(false);
        if (isSuccess) {
            history.push(GET_ROUTE.TECHNOLOGY(technologyId))
        }
    };

    const answers: Answer[] = [
        {
            label: "Poprawna odpowiedź",
            name: "correctAnswer",
            type: AnswerType.CORRECT,
        },
        {
            label: "Zła odpowiedź",
            name: "badAnswer1",
            type: AnswerType.WRONG,
        },
        {
            label: "Zła odpowiedź",
            name: "badAnswer2",
            type: AnswerType.WRONG,
        },
        {
            label: "Zła odpowiedź",
            name: "badAnswer3",
            type: AnswerType.WRONG,
        },
    ]
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
                        {console.log({values})
                        }
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
                                            label="Treść"
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

                            {answers.map(({name, type, label}) => (
                                <Grid item xs={12} key={name}>
                                    <AnswerSection
                                        textAnswer={{
                                            name: `${name}.body`,
                                            label,
                                            value: values[name].body,
                                            touched: touched[name]?.body,
                                            error: errors[name]?.body,
                                            handleChange,
                                            handleBlur
                                        }}
                                        codeAnswer={{
                                            codeLang: values.codeLang,
                                            codeValue: values[name].codeValue,
                                            addCode: values[name].addCode,
                                            onCodeValueChange: (value: string) => setFieldValue(`${name}.codeValue`, value),
                                            onAddCodeChange: (value: boolean) => setFieldValue(`${name}.addCode`, value)
                                        }}
                                        type={type}
                                    />
                                </Grid>
                            ))}
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