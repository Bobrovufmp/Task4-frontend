import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

export const useStyles = makeStyles((theme:Theme) => {

     const colors = theme.palette.mode

    return({
        incitingText: {
            color: "#1900D5",
            cursor: "pointer"
        },
        button: {
            display: "flex",
            fontFamily: "Poppins",
            margin: "10px auto",
            width: "60%",
        },
    })
})