import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import {useStyles} from "./styles";
import {AppButton} from "../../app-button/button";
import AppLoadingButton from "../../loadingButton/loadingButton";
const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, errors, loading} = props
    const classes = useStyles()
    return (
        <>

            <Typography variant="h2"
                        fontFamily="Poppins"
                        textAlign='center'
            >
                Hello
            </Typography>
            <Typography variant="h6"
                        fontFamily="Poppins"
                        textAlign='center'
            >
                Sign in or <span className={classes.incitingText} onClick={() => navigate('/register')}>create an account</span>
            </Typography>
            <TextField
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder='Email'
                {...register("email")}
                {...register("email", {
                    required: 'You should type something, for example: your email',
                    pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
            />
            <TextField fullWidth={true}
                       error={!!errors.password}
                       helperText={errors.password ? `${errors.password.message}` : ''}
                       type="password"
                       margin='normal'
                       label="Password"
                       variant="outlined"
                       placeholder='Password'
                       {...register("password")}
            />
            <AppLoadingButton
                loading={loading}
                    variant="contained"
                    type="submit"
                    sx={{
                        fontFamily:"Poppins",
                        marginTop: 2,
                        marginBottom: 2,
                        width: "60%",
            }}
            >Log in
            </AppLoadingButton>
        </>
    );
};

export default LoginPage;