import React, {FC, useState} from 'react';
import TopBarComponent from "../topbar/topbar";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SidebarComponent from "../sidebar/sidebar";
import {useStyles} from "../layout/styles";


const LayoutComponent: FC = () :JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const isNoneMobile = useMediaQuery('(min-width:600px)')
    const classes = useStyles()
    return (
        location.pathname === "/login" || location.pathname === "/register"
            ? (
                <>
                    <Outlet/>
                </>
            ) : (
                <>
                    <Box display={isNoneMobile === true ? 'flex': 'block'}
                         width='100%'
                         height='100%'
                         justifyContent="space-between"
                    >
                        <SidebarComponent
                        drawerWidth={'250px'}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        />
                        <Box className={classes.mainSection}>
                            <TopBarComponent isOpen={isOpen}
                                             setIsOpen={setIsOpen}/>
                            <Outlet/>
                        </Box>
                    </Box>
                </>
            )
    );
};

export default LayoutComponent;