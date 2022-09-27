import React from 'react'

const FormGpaOneRow = props => {
  return (
    <>
    <div className='row g-0 px-1' id={props.id}>
        <div className='col-md-5'>
            <input type="text" className='form-control shadow-none border rounded-0' id='coursename' name="coursename" placeholder='Course Name' />
        </div>
        <div className='col-md-2'>
            <input type="number" className='form-control shadow-none border rounded-0' id='marks' onKeyUp={e => props.calculateGP(props.id)} name="marks" placeholder='Marks' />
        </div>
        <div className='col-md-2'>
            {/* <input type="number" className='form-control shadow-none border rounded-0' id='credit' onKeyUp={e => props.calculateGP(props.id)} name="credithrs" placeholder='Credits' /> */}
            <select className="form-select shadow-none border rounded-0" id="credit" onChange={e => props.calculateGP(props.id)}>
                <option value="">-- Credit --</option>
                <option value="3">3</option>
            </select>
        </div>
        <div className='col-md-2'>
            <input type="text" className='form-control shadow-none border-0 rounded-0' id='gp' name="gp" readOnly />
        </div>
        <div className='col-md-1'>
            {/* <span className='remove-icon'><i className='fas fa-times' onClick={event => props.removeChild(props.id)}></i></span> */}
        </div>
    </div>
    </>
  )
}

export default FormGpaOneRow