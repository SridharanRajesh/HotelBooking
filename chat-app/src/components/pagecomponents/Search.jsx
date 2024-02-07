import React from 'react'
import '../Styles/Search.css'

export default function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input fullWidth type="text" placeholder='Find a User'/>
      </div>
      <div className='userChat'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU" alt=""/>
        <div className='userChatInfo'>
          <span>Priya</span>
        </div>
      </div>
    </div>
  )
}
