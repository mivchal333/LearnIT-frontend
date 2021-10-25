import React from "react";
import {useDispatch, useSelector} from "../store/store";
import {dismissFlag, selectFlags} from "../store/page/page.slice";
import {isEmpty, map} from "lodash-es";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

const FlagWrapper = () => {
    const dispatch = useDispatch();
    const flags = useSelector(selectFlags)

    const handleClose = () => {
        dispatch(dismissFlag())
    }

    return (
        <>
            {map(flags, flag => (
                <Snackbar open={!isEmpty(flags)} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        variant="filled"
                        severity={flag.type}
                        onClose={handleClose}
                    >
                        {flag.title}
                    </Alert>
                </Snackbar>))
            }
        </>
    )
}
export default FlagWrapper