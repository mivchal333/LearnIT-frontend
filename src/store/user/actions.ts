import {Dispatch} from "../store";
import {addFlag} from "../shared/page/page.slice";
import {errorFlag, successFlag} from "../../service/flag.service";
import {UserService} from "../../service/user.service";
import {resetUserDetails, setUserDetails} from "./user.slice";
import {AxiosError} from "axios";
import {LoginFormType} from "../../components/pages/login/LoginForm";

export const loadUserDetails = () => async (dispatch: Dispatch) => {
    try {
        const {data} = await UserService.getUserDetails();
        dispatch(setUserDetails(data))
    } catch (e: AxiosError | any) {
        if (e.response?.status == 403) {
            dispatch(resetUserDetails())
        } else {
            console.error(e)
            dispatch(addFlag(errorFlag("Failed to load user details.")))
        }
    }
}

export const loginUser = (loginPayload: LoginFormType) => async (dispatch: Dispatch) => {
    try {
        await UserService.loginUser(loginPayload)
        dispatch(loadUserDetails())
        dispatch(addFlag(successFlag("Zalogowano")))
    } catch (e) {
        console.error(e)
        dispatch(addFlag(errorFlag("Failed to load user details.")))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    try {
        await UserService.logout()
        dispatch(resetUserDetails())
        dispatch(addFlag(successFlag("Wylogowano")))
    } catch (e) {
        console.error(e)
        dispatch(addFlag(errorFlag("Failed to logout.")))
    }
}

