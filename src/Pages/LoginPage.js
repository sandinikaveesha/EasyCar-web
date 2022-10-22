import React, {useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FormControl, TextField, Button, Link } from '@mui/material'


//todo:: Need to do validation
//todo:: Need to Link Firestore Authentication


const LoginPage = () => {

  //States Variables
  const [user, setUser] = useState({email:'', password:''});

  //handleSubmitForm
  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.email==='' || user.password==='') {
        //todo:: Need to add alert function
        return;
    }
    console.log(user);
    //todo:: Need to do Authentication
  }


  return (
    <div className='login-page justify-content-center' style={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        marginTop: '20px'
     }}> 
        <div className='login-card align-content-center align-items-center m-1' style={{ 
            width: '70rem',
            height: '40rem',
            border: '1px solid grey',
            borderRadius: '10px'
         }}>
            <Row>
                <Container as={Col} className='d-none d-sm-block'>
                    <img
                        src='https://cars.tatamotors.com/images/punch/punch-suv-home-mob.png'
                        alt='punch-suv-home-mob'
                        style={{ 
                            height: '40rem',
                            objectFit: 'cover',
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '10px',
                         }}
                    />
                </Container>
                <Container as={Col} className='align-content-center align-item-center'>
                    <Row className='login-heading align-content-center justify-content-center' >
                         <div className='logo-section my-5'>
                            <div style={{ 
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'wrap',

                             }}>
                                <img
                                    as={Col}
                                    src='https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg'
                                    alt='logo'
                                    style={{ 
                                        height: '5rem',
                                        width: 'auto',
                                     }}
                                    
                                />
                                <h3 as={Col}>Easy Car Rental</h3>
                            </div>
                            <div className='login-title m-3 mb-3'>
                                <h2>LOGIN</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
                            </div>
                            <div className='login-form m-3'>
                                <FormControl sx={{ width: '90%' }}>
                                    <TextField
                                        type='email'
                                        name='email'
                                        size='small'
                                        label='Email'
                                        required
                                        sx={{ 
                                            width: '100%',
                                            m:1
                                         }}
                                         onChange={(e) =>{
                                            setUser({...user,email: e.target.value, password: user.password})
                                         }}
                                        />
                                </FormControl>
                                <br></br>
                                <FormControl sx={{ width: '90%' }}>
                                    <TextField
                                        type='password'
                                        name='password'
                                        size='small'
                                        label='Password'
                                        required 
                                        sx={{ 
                                            width: '100%',
                                            m:1
                                         }}
                                        onChange={(e)=>{
                                            setUser({...user,email: user.email, password: e.target.value})
                                        }}
                                    />
                                </FormControl>
                                <br></br>
                                <Link href='#' underline='none' sx={{ m:1, }}>Forget Password?</Link>
                                <Button variant='contained' sx={{ width:'90%', m:1 }} className='mt-3' onClick={handleSubmit}>Login</Button>
                            </div>
                         </div>
                    </Row>
                </Container>
            </Row>

         </div>
    </div> 
  )
}

export default LoginPage