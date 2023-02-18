import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {Box, Drawer, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme} from "@mui/material";
import {HomeOutlined, ChevronLeftOutlined, ChevronRightOutlined, GroupOutlined, LogoutOutlined} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";
import {themeSettings, tokens} from "../../theme/theme";
import FlexBetween from "../flex-between/flexBetween";
const SidebarComponent = (props: any ) => {
    const [active, setActive] = useState('')
    const {isNoneMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    const navigateTo = useNavigate()
    const theme = useTheme()
    useEffect(() => {
        setActive(pathname.substring(1))

    },[])
    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                anchor='left'
                open={isOpen}
                onClose={() => setIsOpen(false)}
                variant='persistent'
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper':{
                        color: theme.palette.secondary.main,
                        backgroundColor: theme.palette.primary.main,
                        boxSizing: "border-box",
                        width: drawerWidth

            }
            }}

            >
                    <Box width='100%'>
                        <Box>
                            <FlexBetween>
                                <Box display="flex" alignItems="center" gap='10px'>
                                    <Typography>
                                        Demo
                                    </Typography>
                                </Box>
                                {!isNoneMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                    <ChevronLeftOutlined/>
                                    </IconButton>)}
                            </FlexBetween>
                        </Box>
                    </Box>
                </Drawer>
            )}


        </Box>
    );
};

export default SidebarComponent;