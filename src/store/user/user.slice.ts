import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {Role, UserModel} from "../../api/model/user.model";
import {includes} from "lodash-es";

const emptyUserDetails: UserModel = {roles: [], email: "", firstName: "", lastName: "", points: 0, createDate: 0,}

interface UserSlice {
    loggedIn: boolean,
    userDetails: UserModel | null
}

const initialState: UserSlice = {
    loggedIn: false,
    userDetails: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<UserModel>) => {
            state.userDetails = action.payload;
            state.loggedIn = true
        },
        resetUserDetails: (state) => {
            state.userDetails = null;
            state.loggedIn = false;
        }

    }
})
export const {
    setUserDetails,
    resetUserDetails
} = userSlice.actions

export const selectUserDetails = (state: RootState) => state.user.userDetails || emptyUserDetails
export const selectUserLoggedIn = (state: RootState) => state.user.loggedIn
export const selectIsAdmin = (state: RootState) => includes(state.user.userDetails?.roles, Role.ADMIN)
export const selectIsModerator = (state: RootState) => includes(state.user.userDetails?.roles, Role.MOD) || includes(state.user.userDetails?.roles, Role.MOD)

export const userReducer = userSlice.reducer;