import React, { Component } from 'react'
import { Paper, Box, Stack,Typography } from '@mui/material';
import './Styles/Designst4.css';
import{Link} from 'react-router-dom'
export default class Design4 extends Component {
    gridstyle={margin:"0px"}
    paperstyle={padding:"30px",width:"400px",margin:"40px"}
    
  render() {
    return (
      <body className='background' >
      <div><h1 style={{ textAlign:'center',fontFamily:"cinzel",color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ROOM ALLOCATION</h1>
      <br/>
      <br/>
      <br/>
      
      </div>
      <Stack direction="row">
        <Box flex={1}  align="center" style={this.gridstyle} >
        <Paper style={this.paperstyle} class="light"> 
        <br/>
        <Typography variant="h4" style={{fontFamily:"cinzel"}}>TYPE OF ROOMS </Typography>
        <br/>
        <br/>
        <Stack direction="row"> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to = '/Design5'><div class="circle1"></div></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/Design6'><div class="circle"></div></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/Design6'><div class="circle"></div></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/Design6'><div class="circle"></div></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/Design5'><div class="circle1"></div></Link>
        <br/>
        </Stack>
        </Paper>
        </Box>

        <Box flex={1}  align="center" style={this.gridstyle}>
        <Paper style={this.paperstyle} class="light"> 
        <br/>
        <Typography variant="h4" style={{fontFamily:"cinzel"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AVAILABLE ROOMS</Typography>
        <br/>
        <br/>
        <Stack direction="row">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to = '/Design7'><div class="circle3"></div></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="circle2"></div>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/Design7'><div class="circle3"></div></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="circle2"></div>&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Link to = '/Design7'><div class="circle3"></div></Link>
        <br/>
        </Stack>
        </Paper>
        </Box>
        </Stack>
        <Stack direction="row">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="circle"></div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to = '/Design5'><div class="circle1"></div></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="circle2"></div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="circle3"></div>
        
      </Stack>
      <br/>
      <Stack direction="row">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Typography variant="h4" style={{fontFamily:"cinzel",color:"white"}}>Luxury</Typography>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Typography variant="h4" style={{fontFamily:"cinzel",color:"white"}}>Moderate</Typography>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Typography variant="h4" style={{fontFamily:"cinzel",color:"white"}}>Booked</Typography>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Typography variant="h4" style={{fontFamily:"cinzel",color:"white"}}>UnBooked</Typography>
        
      </Stack>

      </body>
    )
  }
}

