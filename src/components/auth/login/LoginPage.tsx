import React, {Fragment, JSXElementConstructor} from 'react';
import {TextField, Button, Typography, Box} from "@mui/material";
import "./style.css"
import {IPropsLogin} from "../../../common/types/auth";
import {useNavigate} from "react-router-dom";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setPassword, setEmail, navigate} = props
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
            {/*//TODO: Страница обновляется, нарушены принципы SPA ИСПРАВИТЬ*/}
            <TextField fullWidth={true}
                       margin='normal'
                       label="Email"
                       variant="outlined"
                       placeholder='Email'
                       onChange={(e) => setEmail(e.target.value)}/>
            <TextField fullWidth={true}
                       type="password"
                       margin='normal'
                       label="Password"
                       variant="outlined"
                       placeholder='Password'
                       onChange={(e) => setPassword(e.target.value)}/>
            <Button sx={{
                display: "flex",
                fontFamily:"Poppins",
                margin: "10px auto",
                width:"60%",
                }}
                    variant="contained"
                    type="submit"
            >Log in
                </Button>
        </Box>
    );
};

export default LoginPage;