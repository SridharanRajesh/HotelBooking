import React from 'react'
import { TextField,Card, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import './Styles/SignUp.css'

export default function SignUp() {
    return (

<div className='k2'>

    <div align='center' className='wrap'>
      <Container style={{marginTop:"100px"}}>
      <Card style={{padding:"50px",width:"400px",height:"450px",opacity:"0.8",borderRadius:"50px"}}>
        
        <h1>SIGNUP</h1>
        <div className='inputbox'>
            <TextField fullWidth type="text" placeholder='Name' required />
        </div>
        <br/>
        <div className='inputbox'>
            <TextField fullWidth type="number" placeholder='Mobile Number' required />
        </div>
        <br/>
        <div className='inputbox'>
            <TextField fullWidth type="text" placeholder='Username' required />
        </div>
        <br/>
        <div className='inputbox'>
            <TextField fullWidth type="password" placeholder='Create Password' required/>
        </div>
        <br />
        <Link to='/'><button type="submit" className="loginbtn" style={{background:'#5353c6',borderRadius:"90px",width:"100px",height:"40px",borderColor:'#ececf9 ',color:"white",fontStyle:"italic"}}>SIGN UP</button></Link>
        <div className='registerlink'>
        <p>
            Already have an account? <Link to="/">SignIn</Link>
        </p>
        </div>
        </Card>
        </Container>
    </div>
</div>
  )
}