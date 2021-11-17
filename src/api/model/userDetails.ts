export enum Role {
    USER = "ROLE_USER",
    ADMIN = "ROLE_ADMIN",
    MOD = "ROLE_MOD",
}

export interface UserDetails {
    firstName: string,
    lastName: string,
    email: string,
    roles: Role[],
}