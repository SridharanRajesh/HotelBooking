import React from 'react'
import { TextField, Card, Container, Avatar } from '@mui/material'
import { Link } from 'react-router-dom';
import './Styles/SignIn.css'

export default function SignIn() {
  return (
<div className='k1'>

    <div align='center' className='wrapper'>
      <Container style={{marginTop:"100px"}}>
      <Card style={{padding:"80px",width:"350px",height:"350px",opacity:0.8,borderRadius:"30px"}}>
    <Avatar alt="Travis Howard" src="" />
        
        <h3>SIGNIN</h3>
        <div className='input-box'>
            <TextField fullWidth type="text" placeholder='Username' required />
        </div>
        <br/>
        <div className='input-box'>
            <TextField fullWidth type="password" placeholder='Password' required/>
        </div>
        <div className='remember-forgot'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Link to='/forgot'>Forgot Password?</Link>
        </div>
        <br/>
        <Link to='/home'><button type="submit" className="login-btn" style={{background:'#5353c6',borderRadius:"90px",width:"100px",height:"40px",borderColor:'#ececf9 ',color:"white",fontStyle:"italic"}}>SIGN IN</button></Link>
        <div className='register-link'>
        <p>
        Don't have an account? <Link to="/signin">SignUp</Link>
      </p>
        </div>
        </Card>
        </Container>
    </div>
</div>
  )
}