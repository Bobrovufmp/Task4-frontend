import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import {useStyles} from "./styles";
import {AppButton} from "../../app-button/button";


const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {navigate, register, errors} = props
    const classes = useStyles()
    return (
        <Box>
            <Typography variant="h2"
                        fontFamily="Poppins"
                        textAlign='center'
            >
                Create an account
            </Typography>
            <Typography variant="h6"
                        margin={2}
                        fontFamily="Poppins"
                        textAlign='left'
            >You already have an account? <span className={classes.incitingText}
                                                onClick={() => navigate('/login')}>Log in</span>
            </Typography>
            <TextField
                error={!!errors.firstName}
                helperText={errors.firstName ? `${errors.firstName.message}` : ''}
                fullWidth={true}
                margin='normal'
                label="First name"
                variant="outlined"
                placeholder='Please enter your first name'
                {...register('firstName')}
            />
            <TextField
                error={!!errors.username}
                helperText={errors.username ? `${errors.username.message}` : ''}
                fullWidth={true}
                       margin='normal'
                       label="Username"
                       variant="outlined"
                       placeholder='Please enter your username'
                       {...register('username')}
            />
            <TextField
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                fullWidth={true}
                       margin='normal'
                       label="Email"
                       variant="outlined"
                       placeholder='Please enter your email'
                       {...register('email')}
            />
            <TextField
                error={!!errors.password}
                helperText={errors.password ? `${errors.password.message}` : ''}
                type="password"
                       fullWidth={true}
                       margin='normal'
                       label="Password"
                       variant="outlined"
                       placeholder='Please enter your password'
                       {...register('password')}
            />
            <TextField
                error={!!errors.repeatPassword}
                helperText={errors.repeatPassword ? `${errors.repeatPassword.message}` : ''}
                type="password"
                       fullWidth={true}
                       margin='normal'
                       label="Password"
                       variant="outlined"
                       placeholder='Please repeat your password'
                       {...register('repeatPassword')}
            />
        <Box  sx={{

        }}>
            <AppButton
                sx={{
                    display: "flex",
                fontFamily:"Poppins",
                margin: "10px auto",
                width:"60%",
            }} type='submit'
                variant="contained">Create account</AppButton>
        </Box>
        </Box>
    );
};

export default RegisterPage;