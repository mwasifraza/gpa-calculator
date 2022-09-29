import React, { useEffect, useState } from 'react'

const ReportTable = () => {
    const getLocalData = () => {
        let data = localStorage.getItem("gpa-report");
        if (data){ return JSON.parse(data); }
        else{ return [] };
    }
    const localdata = getLocalData();

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
                { 
                    localdata.map((elem, index) => {
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
            </tbody>
        </table>
        <h6 className='text-end'>Total CGPA: <span>0.00</span></h6>
    </div>
    </>
  )
}

export default ReportTable