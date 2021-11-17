import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "@material-ui/core";
import {Link as HrefLink, useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../../route/routes";
import {makeStyles} from "@material-ui/core/styles";
import {isEmpty} from "lodash-es";
import {Formik} from 'formik';
import {useDispatch} from "../../../store/store";
import {FormikHelpers} from "formik/dist/types";
import {loginUser} from "../../../store/user/actions";

export interface LoginFormType {
    email: string,
    password: string,
}

interface FormErrorType {
    email?: string,
    password?: string,
}


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialFormState: LoginFormType = {
    email: "", password: ""
}

const LoginForm = () => {
    const classes = useStyles();

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = async (values: LoginFormType, formikHelpers: FormikHelpers<LoginFormType>) => {
        formikHelpers.setSubmitting(true)
        try {
            await dispatch(loginUser(values))
            formikHelpers.setSubmitting(false)
            history.push(GET_ROUTE.HOME())
        } catch (e) {
            formikHelpers.setSubmitting(false)
            formikHelpers.setFieldError('password', "Niepoprawne dane")
        }
    }


    return (
        <Formik
            initialValues={initialFormState}
            validate={(values: LoginFormType) => {
                const errors: FormErrorType = {};
                if (isEmpty(values.email)) {
                    errors.email = 'Wymagane';
                } else if (isEmpty(values.password))
                    errors.password = 'Wymagane';
                return errors;
            }}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adres email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={values.email}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={handleChange}
                        error={!isEmpty(errors.password)}
                        helperText={errors.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Zaloguj się
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link component={HrefLink} to={GET_ROUTE.REGISTER()} variant="body2">
                                Nie masz konta? Zarejestruj się
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}
export default LoginForm