import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {UserRepository} from "../../api/repository/user.repository";
import {addFlag} from "../shared/page/page.slice";
import {errorFlag} from "../../service/flag.service";
import {setUsers} from "./admin.slice";
import {Role} from "../../api/model/userDetails";

export const loadUsers = (): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    try {
        const {data} = await UserRepository.getUsers()
        dispatch(setUsers(data))
    } catch (e) {
        dispatch(addFlag(errorFlag("Nie pobrano użytkowników.")))
    }
}


export const editUserPermission = (role: Role, email: string, add: boolean): ThunkAction<void, RootState, undefined, AnyAction> => async (dispatch, getState) => {
    try {
        const {data} = await UserRepository.putRoleChange(role, email, add)
        dispatch(loadUsers())
    } catch (e) {
        dispatch(addFlag(errorFlag("Wystąpił błąd poczas edycji roli.")))
    }
}
