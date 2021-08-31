export const ROUTE = {
    HOME: "/",
    TECHNOLOGIES: "/technology",
    TECHNOLOGY: '/technology/:id',
    GAME_START_CONFIRM: '/game/:id/confirm'
}

export const GET_ROUTE = {
    HOME: () => "/",
    TECHNOLOGIES: () => "/technology",
    TECHNOLOGY: (id: number | string) => `/technology/${id}`,
    GAME_START_CONFIRM: (id: number | string) => `/game/${id}/confirm`
}