import {Interface} from "readline";

export interface IPropsLogin {
    setPassword: (value: string) => void
    setEmail: (value: string) => void
    navigate: (to: string) => void
}

export interface IPropsRegister {
    setPassword: (value: string) => void
    setEmail: (value: string) => void
    setRepeatPassword: (value: string) => void
    setUsername: (value: string) => void
    setFirstname: (value: string) => void
    navigate: (to: string) => void
}
export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
}

interface IPublicUser {
    id: null | number,

    firstName: string,

    userName: string,

    email: string,

    createdAt: string,

    updatedAt: string,

    watchlist:[IWatchlist]
}

interface IWatchlist {

    id: null | number,

    name: string,

    assetId: string,

    createdAt: string,

    updatedAt: string,

    user: null | number
}