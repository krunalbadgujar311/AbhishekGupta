import React, { useContext } from 'react';
import Register from './Pages/Register';
import Login from "./Pages/Login";
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import './style.scss';

function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

