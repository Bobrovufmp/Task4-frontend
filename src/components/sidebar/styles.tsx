import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme/theme";

export  const useStyles = makeStyles((theme:Theme) => {

    const colors = tokens(theme.palette.mode)

    return ({
        navBlock: {
            width: '100%',
            borderBottom: `1px solid ${colors.borderColor}`,
        },
        title: {
            color: `${theme.palette.mode === "dark" ? colors.white.DEFAULT : colors.black.DEFAULT}`
        },
        listMenu: {
            marginBottom: "55px"
        },
        navBlockLogout: {
            width: '100%'
        },
        brand: {
            display:"flex",
            alignItems:"center",
            gap:'10px',
            padding:"30px 15px",
            cursor: "pointer"
        },
        navBarMenuItems: {
            backgroundColor: `${colors.gray}`

        },
        navItem: {
            "&:hover": {
                // TODO: Как сделать цвета для темы и импортировать их из одно файла theme?
                backgroundColor: "#4169E1 !important",
                color: "#fff",
                // border: "2px solid #8689E1",
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT} !important`
                }

            }
        },
        navItemLogout: {
            "&:hover": {
                // TODO: Как сделать цвета для темы и импортировать их из одно файла theme?
                backgroundColor: "red !important",
                color: "#fff",
                // border: "2px solid #8689E1"
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT} !important`
                }
            }
        }

    })


})