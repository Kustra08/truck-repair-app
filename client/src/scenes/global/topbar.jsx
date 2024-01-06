import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlinedIcon";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlinedIcon";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlinedIcon";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlinedIcon";
import SearchIcon from "@mui/icons-material/SearchIcon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlinedIcon";

const topbar =() => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <box display="flex" justifyContent="space-between" p={2}>
            {/*SEARCH BAR */}
            <box 
            display="flex" 
            backgroundColor={colors.primary[400]} 
            borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </box>

     {/*ICON BUTTONS*/}
        <Box display="flex" >
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ):(
                        <LightModeOutlinedIcon />
                    )}
                    <LightModeOutlinedIcon />
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
        </Box>



        </box>
    );
 };

 export default topbar;