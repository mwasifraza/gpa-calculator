import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Calculate from './components/Calculate';
import Scale from './components/Scale';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Header />}></Route> */}
        <Route path='/' element={<Calculate />}></Route>
        <Route path='/scale' element={<Scale />}></Route>
      </Routes>
    </>
  );
}

export default App;
