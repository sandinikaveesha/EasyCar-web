import React from 'react'
import { Box, useTheme } from '@mui/material'
import Header from '../../Components/Header'
import { tokens } from '../../theme'

export const VehicleCreate = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
        {/*Header*/}
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Header title='Vehicles' subtitle='Create your New Vehicle'/>
        </Box>
        

    </Box>
  )
}
