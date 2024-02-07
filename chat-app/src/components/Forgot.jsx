import React from 'react'
import { TextField, Card, Container} from '@mui/material'
import { Link } from 'react-router-dom';
import './Styles/Forgot.css'

export default function Forgot() {
  return (
    <div className='k3'>

    <div align='center' className='wrapper1'>
      <Container style={{marginTop:"100px"}}>
      <Card style={{padding:"80px",width:"350px",height:"350px",opacity:0.6,borderRadius:"30px"}}>
        
        <h3>Forgot Password</h3>
        <div className='input-box'>
            <TextField fullWidth label="Old Password" type="Password" placeholder='Old Password' required />
        </div>
        <br/>
        <div className='input-box'>
            <TextField fullWidth label="New Password" type="password" placeholder='New Password' required/>
        </div>
        <br/>
        <div className='input-box'>
            <TextField fullWidth label="Confirm Password" type="password" placeholder='Confirm Password' required/>
        </div>
        <br/>
        <Link to='/'><button type="submit" className="login-btn" style={{background:'#5353c6',borderRadius:"90px",width:"100px",height:"40px",borderColor:'#ececf9 ',color:"white",fontStyle:"italic"}}>Forgot Password</button></Link>
        </Card>
        </Container>
    </div>
</div>
  )
}
