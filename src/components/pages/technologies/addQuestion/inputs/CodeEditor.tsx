import React from 'react'
import AceEditor from "react-ace";
import {CodeLanguage} from "../../../../../constant/codeLanguages";
import "ace-builds/src-min-noconflict/theme-xcode";
import "./../../../../../constant/CodeModeImports"

interface PropsType {
    value?: string,
    onChange: (value: string) => void,
    codeMode?: CodeLanguage,
}

const CodeEditor = (props: PropsType) => {

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
                width: '100%',
                border: '2px rgb(59, 59, 59))'
            }}
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
        />
    )
}
export default CodeEditor