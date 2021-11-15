import React from 'react'
import {TextField} from "@material-ui/core";

interface PropsType {
    value: string,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
    onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    isError?: boolean,
    helperText?: string,
    label: string,
    required?: boolean,
    className?: string,
    name: string,
}

const MultilineText = (props: PropsType) => {
    const {value, onChange, onBlur, isError, helperText, label, required, className, name} = props;
    return (
        <TextField
            name={name}
            required={required}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            helperText={helperText}
            error={isError}
            multiline
            className={className}
            fullWidth
        />
    )
}
export default MultilineText