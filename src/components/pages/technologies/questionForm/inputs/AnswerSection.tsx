import React from 'react'
import {createStyles, Grid, makeStyles, TextField} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {isEmpty} from "lodash-es";
import CodeAttachmentButton from "../CodeAttachmentButton";
import CodeEditor from "./CodeEditor";
import {Theme} from "@material-ui/core/styles";
import {CodeLanguage} from "../../../../../constant/codeLanguages";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";


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
        },
        answerContainer: {
            margin: theme.spacing(2, 0, 2, 0),
        }
    }),
);

interface TextAnswerProps {
    name: string,
    label: string,
    handleChange: (event: any) => void,
    handleBlur: (event: any) => void,
    value: string,
    touched?: boolean,
    error?: string,
}

interface CodeAnswerProps {
    addCode: boolean,
    onAddCodeChange: (value: boolean) => void,
    codeValue?: string,
    onCodeValueChange: (value: string) => void,
    codeLang?: CodeLanguage,
}

export enum AnswerType {
    CORRECT, WRONG
}

interface PropsType {
    textAnswer: TextAnswerProps,
    codeAnswer: CodeAnswerProps,
    type: AnswerType,
}

const AnswerSection = (props: PropsType) => {
    const classes = useStyles();

    const {textAnswer, codeAnswer} = props;
    return (
        <div>
            <Grid container justifyContent="space-between" className={classes.answerContainer}>
                <Grid item xs={10}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={1}>
                            {props.type === AnswerType.CORRECT
                                ? <CheckCircleIcon className={classes.tickIcon}/>
                                : <HighlightOffIcon className={classes.wrongIcon}/>
                            }
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                required
                                label={textAnswer.label}
                                name={textAnswer.name}
                                onChange={textAnswer.handleChange}
                                onBlur={textAnswer.handleBlur}
                                value={textAnswer.value}
                                error={textAnswer.touched && !isEmpty(textAnswer.error)}
                                fullWidth
                                multiline
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <div>
                    <CodeAttachmentButton
                        value={codeAnswer.addCode}
                        onChange={codeAnswer.onAddCodeChange}
                    />
                </div>
            </Grid>
            <Grid container>
                <Grid item xs={10}>
                    {codeAnswer.addCode && (
                        <CodeEditor
                            value={codeAnswer.codeValue}
                            onChange={codeAnswer.onCodeValueChange}
                            codeMode={codeAnswer.codeLang}
                        />
                    )}
                </Grid>
            </Grid>
        </div>
    )
}
export default AnswerSection