import React from 'react';
import Swal from 'sweetalert2';

const ReportTable = props => {
    const removeMyDetails = () => {
        localStorage.removeItem("gpa-report");
        Swal.fire({
            icon: 'success',
            title: 'Deleted Successfully!',
            showConfirmButton: false,
            timer: 1500
        })
    }
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
                { 
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
                    // <tr><td colSpan={4}><h4 className='text-center text-muted'>No Data</h4></td></tr>
                }
                <tr>
                    <td colSpan={4} className=""><strong>Total</strong></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{props.cgpa}</td>
                </tr>
            </tbody>
        </table>
        <div className='d-grid g-2'>
            <button type="button" className='btn btn-outline-secondary btn-sm rounded-0 shadow-none' onClick={removeMyDetails}>Remove</button>       
        </div>
    </div>
    </>
  )
}

export default ReportTable