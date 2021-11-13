import {RegisterFormPayload} from "../components/pages/register/RegisterForm";
import {UserRepository} from "../api/repository/user.repository";

const registerUser = (registerFormPayload: RegisterFormPayload) => UserRepository.postResisterUser(registerFormPayload)

export const UserService = {
    registerUser
}