import React from 'react'

const FormGpaOneRow = props => {
  return (
    <>
    <div className='row g-0 px-1' id={props.id}>
        <div className='col-md-5'>
            <input type="text" className='form-control shadow-none border rounded-0' name="coursename" placeholder='Course Name' />
        </div>
        <div className='col-md-2'>
            <input type="number" className='form-control shadow-none border rounded-0' name="marks" placeholder='Marks' />
        </div>
        <div className='col-md-2'>
            <input type="number" className='form-control shadow-none border rounded-0' name="credithrs" placeholder='Credits' />
        </div>
        <div className='offset-md-2 col-md-1'>
            <span className='remove-icon'><i className='fas fa-times' onClick={event => props.removeChild(props.id)}></i></span>
        </div>
    </div>
    </>
  )
}

export default FormGpaOneRow