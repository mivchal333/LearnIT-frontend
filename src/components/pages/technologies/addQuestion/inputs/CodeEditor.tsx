import React from 'react'
import AceEditor from "react-ace";
import {CodeLanguage} from "../../../../../constant/codeLanguages";
import "ace-builds/src-min-noconflict/theme-xcode";
import "./../../../../../constant/CodeModeImports"
import {createStyles, makeStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        editor: {
            border: 'solid 2px rgb(130, 130, 130)'
        }
    }),
);

interface PropsType {
    value?: string,
    onChange: (value: string) => void,
    codeMode?: CodeLanguage,
}


const CodeEditor = (props: PropsType) => {
    const classes = useStyles();

    const {codeMode = "text", value = ''}
        = props
    return (
        <AceEditor
            mode={codeMode}
            theme="xcode"
            onChange={props.onChange}
            value={value}
            minLines={1}
            style={{
                border: '2px rgb(59, 59, 59))',
            }}
            width="100%"
            height="15rem"
            className={classes.editor}
            fontSize={18}
            showPrintMargin={true}
            showGutter={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
            }}
            debounceChangePeriod={300}
        />
    )
}
export default CodeEditor