import React from "react";
import {Formik} from 'formik';
import {Avatar, Button, createStyles, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {isEmpty, isEqual} from "lodash-es";
import {Theme} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {FormikHelpers} from "formik/dist/types";
import {UserService} from "../../../service/user.service";
import {useDispatch} from "../../../store/store";
import {errorFlag, successFlag} from "../../../service/flag.service";
import {addFlag} from "../../../store/shared/page/page.slice";
import {GET_ROUTE} from "../../../route/routes";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export interface RegisterFormPayload {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    matchingPassword: string,
}

interface FormErrorState {
    email?: string,
    firstName?: string,
    lastName?: string,
    password?: string,
    matchingPassword?: string,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }),
);

export const initialFormState: RegisterFormPayload = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    matchingPassword: ""
};

const TechnologyForm = () => {
    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = async (values: RegisterFormPayload, formikHelpers: FormikHelpers<RegisterFormPayload>) => {
        try {
            formikHelpers.setSubmitting(true)
            await UserService.registerUser(values)
            dispatch(addFlag(successFlag("Registration successful.")))
            history.push(GET_ROUTE.LOGIN())
        } catch (e) {
            console.error("[TechnologyForm] error ocurred.", e)
            dispatch(addFlag(errorFlag("Registration failed.")))
        }
        formikHelpers.setSubmitting(false)
    }

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Rejestracja
            </Typography>
            <Formik
                initialValues={initialFormState}
                validate={(values: RegisterFormPayload) => {
                    const errors: FormErrorState = {};
                    if (isEmpty(values.email)) {
                        errors.email = 'Wymagane';
                    } else if (isEmpty(values.firstName))
                        errors.firstName = 'Wymagane';
                    else if (isEmpty(values.lastName))
                        errors.lastName = 'Wymagane';
                    else if (isEmpty(values.matchingPassword))
                        errors.matchingPassword = 'Wymagane';
                    else if (isEmpty(values.password))
                        errors.password = 'Wymagane';
                    else if (!isEqual(values.password, values.matchingPassword))
                        errors.matchingPassword = 'Wpisz poprawne hasło';

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
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    autoFocus
                                    variant="outlined"
                                    required
                                    label="Imie"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                    error={touched.firstName && !isEmpty(errors.firstName)}
                                    helperText={errors.firstName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="Nazwisko"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    error={touched.lastName && !isEmpty(errors.lastName)}
                                    helperText={errors.lastName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="Adres email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={touched.email && !isEmpty(errors.email)}
                                    helperText={errors.email}
                                    fullWidth
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Hasło"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={touched.password && !isEmpty(errors.password)}
                                    helperText={errors.password}
                                    fullWidth
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Powtórz hasło"
                                    name="matchingPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.matchingPassword}
                                    error={touched.matchingPassword && !isEmpty(errors.matchingPassword)}
                                    helperText={errors.matchingPassword}
                                    fullWidth
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Zarejestruj
                            </Button>
                        </Grid>
                    </form>
                )}
            </Formik>
        </div>
    )
}
export default TechnologyForm