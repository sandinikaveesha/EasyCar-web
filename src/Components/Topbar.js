import { Box, IconButton, useTheme, InputBase, Menu } from '@mui/material'
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined, Search } from '@mui/icons-material';
import { useState } from 'react';
import { MenuItem } from 'react-pro-sidebar';

const Topbar = ({state})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);

    // Handle Menu Open
    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    }
    // Handle Menu Close
    const handleClose = ()=>{
        setAnchor(null);
    }

    if(state === false) return;
    return (
        <>
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
                    <div>
                    <IconButton
                        id='profile-btn'
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <PersonOutlined/>
                    </IconButton>
                   
                    </div>
                    
                </Box>
                
            </Box>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchor}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ 
                            'aria-labelledby': 'basic-button'
                         }}
                         
                    >
                        <MenuItem sx={{ 
                            paddingLeft: "3rem"
                         }} onClick={null}>&nbsp;&nbsp;&nbsp;Profile&nbsp;&nbsp;&nbsp;</MenuItem>
                        <MenuItem>&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;</MenuItem>
                    </Menu>

        </>
    );
}

export default Topbar;