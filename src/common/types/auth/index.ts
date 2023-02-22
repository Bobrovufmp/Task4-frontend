import {Interface} from "readline";
import {FieldValues, UseFormRegister, UseFormSetError} from "react-hook-form";

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    > {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: any;
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
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