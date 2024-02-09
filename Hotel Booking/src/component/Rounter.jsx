
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Design1 from './Design1'
import Design2 from './Design2'
import Design3 from './Design3'
import Design4 from './Design4'
import Design5 from './Design5'
import Design6 from './Design6'
import Design7 from './Design7'
import Design8 from './Design8'
//import './Styles/Designst1.css'
// import './Styles/Designst2.css'
// import './Styles/Designst3.css'
// import './Styles/Designst4.css'
// import './Styles/Designst5.css'
// import './Styles/Designst6.css'
// import './Styles/Designst7.css'
// import './Styles/Designst8.css'
import React from 'react'

export default function Rounter() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Design1/>}>Design1</Route>
        <Route path='/Design2' element={<Design2/>}>Design2</Route>
        <Route path='/Design3' element={<Design3/>}>Design3</Route>
        <Route path='/Design4' element={<Design4/>}>Design4</Route>
        <Route path='/Design5' element={<Design5/>}>Design5</Route>
        <Route path='/Design6' element={<Design6/>}>Design6</Route>
        <Route path='/Design7' element={<Design7/>}>Design7</Route>
        <Route path='/Design8' element={<Design8/>}>Design8</Route>
      </Routes>
      </BrowserRouter>
  )
}
