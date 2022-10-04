import React from 'react'
import GradePointCriteria from './api/GpScaleApi'

const ScaleTable = () => {
  return (
    <>
    <div>
        <h3>GPA Scale</h3>
        <hr />
        <table className='table table-bordered text-center table-sm'>
            <thead className='table-dark'>
            <tr>
                <th>Grade</th>
                <th>Numeric Score</th>
                <th>Grade Point</th>
            </tr>
            </thead>
            <tbody>
                {
                    GradePointCriteria.map((e, index) => {
                        return(
                            <tr key={index}>
                                <td>{e.grade}</td>
                                <td>{e.marks}</td>
                                <td>{e.gp}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ScaleTable