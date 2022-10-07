import React from 'react'
import { CalculateGP } from './IncFormulas';

const CourseRow = props => {
  return (
    <>
    <div className='row g-0 px-1 mb-3 mb-sm-0' id={props.id}>
        <div className='col-sm-4 col-12'>
            <input type="text" className='form-control shadow-none border rounded-0' id='coursename' name="coursename" placeholder='Course Name' />
        </div>
        <div className='col-sm-2 col-4'>
            <input type="number" className='form-control shadow-none border rounded-0' id='marks' onKeyUp={e => CalculateGP(props.id)} name="marks" placeholder='Marks' />
        </div>
        <div className='col-sm-3 col-4'>
            <select className="form-select shadow-none border rounded-0" id="credit" onChange={e => CalculateGP(props.id)}>
                <option value="">--Credit--</option>
                <option value="3">3</option>
            </select>
        </div>
        <div className='col-sm-2 col-3'>
            <input type="text" className='form-control shadow-none border border-white rounded-0' id='gp' name="gp" readOnly />
        </div>
        <div className='col-sm-1 col-1'>
            {props.list.length > 1 && (
                <span className='remove-icon' onClick={e => props.remove(props.ind)}><i className='fas fa-times'></i></span>
            )}
        </div>
    </div>
    </>
  )
}

export default CourseRow