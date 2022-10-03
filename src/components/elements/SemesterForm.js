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
            <div className='col-sm-4 col-8 my-1 my-sm-0 mx-sm-0 mx-auto px-4 px-sm-2'>
                <h6 className='mb-0 d-sm-block d-flex justify-content-between'>Obtained Marks: <span id='obt-marks'>0</span></h6>
            </div>
            <div className='col-sm-4 col-8 my-1 my-sm-0 mx-sm-0 mx-auto px-4 px-sm-2'>
                <h6 className='mb-0 d-sm-block d-flex justify-content-between'>Percentage: <span id='percent'>0.00</span>%</h6>
            </div>
            <div className='col-sm-4 col-8 my-1 my-sm-0 mx-sm-0 mx-auto px-4 px-sm-2'>
                <h6 className='mb-0 d-sm-block d-flex justify-content-between'>GPA: <span id='cgpr'>0.00</span></h6>
            </div>
        </div>
        <hr />

        <div className='d-flex justify-content-center'>
            <button type="button" onClick={props.addChild} className='btn rounded-0 shadow-none mx-1 btn-secondary' id=''>
                {/* <i className='fas fa-plus'></i> */}
                Add Course
            </button>
            {/* <button type="button" onClick={props.removeChild} className='btn rounded-0 shadow-none mx-1 btn-secondary' id=''>
                Remove Course
            </button> */}
            <button type="button" onClick={props.report} className='btn rounded-0 shadow-none mx-1 btn-secondary' id=''>
                Add to Report
            </button>
        </div>            
    </div>
    </>
  )
}

export default SemesterForm