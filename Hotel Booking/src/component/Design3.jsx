import React, { Component } from 'react'
import { Grid, Paper, Typography ,TextField,} from '@mui/material';
import './Styles/Designst3.css';
import{Link} from 'react-router-dom'
export default class Design3 extends Component {
    gridstyle={marginTop:"0px"}
    paperstyle={padding:"30px",width:"400px",margin:"40px",backgroundColor:"#ffff",borderRadius:"25px",opacity:"0.7"}
  render() {
    return (
      <body className='k3' >

      <div>
        <Grid align="center"style={this.gridstyle}>
          <br/>
          <br/>
          <br/>
          <br/>
            <Paper class='light3' style={this.paperstyle}> 
            <br/>
            <Typography variant="h4" style={{fontFamily:"cinzel",color:"black"}}> FORGOT PASSWORD </Typography>
            <br />
            <br/> 
            <TextField label="New password:" placeholder="Enter your Password" type="password"/>
            <br />
            <br /> 
            <TextField label="Confirm new password:" placeholder="Enter your Password" type="password"/>
            <br/>
            <br/>
            <br/>
            <Link to = '/'>
            <button style={{background:'lightblue',borderRadius:"90px",width:"100px",height:"40px",borderColor:'white' }}>SIGN IN</button>
            </Link>
            </Paper>
        </Grid>
      </div>
      </body>
    )
  }
}


