import React from 'react';

const ReportTable = props => {
  return (
    <>
    <div>
        <h3>Report</h3>
        <hr />
        <table className='table table-sm'>
            <thead>
                <tr>
                    <th>Sem#</th>
                    <th>Marks</th>
                    <th>Percentage</th>
                    <th>CGPR</th>
                </tr>
            </thead>
            <tbody>
                {   (props.localdata.length > 0) ? (
                        props.localdata.map((elem, index) => {
                            return(
                                <tr key={index}>
                                    <td>{elem.no}</td>
                                    <td>{elem.marks}</td>
                                    <td>{elem.percent}%</td>
                                    <td>{elem.cgpr}</td>
                                </tr>
                            )
                        })
                    )  :  (
                        <tr><td colSpan={4}><h4 className='text-center text-muted my-2'>No Data to Show!</h4></td></tr>
                    )
                }

                {props.localdata.length > 0 && (
                    <>
                    <tr>
                        <td colSpan={4} className=""><strong>Total</strong></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{props.totals.obt}</td>
                        <td>{props.totals.pc}%</td>
                        <td>{props.totals.cgpa}</td>
                    </tr>
                    </>
                )}
                
            </tbody>
        </table>
        <div className='d-flex justify-content-end'>
            <button type="button" className='my-btn-primary-2 my-btn-sm rounded-2 px-3 shadow-none' onClick={props.remove}>
                <i className='fas fa-trash-alt'></i>&nbsp;Remove
            </button>       
        </div>
    </div>
    </>
  )
}

export default ReportTable