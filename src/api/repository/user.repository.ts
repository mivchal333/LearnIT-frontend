import axios, {AxiosResponse} from "axios";
import {UserRegisterModel} from "../model/userRegisterModel";
import {Role, UserModel} from "../model/user.model";

const postRegisterUser = (data: UserRegisterModel): Promise<AxiosResponse> => axios.post('/api/user/register', data)
const postLoginUser = (data: FormData): Promise<AxiosResponse> => axios.post('/api/user/login', data)
const getUserDetails = (): Promise<AxiosResponse> => axios.get('/api/user/myAccount')
const postLogout = (): Promise<AxiosResponse> => axios.get('/api/user/logout')
const getUsers = (): Promise<AxiosResponse<UserModel[]>> => axios.get('/api/user')
const putRoleChange = (role: Role, userEmail: string, add: boolean): Promise<AxiosResponse<void>> => axios
    .put('/api/user/role', {
        role,
        userEmail,
        add,
    })

export const UserRepository = {
    postRegisterUser,
    postLoginUser,
    getUserDetails,
    postLogout,
    getUsers,
    putRoleChange,
}