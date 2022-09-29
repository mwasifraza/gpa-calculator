import React from 'react'

const SemesterForm = props => {
  return (
    <>
    <div>
    <h3>Semester #{props.semNo}</h3>
        <hr />
        <form id='gpa-form-elem'>
            {props.children}
        </form>
        <div className='row mt-4'>
            <div className='col-md-4'>
                <h5 className='mb-0'>Obtained Marks: <span id='obt-marks'>0</span></h5>
            </div>
            <div className='col-md-4'>
                <h5 className='mb-0'>Percentage: <span id='percent'>0.00</span>%</h5>
            </div>
            <div className='col-md-4'>
                <h5 className='mb-0'>GPA: <span id='cgpr'>0.00</span></h5>
            </div>
        </div>
        <hr />
        <div className='row'>
            <div className='col-md-4'>
                <button type="button" onClick={props.addChild} className='btn rounded-0 shadow-none btn-secondary w-100' id=''>
                    {/* <i className='fas fa-plus'></i> */}
                    Add Course
                </button>
            </div>            
            <div className='col-md-4'>
                <button type="button" onClick={props.removeChild} className='btn rounded-0 shadow-none mx-1 btn-secondary w-100' id=''>
                    Remove Course
                </button>
            </div>            
            <div className='col-md-4'>
                <button type="button" onClick={props.report} className='btn rounded-0 shadow-none mx-1 btn-secondary w-100' id=''>
                    Add to Report
                </button>
            </div>            
        </div>
    </div>
    </>
  )
}

export default SemesterForm