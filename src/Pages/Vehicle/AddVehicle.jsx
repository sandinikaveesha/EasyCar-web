import React, {useState} from 'react'
import Sidebar from '../../Components/Sidebar'
import Topbar from '../../Components/Topbar'
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem, Button, Card, CardContent, Typography, CardMedia, TablePagination, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import Header from '../../Components/Header'
import './add_vehicle.css'
import vehicles from '../../Assets/Images/car-flat.png'
import trip from '../../Assets/Images/trip.png'

const types = [
    {value: 'Bike', label: 'Bike' },
    {value: 'Car', label: 'Car' },
    {value: 'Van', label: 'Van' }
];

const fuels=[
    {value: 'Petrol', label: 'Petrol' },
    {value: 'Diesel', label: 'Diesel' }
];

// Table Design
const columns = [
    {id: 'reg', label: 'Registration'},
    {id: 'model', label: 'Model'},
    {id: 'fuel', label: 'Fuel'},
    {id: 'brand', label: 'Brand'},
    {id: 'color', label: 'Color'},
    {id: 'price', label: 'Price'},
];


// Data Creating 
function createData(reg, model, fuel,  brand, color, price){
    return {reg, model, fuel, brand, color, price};
}

// Sample Data
const rows = [
    createData('BHV-2794', 'EG-8', 'Petrol',  'Honda', 'Black', '3500.00'),
    createData('BH-5467', 'Alto', 'Petrol',  'Suzuki', 'Black', '2500.00')
];

const AddVehicle = () => {
    // Handling Table Functions 
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    // Handling Dialog Box
    const [open,setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(true);
    }
    const handleClose = ()=>{
        setOpen(false);
    }
  return (
    <>
        <Sidebar/>
        <main className='content'>
            <Topbar/>
            
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <div className='widget-container'>
                        <div className='widget-title'>Vehicle Overview</div>
                        <Grid container spacing={1}>
                            <Grid item xs={5}>
                                <Card sx={{ display: 'flex', backgroundColor: 'lightsteelblue' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography className='card-title' component='div'>Your Vehicles</Typography>
                                            <Typography component='div' variant='subtitle1' className='card-info'>23</Typography>
                                        </CardContent>
                                    </Box>
                                   
                                </Card>
                            </Grid>
                            <Grid item xs={5}>
                                <Card sx={{ display: 'flex', backgroundColor: 'yellowgreen' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography className='card-title' component='div'>On Trip Vehicles</Typography>
                                            <Typography component='div' variant='subtitle1' className='card-info'>23</Typography>
                                        </CardContent>
                                    </Box>
                                    
                                </Card>
                            </Grid>
                            
                        </Grid>
                    </div>
                    <span className='table-title'>Vehicle Information</span>
                    <Paper sx={{ width: '100%', overflow: 'hidden', ml:2, mt:2 }} >
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column)=>(
                                            <TableCell key={column.id}>{column.label}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row)=>{
                                                return (
                                                    <TableRow hover key={row.reg}>
                                                        {columns.map((column)=>{
                                                            const value = row[column.id];
                                                            return(
                                                                <TableCell key={column.id}>{
                                                                    // eslint-disable-next-line no-undef
                                                                    column.format && typeof value === 'number' ? column.format(value): value
                                                                    }
                                                                    </TableCell>
                                                            )
                                                        })}
                                                    </TableRow>
                                                )
                                            })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                    
                </Grid>
                <Grid item xs={5} className='right-side' sx={{ ml:4 }}>
                <div className='header'>
                    <span className='title'>Add Vehicle</span><br />
                    <span className='sub-title'>Register your Vehicle Asset and Publish for the Client</span>
                </div>
                <div className='form-contet'>
                    <Box component='form' sx={{ '& > :not(style)' : {m:1}, }}>
                        <TextField id="outlined-basic" label="Registration No" size='small' variant="outlined" sx={{ width: '100%' }}/>
                        <TextField
                        id="outlined-select-currency"
                        select
                        label="Vehicle type"
                        helperText="Please select vehicle's type"
                        size='small'
                        sx={{ width: '100%' }}
                        >
                      {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField id="outlined-basic" label="Model" size='small' variant="outlined" sx={{ width: '100%' }}/>
                    <TextField
                                id="outlined-select-currency"
                                select
                                label="Fuel Type"
                                helperText="Please select vehicle's Fuel type"
                                size='small'
                                sx={{ width: '100%' }}
                                >
                            {fuels.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                    <Grid container spacing={1}>
                       
                        <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Engine Capacity" type='number' size='small' variant="outlined" sx={{ width: '100%' }}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="Brand" size='small' variant="outlined" sx={{ width: '100%' }}/>
                        </Grid>
                        <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Color" type='color' size='small' variant="outlined" sx={{ width: '90%' }}/>
                        </Grid>
                    </Grid>
                   
                    
                    
                    <TextField id="outlined-basic" label="Price Per Day" type='number' size='small' variant="outlined" sx={{ width: '100%' }}/>
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                        <TextField
                                id="outlined-select-currency"
                                select
                                label="Vehicle Owner"
                                helperText="Please select vehicle's Owner"
                                size='small'
                                sx={{ width: '100%' }}
                                >
                            {fuels.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant='contained' size='small' sx={{ width: '80%', mt: 0.5 }} onClick={handleOpen}>+</Button>
                        </Grid>
                    </Grid>
                    
                    <Button variant='contained' size='small' sx={{ width: '100%' }}>Register</Button>
                    </Box>
                </div>
                </Grid>
            </Grid>
        </main>
        {/* Dialog Box Design For Vehicle Owner Registration*/}
        <Dialog open={open} onClose={handleClose} sx={{ maxWidth: 450 }}>
            <DialogTitle> Add Vehicle Owner </DialogTitle>
            <DialogContent>
                <DialogContentText>To Register Vehicle, and Owner please fill following form. </DialogContentText>
                <TextField 
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    fullWidth="true"
                    variant="standard"
                />
                <TextField 
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    fullWidth="true"
                    variant="standard"
                />
                <TextField 
                    margin="dense"
                    id="nic"
                    label="NIC"
                    fullWidth="true"
                    variant="standard"
                />
                <TextField 
                    margin="dense"
                    id="phone"
                    label="Phone Number"
                    fullWidth="true"
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Register</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default AddVehicle
