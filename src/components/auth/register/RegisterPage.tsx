import React from 'react';
import {Button, TextField, Typography, Box, Grid} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";



const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {navigate, register} = props
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
            >You already have an account? <span className="incitingText" onClick={() => navigate('/login')}>Log in</span>
            </Typography>
            {/*//TODO: Страница обновляется, нарушены принципы SPA ИСПРАВИТЬ*/}
            <TextField fullWidth={true}
                       margin='normal'
                       label="First name"
                       variant="outlined"
                       placeholder='Please enter your first name'
            />
            <TextField fullWidth={true}
                       margin='normal'
                       label="Username"
                       variant="outlined"
                       placeholder='Please enter your username'
            />
            <TextField fullWidth={true}
                       margin='normal'
                       label="Email"
                       variant="outlined"
                       placeholder='Please enter your email'
            />
            <TextField type="password"
                       fullWidth={true}
                       margin='normal'
                       label="Password"
                       variant="outlined"
                       placeholder='Please enter your password'
            />
            <TextField type="password"
                       fullWidth={true}
                       margin='normal'
                       label="Password"
                       variant="outlined"
                       placeholder='Please repeat your password'
            />
        <Box  sx={{

        }}>
            <Button
                sx={{
                    display: "flex",
                fontFamily:"Poppins",
                margin: "10px auto",
                width:"60%",
            }} type='submit'
                variant="contained">Create account</Button>
        </Box>
        </Box>
    );
};

export default RegisterPage;