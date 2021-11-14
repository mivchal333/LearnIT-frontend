import {RegisterFormPayload} from "../components/pages/register/RegisterForm";
import {UserRepository} from "../api/repository/user.repository";
import {LoginFormType} from "../components/pages/login/LoginForm";

const registerUser = (registerFormPayload: RegisterFormPayload) => UserRepository.postRegisterUser(registerFormPayload)

const loginUser = (loginPayload: LoginFormType) => {
    const formData = new FormData();
    formData.set("username", loginPayload.email)
    formData.set("password", loginPayload.password)
    return UserRepository.postLoginUser(formData)
}
const getUserDetails = () => UserRepository.getUserDetails()
const logout = () => UserRepository.postLogout()


export const UserService = {
    registerUser,
    loginUser,
    getUserDetails,
    logout,
}