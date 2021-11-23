import React from "react";
import {Formik} from 'formik';
import {Button, createStyles, Grid, makeStyles} from "@material-ui/core";
import {isEmpty, toNumber} from "lodash-es";
import {useDispatch, useSelector} from "../../../../store/store";
import {addQuestion, editQuestion} from "../../../../store/technologies/actions";
import {Theme} from "@material-ui/core/styles";
import {GET_ROUTE} from "../../../../route/routes";
import {Link, useHistory, useParams} from "react-router-dom";
import {selectTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import DifficultySliderInput from "./inputs/DifficultySliderInput";
import MultilineText from "./inputs/MultilineText";
import {FormikHelpers} from "formik/dist/types";
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";
import CodeAttachment from "./inputs/CodeAttachment";
import CodeAttachmentButton from "./CodeAttachmentButton";
import {CodeLanguage} from "../../../../constant/codeLanguages";
import AddIcon from "@material-ui/icons/Add";
import AnswerSection from "./inputs/AnswerSection";
import {AnswerFormModel} from "../../../../model/answerFormModel";
import {answers, initialValues} from "./form.contant";
import SaveIcon from "@material-ui/icons/Save";
import {QuestionFormRouteParam} from "../../../../route/route.model";

export type QuestionFormModel = {
    body: string,
    difficultyValue: number,
    correctAnswer: AnswerFormModel,
    addCodeAttachment: boolean,
    codeAttachment?: string,
    codeLang?: CodeLanguage,

    badAnswer1: AnswerFormModel,
    badAnswer2: AnswerFormModel,
    badAnswer3: AnswerFormModel,
}

type FormErrorState = {
    [Property in keyof QuestionFormModel]?: string
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

export enum FormType {
    ADD, EDIT
}

interface PropsType {
    initialData?: QuestionFormModel,
    formType: FormType,
}

const QuestionForm = (props: PropsType) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()
    const technologyId = useSelector(selectTechnologyContextId);
    usePathTechnologyContext()
    const {questionId} = useParams<QuestionFormRouteParam>();


    console.error(props.initialData)

    const initialData = props.initialData || initialValues

    const validateFields = (values: QuestionFormModel) => {
        const errors: FormErrorState = {};
        if (isEmpty(values.body)) {
            errors.body = 'Wymagane';
        } else if (!values.difficultyValue)
            errors.difficultyValue = 'Wymagane';
        else if (isEmpty(values.correctAnswer))
            errors.correctAnswer = 'Wymagane';
        else if (isEmpty(values.badAnswer1))
            errors.badAnswer1 = 'Wymagane';
        else if (isEmpty(values.badAnswer2))
            errors.badAnswer2 = 'Wymagane';
        else if (isEmpty(values.badAnswer3))
            errors.badAnswer3 = 'Wymagane';
        return errors;
    };

    const onSubmit = async (values: QuestionFormModel, {setSubmitting}: FormikHelpers<QuestionFormModel>) => {
        let isSuccess;
        if (props.formType === FormType.ADD) {
            isSuccess = await dispatch(addQuestion(values))
        } else {
            isSuccess = await dispatch(editQuestion(toNumber(questionId), values))
        }

        setSubmitting(false);
        if (isSuccess) {
            history.push(GET_ROUTE.TECHNOLOGY(technologyId))
        }
    };

    return (
        <>
            <Formik
                initialValues={initialData}
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
                                    Anuluj
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={isSubmitting}
                                    color="primary"
                                    startIcon={props.formType == FormType.ADD
                                        ? <AddIcon/>
                                        : <SaveIcon/>
                                    }
                                >
                                    {props.formType == FormType.ADD
                                        ? "DODAJ"
                                        : "ZAPISZ"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    )
}
export default QuestionForm