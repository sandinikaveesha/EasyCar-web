import React from 'react'
import './business_registration.css'
import { Grid, TextField, Button } from '@mui/material'
import { Box } from '@mui/system'

import 'mapbox-gl/dist/mapbox-gl.css'
import Map from 'react-map-gl'

const BusinessRegistration = () => {
  return (
    <div className='register-page'>
        {/* <center><img src={bg} alt="" height={120} /></center> */}
        <Grid container spacing={2}>
            <Grid item xs={6} className="left-side">
                <div className='header'>
                    <span className='title'>Business Registration</span><br />
                    <span className='sub-title'>Register your Business for expand large market with technology</span>
                </div>
                <div className='form-contet'>
                    <Box component='form' sx={{ '& > :not(style)' : {m:1}, }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="Business Name" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                            <Grid item xs={6}>
                                 <TextField label="Business Registration No" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="Business Email" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                            <Grid item xs={6}>
                                 <TextField label="Business Phone" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField label="Address" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                        </Grid>
                        <span className='sub-title'>Enter Your Exact Location (Optional)</span>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="Longitude" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Latitude" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button variant='contained' size='small' sx={{ width: '100%' }}>Register Business</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Grid>
            <Grid item xs={4} className="right-side">
                <div className='map-box'>
                    <Map
                        mapboxAccessToken='pk.eyJ1IjoicHVybmE5NyIsImEiOiJjbGM3amtwOWgxaTRpM29wZ2M2cmxuNDdnIn0.gaHCkPiEoMkrCcb1eNsA0g'
                        style={
                        {
                            width: '500px',
                            height: '350px',
                            borderRadius: '10px'
                        }
                        }
                        mapStyle='mapbox://styles/mapbox/streets-v12'
                    ></Map>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default BusinessRegistration
