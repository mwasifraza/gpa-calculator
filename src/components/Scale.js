import React from 'react'
import Navbar from './elements/Navbar'
import Footer from './elements/Footer'
import ScaleTable from './elements/ScaleTable'

const Scale = () => {
    // let activeLink = window.location.pathname;
  return (
    <>
    <div className='container'>
        <div className='row page'>
            <div className='page-header my-4'>
                <Navbar />
                <div className='row main-head'>
                    <div className='col-lg-6 col-md-8 col-sm-10 mx-auto text-center mt-5 pt-5 z-2'>
                        {/* <i class="fas fa-university fa-3x my-primary my-2"></i> */}
                        <h1>GPA Scale</h1>
                        <p>Easily convert your letter grade or percentage grade to a 4-point system with our easy to use GPA converter and handy GPA scale.</p>
                    </div>
                </div>
                <div className='row align-items-center gpa-form py-5'>
                    <div className='offset-sm-1 col-sm-5 z-2'>
                        <ScaleTable />
                    </div>
                    <div className='col-sm-5 p-3 z-2 ms-4 h-100'>
                        <h4>Formula</h4>
                        <hr />
                        <div>
                            <h6>Grade Point in Each Course:</h6>
                            G.P = (Cr. Hrs of the course) x (Grade point equivalent to the score given in the grade point scale chart)
                            <br /><br />
                            <h6>Cumulative Grade Point Ratio:</h6>
                            CGPR = (Total Grade Points in all the courses) / (Total number of Cr. Hrs.)
                            <br /><br />
                            For further details&nbsp;
                            <a href="https://uok.edu.pk/sem_results/rules.php" rel="noreferrer" className='text-primary' target="_blank">Click here</a>
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

export default Scale