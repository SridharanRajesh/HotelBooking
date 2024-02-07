import React from 'react'
import '../Styles/Chat.css'

function Chats() {
  return (
      
      <div className='chats'>
        <div className="userChat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFR2mVAx8bkghX04MOTSwnnfoUSD8BlCGNEA&usqp=CAU" alt="" />
            <div className="userChatInfo">
                <span>Gowtham</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU" alt="" />
            <div className="userChatInfo">
                <span>Maha</span>
                <p>Hii</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aH0nAwUzHdAlBReK83nymFDlaS2l1rLjQw&usqp=CAU" alt="" />
            <div className="userChatInfo">
                <span>Haritha</span>
                <p>Hey</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1EaRUdc2ZQNoe6mVspPBFaYqvnxbhZHx0Q&usqp=CAU" alt="" />
            <div className="userChatInfo">
                <span>MahaPrabu</span>
                <p>Hlo</p>
            </div>
        </div>
    </div>
        )
      }

      export default Chats;