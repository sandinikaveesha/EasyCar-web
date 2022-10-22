import { Box, IconButton, useTheme, InputBase } from '@mui/material'
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined, Search } from '@mui/icons-material';

const Topbar = ({state})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    if(state === false) return;
    return (
            <Box display='flex' justifyContent="space-between" p={2} >
                {/* Search Bar */}
                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius='3px'
                >
                    <InputBase sx={{ ml:2, flex: 1 }} placeholder='Search'  />
                    <IconButton type='button' sx={{ p:1}}> <Search/> </IconButton>
                </Box>
                {/* Header Icons */}
                <Box display='flex'>
                    <IconButton onClick={colorMode.toggleColorMode}>
                       {theme.palette.mode === 'dark' ? (
                         <LightModeOutlined/>
                       ) : (
                         <DarkModeOutlined/>
                       )}
                        
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlined />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined/>
                    </IconButton>
                    <IconButton>
                        <PersonOutlined/>
                    </IconButton>
                </Box>
            </Box>
    );
}

export default Topbar;