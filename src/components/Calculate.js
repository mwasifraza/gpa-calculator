import React from 'react';
import GpaSection from './elements/GpaSection';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';

const Calculate = () => {
  return (
    <>
    <div className='container'>
        <div className='row page'>
            <div className='page-header my-4'>
                <Navbar />
                <div className='row main-head'>
                    <div className='col-sm-6 mx-auto text-center mt-5 pt-5 z-2'>
                        {/* <i class="fas fa-university fa-3x my-primary my-2"></i> */}
                        <h1>GPA Calculator</h1>
                        <p>Calculate your high school, college and cumulative GPA, check your grades and understand how the GPA scale works.</p>
                    </div>
                </div>
                <div className='row gpa-form py-5'>
                    <div className='col-sm-11 mx-auto z-2'>
                        <div className='p-1'>
                            <GpaSection />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculate;