import React, {ChangeEvent} from 'react'

import {createStyles, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {CodeLanguage, CodeLanguagesLabels} from "../../../../../constant/codeLanguages";
import {Theme} from "@material-ui/core/styles";
import CodeEditor from "./CodeEditor";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        codeSection: {
            border: 'solid 2px rgb(130, 130, 130)'
        }
    }),
);

interface PropsType {
    codeValue?: string,
    onCodeValueChange: (value: string) => void,
    codeMode?: CodeLanguage,
    onCodeLangChange: (event: ChangeEvent<{ name?: string; value: unknown }>) => void,
}

const CodeAttachment = (props: PropsType) => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="space-between" xs={12} spacing={1}>
            <Grid item xs={10} className={classes.codeSection}>
                <CodeEditor
                    codeMode={props.codeMode}
                    value={props.codeValue}
                    onChange={props.onCodeValueChange}
                />
            </Grid>
            <Grid item xs={2}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Code format</InputLabel>
                    <Select onChange={props.onCodeLangChange} value={props.codeMode} name="codeLang">
                        {Object.entries(CodeLanguagesLabels).map(([langValue, langLabel]) => (
                            <MenuItem value={langValue}>{langLabel}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}
export default CodeAttachment