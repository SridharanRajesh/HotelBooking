import React, { Component } from 'react'
import { Paper, Box} from '@mui/material';
import './Styles/Designst5.css';
import{Link} from 'react-router-dom';
export default class Design5 extends Component {
  gridstyle={margin:"30px"}
  paperstyle={padding:"30px",width:"400px",margin:"40px",backgroundColor:"#ffff" ,borderRadius:"25px",opacity:"0.8"}

  render() {
    return (
      <body className='k5' >
      <div>
      <Box align="center" style={this.gridstyle}>
      <Paper class="light5" style={this.paperstyle}>
      <div><h1 style={{textAlign:'center',fontFamily:"cinzel",color:"black"}}>Moderate Room Allocation</h1>
      <br/>
      <h2 style={{fontFamily:"cinzel",color:"black"}}>Quadruple Room(for 4 people)<br/>
      Queen Room:A room with a queen-sized bed.<br/>
      Studio Room:A room with a studio bed-a couch that can be convereted into a bed.<br/>
      city view room or suite<br/>
      it has an attached bathroom,a small dressing table,a small bedside table and a small writing table.<br/>
      Sometimes it has a single chair too. 
      <br/>
      <br/>
      <br/>
      <Link to = '/Design4'>
      <button style={{background:'lightblue',borderRadius:"90px",width:"100px",height:"40px",fontFamily:"cinzel",borderColor:'white',float:'right'}}>Back</button>
      </Link>
      </h2>
      </div>
      </Paper>
      </Box>
      </div>
      </body>
    )
  }
}
