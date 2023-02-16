import React from 'react';
import {Box, Grid} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
// import LightModeIcon from '@mui/icons-material/LightMode';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import SearchIcon from '@mui/icons-material/Search';
// import DarkModeIcon from '@mui/icons-material/DarkMode';

const TopBarComponent = () => {
    const user = useAppSelector(state => state.auth.user)
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
                <Grid>
                    {/*<IconButton>*/}

                    {/*</IconButton>*/}
                </Grid>

            </Box>
        </Box>
    );
};

export default TopBarComponent;