 import SignIn from './components/SignIn'
 import SignUp from './components/SignUp'
import Home from "./components/Home";
import Forgot from "./components/Forgot";
// import Profile from "./components/Profile";
// import Search from "./components/pagecomponents/Search";
//  import Navbar from './components/pagecomponents/Navbar'
//  import Chats from './components/pagecomponents/Chats'
// import Chat from "./components/pagecomponents/Chat";
// import Message from "./components/pagecomponents/Message";
// import Messages from "./components/pagecomponents/Messages";
import React from 'react'
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signin' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
    </Routes>
    </div>
  );
}

export default App;