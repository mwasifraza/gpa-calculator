import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Calculate from './components/Calculate';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/calculate' element={<Calculate />}></Route>
      </Routes>
    </>
  );
}

export default App;
