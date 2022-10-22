import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../theme'
import { MenuOutlined, HomeOutlined, CarRentalOutlined, PeopleOutlined, SettingsOutlined, ReportOutlined } from '@mui/icons-material'


const Item = ({  title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem active={selected === title } style={{ color: colors.grey[100] }} onClick={()=> setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}


const Sidebar = ({state})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('');
    if(state === false){return undefined}
    else{


    return (
        <Box
            sx={{ 
                "& .pro-sidebar-inner" : {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                }
             }}
             style={{ 
                height: '100vh',
                width: '270px'
              }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    {/* Logo and Menu Icon */}
                    <MenuItem
                        onClick={()=> setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined/> : undefined}
                        style={{ 
                            margin: '10px 0 20px 0',
                            color: colors.grey[100]
                         }}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography
                                    variant='h3'
                                    color= {colors.grey[100]}
                                    fontSize= {18}
                                    >
                                        Sample Name
                                </Typography>
                                <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined/>
                                </IconButton>
                            </Box>
                        )}
                    
                    </MenuItem>
                    {/* User Info */}
                    {!isCollapsed && (
                        <Box>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <img
                                    src='https://lh3.googleusercontent.com/-UJ6wbU_NN_U/WfXahlY0j0I/AAAAAAAAxg4/ClSsSRD10bc0SM0l2LJBFuEe5eQfUfebgCHMYCw/s1600/Joey-King-awesome-dp-profile-pics-MyWhatsappImages.com-981.jpg'
                                    alt='user-profile'
                                    width= '100px'
                                    height='100px'
                                    style={{ 
                                        cursor: 'pointer',
                                        borderRadius: '50%'
                                     }}
                                    />
                            </Box>
                            <Box textAlign='center'>
                                <Typography fontWeight='bold' fontSize='14' color={colors.grey[100]} sx={{ m: '10px 0 0 0' }}>Sandini Kaveesha</Typography>
                                <Typography color={colors.greenAccent[500]}>Business Owner</Typography>
                            </Box>
                        </Box>
                    )}
                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'} marginTop={5}>
                        <Item
                            title= 'Dashboard'
                            to = '/'
                            icon = {<HomeOutlined/>}
                            selected = {selected}
                            setSelected = {setSelected}
                        />
                        <Typography
                            color = {colors.grey[300]}
                            sx={{ 
                                m: '15px 0 5px 20px'
                             }}
                        >
                            Activities
                        </Typography>
                        <Item
                            title= 'Vehicle Management'
                            to = '/vehicles'
                            icon = {<CarRentalOutlined/>}
                            selected = {selected}
                            setSelected = {setSelected}
                        />
                        <Item
                            title= 'User Management'
                            to = '/users'
                            icon = {<PeopleOutlined/>}
                            selected = {selected}
                            setSelected = {setSelected}
                        />
                        <Item
                            title= 'Business Setting'
                            to = '/business'
                            icon = {<SettingsOutlined/>}
                            selected = {selected}
                            setSelected = {setSelected}
                        />
                        <Item
                            title= 'Reporting'
                            to = '/reporting'
                            icon = {<ReportOutlined/>}
                            selected = {selected}
                            setSelected = {setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}
}

export default Sidebar;