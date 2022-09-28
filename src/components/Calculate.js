import React from 'react';
import FormGpa from './FormGpa';
import ReportTable from './ReportTable';
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
                <div className='row gpa-form'>
                    <div className='offset-sm-1 col-sm-7'>
                        <FormGpa />
                    </div>
                    <div className='col-sm-3'>
                        <ReportTable />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculate;