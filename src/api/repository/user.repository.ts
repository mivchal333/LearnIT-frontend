import axios, {AxiosResponse} from "axios";
import {UserRegisterModel} from "../model/userRegisterModel";

const postRegisterUser = (data: UserRegisterModel): Promise<AxiosResponse> => axios.post('/user/register', data)
const postLoginUser = (data: FormData): Promise<AxiosResponse> => axios.post('/user/login', data)
const getUserDetails = (): Promise<AxiosResponse> => axios.get('/user/myAccount')
const postLogout = (): Promise<AxiosResponse> => axios.get('/user/logout')

export const UserRepository = {
    postRegisterUser,
    postLoginUser,
    getUserDetails,
    postLogout,
}