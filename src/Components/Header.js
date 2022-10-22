import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

const Header = ({title, subtitle})=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);

    return <Box mb='30px'>
        <Typography 
            color = {colors.grey[100]}
            fontWeight='bold'
            fontSize='18px'
            sx={{
                m: '0 0 5px 0'
            }}
        >{title}</Typography>
        <Typography color={colors.greenAccent[400]}>{subtitle}</Typography>
    </Box>
}

export default Header