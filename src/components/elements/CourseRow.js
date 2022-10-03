import React from 'react'

const CourseRow = props => {
  return (
    <>
    <div className='row g-0 px-1 mb-3 mb-sm-0' id={props.id}>
        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12'>
            <input type="text" className='form-control shadow-none border rounded-0' id='coursename' name="coursename" placeholder='Course Name' />
        </div>
        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4'>
            <input type="number" className='form-control shadow-none border rounded-0' id='marks' onKeyUp={e => props.calculateGP(props.id)} name="marks" placeholder='Marks' />
        </div>
        <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4'>
            <select className="form-select shadow-none border rounded-0" id="credit" onChange={e => props.calculateGP(props.id)}>
                <option value="">--Credit--</option>
                <option value="3">3</option>
            </select>
        </div>
        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3'>
            <input type="text" className='form-control shadow-none border border-white rounded-0' id='gp' name="gp" readOnly />
        </div>
        <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1'>
            <span className='remove-icon'><i className='fas fa-times'></i></span>
        </div>
    </div>
    </>
  )
}

export default CourseRow