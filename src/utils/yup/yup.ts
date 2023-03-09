import * as yup from "yup"
import {AppErrors} from "../../common/errors/errors";
export const LoginScheme = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,32}$/, AppErrors.InvalidPassword),
})

export const RegisterScheme = yup.object().shape({
    firstName: yup.string()
        .required(AppErrors.RequiredField),
    username: yup.string()
        .required(AppErrors.RequiredField),
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,32}$/, AppErrors.InvalidPassword),
    repeatPassword: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,32}$/, AppErrors.InvalidPassword)
})