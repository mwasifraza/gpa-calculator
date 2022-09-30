import React from 'react'

const CourseRow = props => {
  return (
    <>
    <div className='row g-0 px-1' id={props.id}>
        <div className='col-md-5'>
            <input type="text" className='form-control shadow-none border rounded-0' id='coursename' name="coursename" placeholder='Course Name (optional)' />
        </div>
        <div className='col-md-2'>
            <input type="number" className='form-control shadow-none border rounded-0' id='marks' onKeyUp={e => props.calculateGP(props.id)} name="marks" placeholder='Marks' />
        </div>
        <div className='col-md-2'>
            <select className="form-select shadow-none border rounded-0" id="credit" onChange={e => props.calculateGP(props.id)}>
                <option value="">--Credit--</option>
                <option value="3">3</option>
            </select>
        </div>
        <div className='col-md-2'>
            <input type="text" className='form-control shadow-none border border-white rounded-0' id='gp' name="gp" readOnly />
        </div>
        <div className='col-md-1'>
            <span className='remove-icon'><i className='fas fa-times'></i></span>
        </div>
    </div>
    </>
  )
}

export default CourseRow