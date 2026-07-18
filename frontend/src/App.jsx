import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/components/NotFound'
import Rooms from './pages/Rooms'
import Login from './pages/auth/Login'
import Signin from './pages/auth/Signin'
import SingleRoom from './pages/SingleRoom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Rooms' element={<Rooms />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signin />} />
        <Route path='/rooms/room/view' element={<SingleRoom />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App