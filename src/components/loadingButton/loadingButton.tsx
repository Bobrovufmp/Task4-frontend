import React from 'react';
import {styled} from "@mui/styles";
import LoadingButton from '@mui/lab/LoadingButton';

const AppLoadingButton = styled(LoadingButton) ({
    borderRadius: '4px',
    backgroundColor: '#4169E1 !important',
    boxShadow: "0px 1px 7px #332a76 !important",
    padding: "10px 20px !important",
    maxWidth: "300px"
})

export default AppLoadingButton;