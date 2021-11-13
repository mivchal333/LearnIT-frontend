import axios, {AxiosResponse} from "axios";
import {UserDto} from "../model/userDto";

const postResisterUser = (data: UserDto): Promise<AxiosResponse> => axios.post('/user/registration', data)

export const UserRepository = {
    postResisterUser
}