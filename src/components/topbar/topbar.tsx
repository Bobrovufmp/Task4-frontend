import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import LightModeIcon from '@mui/icons-material/LightMode';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {ColorModeContext, tokens} from "../../theme/theme";
import {useStyles} from "./styles";

const TopBarComponent = () => {
    const user = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            px={'32px'}
            py={'24px'}
        >
            <Grid>Welcome, {user.firstName}
            </Grid>
            <Box display={'flex'}>
                <Grid onClick={colorMode.toggleColorMode}>
                    <IconButton>
                        {theme.palette.mode === "dark"? (<DarkModeIcon/>) :(<LightModeIcon/>)}
                    </IconButton>
                    </Grid>
                        <Grid sx={{
                            pr: '37px',
                            pl: "45px",
                            borderRight: `2px solid ${colors.primary[600]}`

                        }}>
                    <IconButton>
                        <CircleNotificationsIcon/>
                    </IconButton>
                </Grid>
                <Grid sx={{
                    display: "flex",
                    backgroundColor: `${colors.primary[600]}`,
                    borderRadius: '8px',
                    ml: '28px'
                }}>
                <IconButton className={classes.root}>
                    <SearchIcon/>
                    </IconButton>
                    <InputBase sx={{
                        px: '18px',
                        py: "12px"
                    }}
                               placeholder={'Search'}/>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;