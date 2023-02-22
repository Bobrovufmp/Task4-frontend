import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import "./style.css"
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, errors} = props
    return (
        <Box>
            <Typography variant="h2"
                        fontFamily="Poppins"
                        textAlign='center'
            >
                Hello
            </Typography>
            <Typography variant="h6"
                        margin={2}
                        fontFamily="Poppins"
                        textAlign='left'
            >
                Sign in or <span className="incitingText" onClick={() => navigate('/register')}>create an account</span>
            </Typography>
            <TextField
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder='Email'
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
                       {...register("password", {
                           required: 'You should type something here, for example: your password',
                           minLength: 6

                       })}
            />
            <Button sx={{
                display: "flex",
                fontFamily: "Poppins",
                margin: "10px auto",
                width: "60%",
            }}
                    variant="contained"
                    type="submit"
            >Log in
            </Button>
        </Box>
    );
};

export default LoginPage;