import React from 'react'
import {CodeLanguage} from "../../../../constant/codeLanguages";
import AceEditor from "react-ace";
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
    code: string,
    lang?: CodeLanguage,
}

const CodePreview = (props: PropsType) => {
    const classes = useStyles();

    const {code, lang = 'text'} = props


    return (
        <AceEditor
            mode={lang}
            theme="xcode"
            value={code}
            style={{
                border: '2px rgb(59, 59, 59))',
                display: "flex",
                cursor: "pointer !important"
            }}
            width="auto"
            height="10rem"
            className={classes.editor}
            fontSize={16}
            showGutter={false}
            setOptions={{
                enableSnippets: false,
                tabSize: 4,
            }}
            readOnly
            wrapEnabled
        />
    )
}
export default CodePreview