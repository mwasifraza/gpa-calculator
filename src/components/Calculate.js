import React from 'react';
import GpaSection from './elements/GpaSection';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';

const Calculate = () => {
  return (
    <>
    <div className='container'>
        <div className='row page'>
            <div className='page-content rounded-3 my-sm-4'>
                <Navbar />
                <div className='row main-heading'>
                    <div className='col-lg-6 col-md-8 col-sm-10 mx-auto text-center mt-5 pt-4 z-2'>
                        {/* <i class="fas fa-university fa-3x my-primary my-2"></i> */}
                        <h1>GPA Calculator</h1>
                        <p>Calculate your high school, college and cumulative GPA, check your grades and understand how the GPA scale works.</p>
                    </div>
                </div>
                <div className='row body-content py-5'>
                    <div className='col-lg-11 col-sm-12 mx-auto z-2'>
                        <div className='px-4 py-2'>
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