import React, {FC, useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {ColorModeContext} from "../../theme/theme";
import {useStyles} from "./styles";
import FlexBetween from "../flex-between/flexBetween";
import {MenuOutlined} from "@mui/icons-material";
import {ITopbarProps} from "../../common/types/topbar/topbar";

const TopBarComponent: FC<ITopbarProps> = (props: ITopbarProps): JSX.Element => {
    const {isOpen, setIsOpen} = props
    const user = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    console.log(user)
    return (
        <AppBar position={"static"} className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                    <Typography variant={'h3'}>
                        Welcome, {sessionStorage.getItem('name')}
                    </Typography>
                </FlexBetween>
                <Box className={classes.iconAndSearchBlock}>
                    <Grid className={classes.iconBlock}>
                        <IconButton onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === "dark" ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                        </IconButton>
                        <IconButton>
                            <CircleNotificationsIcon/>
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <SearchIcon/>
                        </IconButton>
                        <InputBase className={classes.inputBlock} placeholder={"Search"}/>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;