import React, { useState } from 'react'
import CourseRow from './CourseRow';

const SemesterForm = props => {
    // initial rows 4
    const [courseList, setCourseList] = useState([
        { id: 1 },{ id: 2 },{ id: 3 },{ id: 4 }
    ]);
    // add new row
    const addChild = () => setCourseList([...courseList, {id: courseList[courseList.length-1].id + 1}])
    // remove a row
    const removeChild = (id) => {
        const tempList = [...courseList];
        tempList.splice(id, 1);
        setCourseList(tempList);
    }

  return (
    <>
    <div>
    <h3>Semester #{props.semNo}</h3>
        <hr />
        <form id='gpa-form-elem'>
            {courseList.map((el, index) => (
                <CourseRow key={index} id={'form-row-'+el.id} ind={index} remove={removeChild} list={courseList} />
            ))}
        </form>

        <div className='row g-0 mt-4'>
            <div className='col-sm-4 col-8 my-1 my-sm-0 mx-sm-0 mx-auto px-4 px-sm-2'>
                <p className='h6 mb-0 d-sm-block d-flex justify-content-between'>Obtained Marks: <span id='obt-marks'>0</span></p>
            </div>
            <div className='col-sm-4 col-8 my-1 my-sm-0 mx-sm-0 mx-auto px-4 px-sm-2'>
                <p className='h6 mb-0 d-sm-block d-flex justify-content-between'>Percentage: <span id='percent'>0.00</span></p>
            </div>
            <div className='col-sm-4 col-8 my-1 my-sm-0 mx-sm-0 mx-auto px-4 px-sm-2'>
                <p className='h6 mb-0 d-sm-block d-flex justify-content-between'>GPA: <span id='cgpr'>0.00</span></p>
            </div>
        </div>

        <hr />
        <div className='d-flex justify-content-center'>
            {courseList.length < 8 && (
            <button type="button" onClick={addChild} className='btn rounded-0 shadow-none mx-1 btn-secondary' id=''>
                Add Course
            </button>)}
            
            <button type="button" onClick={props.report} className='btn rounded-0 shadow-none mx-1 btn-secondary' id=''>
                Add to Report
            </button>
        </div>            
    </div>
    </>
  )
}

export default SemesterForm