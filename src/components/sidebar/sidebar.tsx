import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {
    Box,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
    Icon
} from "@mui/material";
import {ChevronLeftOutlined, ChevronRightOutlined, LogoutOutlined, DoneOutlined} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";
import {themeSettings, tokens} from "../../theme/theme";
import FlexBetween from "../flex-between/flexBetween";
import {navMenu} from "../../common/moks/navigate/moksNavigate";
const SidebarComponent = (props: any ) => {
    const [active, setActive] = useState('')
    const {isNoneMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    const navigateTo = useNavigate()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    useEffect(() => {
        setActive(pathname.substring(1))

    },[])
    const renderNavMenu = navMenu.map((e): JSX.Element => {
            return (
                <ListItem key={e.id}>
                    <ListItemButton onClick={() => navigateTo(`${e.path}`)}>
                        <ListItemIcon>
                            {e.icon}
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1">
                                {e.name}
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            )
        })
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
                                <Box display="flex"
                                     alignItems="center"
                                     gap='10px'
                                     onClick={() => navigateTo("/home")}
                                     sx={{cursor: "pointer"}}
                                >
                                        <Icon>
                                            <DoneOutlined/>
                                        </Icon>
                                        <Typography
                                            variant='h1'
                                            color={theme.palette.mode === "dark" ? colors.white.DEFAULT : colors.black.DEFAULT}
                                        >
                                        Task 4
                                        </Typography>
                                </Box>
                                {!isNoneMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                    <ChevronLeftOutlined/>
                                    </IconButton>)}
                            </FlexBetween>
                        </Box>
                        <List>
                            {renderNavMenu}
                        </List>
                    </Box>
                </Drawer>
            )}


        </Box>
    );
};

export default SidebarComponent;