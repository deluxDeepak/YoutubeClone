import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';



const App = () => {

  // Create the sate required (jo ui me change karega osko state banayege )
  const [sidebar,setsidebar]=useState(true);
  



  return (
    <div>
      {/*
      Nvigation bar sa jagah dikhega 
      Yehan navbar set karega side bar ke funtionality ko 
       */}
      <Navbar setsidebar={setsidebar} ></Navbar>

      {/* // Create the routes here */}
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}></Home>}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video></Video>}></Route>
      </Routes>
    </div>

  )
}

export default App