import React from 'react'

const ReportTable = () => {
  return (
    <>
    <div className='bg-body rounded shadow p-3'>
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
                <tr>
                    <td colSpan={4}><h4 className='text-center text-muted'>No Data</h4></td>
                    {/* <td>1</td>
                    <td>364</td>
                    <td>72.8</td>
                    <td>2.88</td> */}
                </tr>
            </tbody>
        </table>
        <h6 className='text-end'>Total CGPA: <span>0.00</span></h6>
    </div>
    </>
  )
}

export default ReportTable