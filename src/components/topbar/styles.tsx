import {makeStyles} from "@mui/styles";
import {tokens} from "../../theme/theme";
import {Theme} from "@mui/material";

export const useStyles = makeStyles( (theme: Theme) => {

    const colors = tokens(theme.palette.mode)

    return (
        {
        root: {
            display:'flex',
            justifyContent:'space-between',
            alignItems: "center",
            padding: '32px 24px',
            backgroundColor: `${colors.primary.DEFAULT}`,
            maxHeight: '90px',
            borderBottom: `1px solid ${colors.borderColor}`
        },
        iconAndSearchBlock: {
            display: "flex"

        },
        iconBlock: {
            display:'flex',
            justifyContent:'space-between',
            alignItems: "center",
            borderRight: `2px solid ${colors.borderColor}`,
            paddingRight: "37px",
            paddingLeft: '45px'

        },
        searchBlock: {
            display: "flex",
            borderRadius: "8px",
            marginLeft: "28px",
            backgroundColor: `${colors.primary[600]}`,
        },
        searchIcon: {
            '&:hover': {
                backgroundColor: 'transparent !important',
            },
        },
        inputBlock: {
            padding: '14px 8px',
        }
        }
        )
})