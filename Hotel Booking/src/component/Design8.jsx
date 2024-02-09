import React, { Component } from 'react'
import { Paper, Box, Stack,Typography } from '@mui/material';
import './Styles/Designst8.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export default class Design8 extends Component {
    gridstyle={margin:"0px"}
    paperstyle1={padding:"30px",width:"400px",margin:"40px",opacity:"0.0"}
    paperstyle2={padding:"30px",width:"400px",margin:"40px"}
    
  render() {
    return (
      <body className='k8' >
        <Alert severity="success">
       <AlertTitle>Success</AlertTitle>
       YOUR ROOM IS BOOKED — <strong>check it out!</strong>
       </Alert>
      <Stack direction="row">
        <Box flex={1}  align="center" style={this.gridstyle}>
        <Paper style={this.paperstyle1}> 
        <Stack direction="row"> 
        </Stack>
        </Paper>
        </Box>
        <Box flex={1}  align="center" style={this.gridstyle}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Paper style={this.paperstyle2} class="light8"> 
        <Typography variant="h4" style={{fontFamily:"cinzel",color:"black"}}>PROCEED FOR PAYMENT</Typography>
        <Stack direction="row">
        </Stack>
        </Paper>
        </Box>
        </Stack>
      </body>
    )
  }
}

