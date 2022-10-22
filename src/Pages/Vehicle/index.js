import React from 'react'
import { Box, Button, useTheme } from '@mui/material'
import Header from '../../Components/Header'
import { tokens } from '../../theme'
import { AddOutlined } from '@mui/icons-material'

const Vehicles = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
        <Box m='20px'>
                {/*Header*/}
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                  <Header title='Vehicles' subtitle='Manage your vehicles'/>
                  <Box>
                    <Button
                      sx={{ 
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px'
                      }}
                    >
                      <AddOutlined sx={{ mr: '10px' }}/>
                      Add Vehicle
                    </Button>
                  </Box>
                </Box>
        </Box>
  )
}

export default Vehicles;
