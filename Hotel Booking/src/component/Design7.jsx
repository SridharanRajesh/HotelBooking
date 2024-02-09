import React, { Component } from 'react'
import {Grid,Typography,TextField,Button,Box, Paper}from '@mui/material';
import{Link} from 'react-router-dom'
import './Styles/Designst7.css';
export default class Design7 extends Component {
    mystyle = {margin:"50px"}
    cardstyle={padding:"50px",width:"800px",margin:"50px",opacity:"0.7",borderRadius:"25px",backgroundColor:"#ffff"}
    sr={margintop:"10px"}
  render() {
    return (
      <body className='k7' >

      <div>
        <Grid align='center' style={this.mystyle}>
            <Paper className='light7' style={this.cardstyle}>
            <Box 
            component="img"
            sx={{
              marginBottom:'0px',
              marginLeft:'0px',
              marginTop:'0px',
              marginRight:'790px',
              height:'20px',
              width: '20px',
              opacity:'1',
            }}
            alt="logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAclBMVEUAAAD////8/PzW1tb5+flFRUXy8vJMTEz29vbMzMw2Nja+vr6FhYVISEiIiIjX19fh4eE6OjoPDw9qampdXV16enojIyPo6OhsbGwaGhoVFRWYmJiNjY1WVlYKCgrQ0NDExMQuLi4/Pz+UlJR+fn5iYmIQJNMuAAAD2UlEQVR4nO2d2XLiQAxF0zaLF3ZsSAYIDiH//4uTKSq92Sbz0lKVrs4X3FNxsFutVr8YSF64A/Cg2kj0tSf1ffoiiOm9Ln7VLhvumCloyqfaecUdMBVVPq7dcodLSTuiPTtwJ0vLYTakfeSOlZ5jX3vGnYmCWU9b+BP+4BBri/41c7Shds6dh4o80N5yx6Gi8rVL7jR0lJ62yC/SYRqnPeHOQklhtWvuKJTUVnvBHYWShdWec0ehZGm1uZPQotpIoGvvuJNQ8m61L9xRKJlb7TN3FEpWVrvjjkJJ55Yi3FEoyZz2K3cWOvbewnPNHYaO3K+uwHyVL4Oi0oY7DhWbsHIK8g47h5VTY27ciSi4mVg7+8OdKT27rKdtijfuVKn547b3vR3PbMmdKy3TzAxpG3PiTpaST9807GY4ii2YN0czrv39Ar9zB0zBfRNpDjRo5afXrZjCw267P137jtqXhoRqI6HaSKg2EqqNhGojodpIqDYSqo2EaiOh2kioNhKqjYRqI6HaSKg2EqqNhGojodpIqDYSA9rd+SKo2fjtcu6yX7VzkYeE9vlT7Y3Y3urpZlx7xR0uJYsR7ULsjLgHVTGkDTBCa9bXLrgzUVD0tIU/4Q8+Ym2Q0Sv3UBvmsOM60IY48/ePra995U5Dx9XT/uIOQ8eX0864s1AysdoddxRK3OAw0d/iMaCDw9y4mXfuKKRYbe4gtKg2Euj/26C/5KDv7Y47CiXuKw30m9zsubPQ4a3AUNfbRtR1Oc+4YdbSosFhIJXTnx0hrDp5ZWJtiIn0/V0R0D2w77+38Fs2hnc8jfCBiCvfNOpmELsWmz/pZvhmLbJ35XUdaQ50KpWfjaDrog7Nues7al8aEqqNhGojodpIqDYSqo2EaiOh2kioNhKqjYRqI6HaSKg2EqqNhGojodpIqDYSqo2EaiOh2kgMaF9Pe0HN5dV/3eO5ablzpqB9fmvr8cIdMBWXJ3f0fnKHS8nYjcyZ8FNRt8H7twvxt8zvBg5NZGIuYR7nfdLThpiqtI21RR8TcaxCbdDDjmIHfcZMfe2cOw0duacNdGx977ShhhRkVrvjjkJJZ7WhBpCsrLbYddcQbtwMwHeph9XmDkKLaiNhtXVwmHyWVhtk6MoDNzis5o5CiRscBjFz5QdvcBjQ6ObGW3gCDQ4r/eqK8EkzjiooKq2541CRh5XTO3ceGtqoYGw+uBNRcDCxNsR1KrOetjlyZ0qP2+z1r0oS/px/uJ2/cH9b9O9a65uG3Qxrse/vbThDK+5duYr8Tm3KSLPfqTSpF6LW3/NFPelJal8aEqqNxF/oJW7NakwEvQAAAABJRU5ErkJggg==" 
            />
              <div><h3 style={{color: 'red'}}>HOME PAGE</h3></div>
                <Typography varient='h2'><span><strong>Reservation Information</strong></span></Typography>
                <hr/>
                <Typography varient='h4'>Room Type</Typography>
                <br/>
                <TextField placeholder="In Date" type="number"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <TextField label="In Time" type="time"/>
                <br/>
                <br/>
                <TextField placeholder="Out Date" type="number"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <TextField label="Number Of Guests" type="number"/>
                <br/>
                <br/>
                <Typography varient='h2'><span><strong>Personal Information</strong></span></Typography>
                <hr/>
                <br/>
                <TextField label="Name" placeholder="Enter Your Name" type="text"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <TextField label="Contact" placeholder="Mobile Number" type="number"/>
                <br/>
                <br/>
                <TextField label="Age"placeholder="Age" type="number"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <TextField label="Address" placeholder="Address" type="text"/>
                <br/>
                <br/>
                <Link to = '/Design8'>
                <Button style={{background:'#FF8A00',borderRadius:"40px",width:"200px",height:"40px",float:'center',color:'black'}}>Confirm Booking</Button>
                </Link>
            </Paper>
        </Grid>
      </div>
      </body>
    )
  }
}