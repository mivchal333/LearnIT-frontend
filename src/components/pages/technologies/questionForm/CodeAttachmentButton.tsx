import React from 'react'
import {Button} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

interface PropsType {
    value: boolean,
    onChange: (value: boolean) => void
}

const CodeAttachmentButton = (props: PropsType) => {
    const getIcon = () => props.value
        ? <IndeterminateCheckBoxIcon/>
        : <AddBoxIcon/>


    const getLabel = () => props.value
        ? "Usuń kod"
        : "Dodaj kod"

    return (
            <Button
                variant="outlined"
                startIcon={getIcon()}
                color="primary"
                onClick={() => props.onChange(!props.value)}
            >
                {getLabel()}
            </Button>
    )
}
export default CodeAttachmentButton