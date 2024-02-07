import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <div className='navbar'>
    //     <div>
    //         <img src='./menu-burger.png' alt='' style={{height:'25px',padding:'20px'}}/>
    //     </div>
    //     <div  className='navimg' >
    //         <img src='./search.png' alt='' style={{height:'25px',padding:'20px'}}/>
    //         <img src='./contact.png' alt='' style={{height:'25px',padding:'20px'}}/>
    //     </div>
    // </div>
    <div className='navbar'>
      <span className='logo'>WeChat</span>
      <div className='user'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon7UXXyxvoxfrD0brWchUB7kIU545JP7QtQ&usqp=CAU" alt=""/>
        <span>SriHari</span>
        <Link to="/"><button>LogOut</button></Link>
      </div>
    </div>
  )
}

export default Navbar