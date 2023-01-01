import React, { useState } from 'react'
import { Box, Grid, TextField, Button } from '@mui/material'
import bg from '../../Assets/Images/regbg.png'
import './use_registration.css'




const UserRegistration = () => {
  const [agency, setAgency] = useState("Test Agency");

  return (
    <div className='user-register-page'>
      <Grid container spacing={2}>
            <Grid item xs={6} className="left-side">
                <div className='header'>
                    <span className='title'>User Registration</span><br />
                    <span className='sub-title'>Welcome to the Easy Car Web Portal Enjoy the Unlimited Service on {agency}</span>
                </div>
                <div className='form-contet'>
                    <Box component='form' sx={{ '& > :not(style)' : {m:1}, }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="First Name" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                            <Grid item xs={6}>
                                 <TextField label="Last Name" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="Email" type='email' size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                            <Grid item xs={6}>
                                 <TextField label="Phone" size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                        </Grid>
                       
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                 <TextField label="Password" type='password' size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                            <Grid item xs={12}>
                                 <TextField label="Confirm Password" type='password' size='small' variant='outlined' sx={{ width: '100%' }} />  
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button variant='contained' size='small' sx={{ width: '100%' }}>Register for {agency}</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Grid>
            <Grid item xs={4} className="right-side">
                    <center><img src={bg} alt=""  /></center>
            </Grid>
        </Grid>
    </div>
  )
}

export default UserRegistration
