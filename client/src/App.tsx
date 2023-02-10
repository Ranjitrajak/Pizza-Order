import React from 'react';


import './App.css';
import Home from './components/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
