import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import {Box} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {AppErrors} from "../../common/errors/errors";
import {useForm} from "react-hook-form";
import {LoginScheme, RegisterScheme} from "../../utils/yup/yup";
import {yupResolver} from '@hookform/resolvers/yup'
import {useStyles} from "./styles";
import {loginUser, registerUser} from "../../store/thunks/auth/auth";


const AuthRootComponent: React.FC = (): JSX.Element => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const classes = useStyles()
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(location.pathname === "/login" ? LoginScheme : RegisterScheme),
        mode: 'all'
    })
    const loading = useAppSelector(state => state.auth.isLoading)
    const handleSubmitForm = async (data: any) => {
        if (location.pathname === '/login') {
            try {
                await dispatch(loginUser(data))
                navigate('/home')
            } catch (e) {
                return e
            }
        } else {
            if (data.password === data.repeatPassword) {
                try {
                    const userData = {
                        firstName: data.firstName,
                        username: data.username,
                        email: data.email,
                        password: data.password
                    }
                    await dispatch(registerUser(userData))
                    navigate('/home')
                } catch (e) {
                    return e
                }
            } else {
                throw new Error(AppErrors.PasswordDoNotMatch)
            }
        }
    }
    return (
        <div className={classes.root}>
            <form className={classes.form}
                  onSubmit={handleSubmit(handleSubmitForm)}
            >
                <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                maxWidth={640}
                margin='auto'
                padding={5}
                borderRadius = {5}
                boxShadow = "-3px -2px 20px #202020"
                >
                    {location.pathname ==="/login"
                        ? <LoginPage
                            loading={loading}
                            navigate={navigate}
                            register={register}
                            errors={errors}
                        /> : location.pathname === "/register"
                            ? <RegisterPage
                                loading={loading}
                                errors={errors}
                                navigate={navigate}
                                register={register}
                            /> : null
                    }
                </Box>
            </form>
        </div>
    );
}

export default AuthRootComponent;
