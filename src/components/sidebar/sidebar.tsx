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
import {isString} from "util";


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
                    <ListItemButton onClick={() => navigateTo(`${e.path}`)} className={classes.navItem}>
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
                        width: drawerWidth,
                        borderRightColor: `${colors.borderColor}`
            }
            }}
            >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}
                                     onClick={() => navigateTo("home")}>
                                        <Icon>
                                            <DoneOutlined/>
                                        </Icon>
                                        <Typography
                                            variant='h1'
                                            className={classes.title}
                                        >
                                        Task 4
                                        </Typography>
                                </Box>
                            </FlexBetween>
                        </Box>
                        <List className={classes.listMenu}>
                            {renderNavMenu}
                        </List>
                    </Box>
                    <Box className={classes.navBlockLogout}>
                        <List>
                            <ListItem>
                                <ListItemButton onClick={() => navigateTo(`${"login"}`)} className={classes.navItemLogout}>
                                    <ListItemIcon>
                                        <LogoutOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1">
                                        Log Out
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;