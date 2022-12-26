import React from 'react'
import { Box, Button, useTheme } from '@mui/material'
import Header from '../../Components/Header'
import { tokens } from '../../theme'
import { AddOutlined } from '@mui/icons-material'
import { DataGrid} from '@mui/x-data-grid'
import { Link } from 'react-router-dom'

const  columns = [
  {field: 'id', headerName: 'ID'},
  {
    field: 'registrationNumber',
    headerName: 'Registration Number',
    headerAlign: 'center',
    
  },
  {
    field: 'type',
    headerName: 'Type',
    headerAlign: 'center',
    
  },
  {
    field: 'manufacturer',
    headerName: 'Manufacture',
    headerAlign: 'center',

  },
  {
    field: 'model',
    headerName: 'Model',
    headerAlign: 'center',
    
  },
  {
    field: 'color',
    headerName: 'Color',
    headerAlign: 'center',
  },
  {
    field: 'fuelType',
    headerName: 'Fuel Type',
    headerAlign: 'center',
  }
];

const data = [
  {id: '1', registrationNumber: 'BHV-2794', type: 'Car', manufacture: 'Toyota', model: 'Blue Bird', color: 'Black', fuelType: 'Petrol'},
  {id: '2', registrationNumber: 'BII-5694', type: 'Van', manufacture: 'Nisan', model: 'TXT', color: 'White', fuelType: 'Diesel'},
  {id: '1', registrationNumber: 'BHV-2794', type: 'Car', manufacture: 'Toyota', model: 'Blue Bird', color: 'Black', fuelType: 'Petrol'},
  {id: '2', registrationNumber: 'BII-5694', type: 'Van', manufacture: 'Nisan', model: 'TXT', color: 'White', fuelType: 'Diesel'},
  {id: '1', registrationNumber: 'BHV-2794', type: 'Car', manufacture: 'Toyota', model: 'Blue Bird', color: 'Black', fuelType: 'Petrol'},
  {id: '2', registrationNumber: 'BII-5694', type: 'Van', manufacture: 'Nisan', model: 'TXT', color: 'White', fuelType: 'Diesel'},
  {id: '1', registrationNumber: 'BHV-2794', type: 'Car', manufacture: 'Toyota', model: 'Blue Bird', color: 'Black', fuelType: 'Petrol'},
  {id: '2', registrationNumber: 'BII-5694', type: 'Van', manufacture: 'Nisan', model: 'TXT', color: 'White', fuelType: 'Diesel'},
];



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
                      as={Link}
                      to={'/vehicles/create'}
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
                <Box sx={{ height: 400 }}>
                    <DataGrid
                      rows = {data}
                      columns = {columns}
                      //pageSize = {5}
                      //rowsPerPageOptions ={[5]}
                      sx={{ 
                        '& .MuiDataGrid-columnHeader' : {
                          backgroundColor: colors.blueAccent[700],
                          fontWeight: 'bold',
                        },
                        '& .MuiDataGrid-main': {
                          border: 'none',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                          fontWeight: 'bold',
                        }
                       }}
                    />
                </Box>
        </Box>
  )
}

export default Vehicles;
