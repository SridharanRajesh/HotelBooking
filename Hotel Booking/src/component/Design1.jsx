import React, { Component } from 'react'
import { Paper, Typography ,Avatar, TextField, Box} from '@mui/material'
import './Styles/Designst1.css';
import{Link} from 'react-router-dom'

export default class Design1 extends Component {
  gridstyle={margin:"30px" }
  paperstyle={padding:"30px",width:"400px",margin:"40px",borderRadius:"25px",backgroundColor:"#ffff",opacity:"0.8"}
  render() {
    return (
      <body className='k1' >
      <div>
        <div><h1 style={{color: 'red',fontFamily:"cinzel", textAlign:'center'}}>HOTEL <span style={{color:'blue'}}>BOOKING</span></h1></div>
        <Box align="center" style={this.gridstyle}>
        <Paper class="light1" style={this.paperstyle}> 
        <Avatar style={{width:"100px",height:"100px",borderColor:'black'}}src="th.jpeg"/>
            <br/>
            <Typography variant="h4" style={{fontFamily:"cinzel",color:"black"}}>Sign in </Typography>
            <br/>
            <TextField label="Mobile number or email :" placeholder="Mobile number or email :" type="text"  style={{fontFamily:"arvo"}}/>
            <br/>
            <br/>
            <TextField label="Password :" placeholder="Password :" type="password" style={{fontFamily:"arvo"}}/>
            <br/>
            <br/>
            <Typography variant="h7" style={{fontFamaily:"Faustina",color:"#0A2FF1"}}><span><i> <Link to = 'Design2'>Create account</Link></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i> <Link to = 'Design3'>Forget Password?</Link></i></span></Typography>
            <br/>
            <br/>
            <Link to = 'Design4'>
            <button style={{background:'lightblue',borderRadius:"90px",width:"100px",height:"40px",borderColor:'white'}}>SIGN IN</button>
            </Link>
            </Paper>
            
          </Box>
      </div>
      </body>
    )
  }
}
