import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Error from './Components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import DesignersPage from './Components/DesignerPage';
import DesignUploadForm from './Components/DesignUploadForm';
import ProfilePage from './Components/ProfilePage';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <div className='Container'>
          <Navbar />
          <Routes>
            <Route exact path='*' element={<Error />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/register' element={<Register/>} />
            <Route exact path='/designers' element={<DesignersPage/>} />
            <Route exact path='/designersform' element={<DesignUploadForm/>} />
            <Route exact path='/profile' element={<ProfilePage/>} />
          </Routes>

        </div>
      </>
    </BrowserRouter>
  )
}

export default App
