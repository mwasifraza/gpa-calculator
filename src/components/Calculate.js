import React from 'react';
import Navbar from './Navbar';

const Calculate = () => {
  return (
    <>
    <div className='container'>
        <div className='row page'>
            <div className='page-header'>
                <Navbar />
                <div className='row main-head'>
                    <div className='col-sm-6 m-5 p-5'>
                        <h1>GPA Calculator</h1>
                        <p>Calculate your high school, college and cumulative GPA, check your grades and understand how the GPA scale works.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculate;