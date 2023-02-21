import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {ColorModeContext} from "../../theme/theme";
import {useStyles} from "./styles";

const TopBarComponent = () => {
    const user = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    console.log(user)
    return (
        <Box className={classes.root}>
            <Grid>Welcome, {user.firstName}
            </Grid>
            <Box className={classes.iconAndSearchBlock}>
                <Grid className={classes.iconBlock}>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark"? (<DarkModeIcon/>) :(<LightModeIcon/>)}
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
        </Box>
    );
};

export default TopBarComponent;