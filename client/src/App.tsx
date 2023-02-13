import React from 'react';


import './App.css';
import Home from './components/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Order from './components/Order';
import Cart from './components/Cart';
import Navbar from './components/Navbar';



function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar/>

      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Login/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
