import React, {useState} from 'react';
import {ILayout} from "../../common/types/layout/layout";
import TopBarComponent from "../topbar/topbar";
import {useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SidebarComponent from "../sidebar/sidebar";

const LayoutComponent = ({children}: ILayout) => {
    const [isOpen, setIsOpen] = useState("true")
    const location = useLocation()
    const isNoneMobile = useMediaQuery('(min-width:600px)')
    return (
        location.pathname === "/login" || location.pathname === "/register"
            ? (
                <>
                    {children}
                </>
            ) : (
                <>
                    <Box display={isNoneMobile === true ? 'flex': 'block'} width='100%' height='100%'>
                        <SidebarComponent
                        isNoneMobile={isNoneMobile}
                        drawerWidth={'250'}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        />
                        <Box>
                            <TopBarComponent/>
                        {children}
                        </Box>
                    </Box>
                </>
            )
    );
};

export default LayoutComponent;