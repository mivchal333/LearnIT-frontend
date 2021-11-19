export enum Role {
    USER = "ROLE_USER",
    ADMIN = "ROLE_ADMIN",
    MOD = "ROLE_MOD",
}

export const RoleLabel: Record<Role, string> = {
    ROLE_ADMIN: "Administrator",
    ROLE_MOD: "Moderator",
    ROLE_USER: "Użytkownik"
}

export interface UserModel {
    firstName: string,
    lastName: string,
    email: string,
    points: number,
    roles: Role[],
}