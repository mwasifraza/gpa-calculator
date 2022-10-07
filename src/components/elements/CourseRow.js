import React from 'react'
import { getGp } from './GpScale';

const CourseRow = props => {
    const CalculateGP = (id) => {
        // for grade point of each course
        let parent = document.getElementById(id);
        let cr_marks = parseInt(parent.querySelector('#marks').value, 10);
        let cr_credit = parseInt(parent.querySelector('#credit').value, 10);
        let gp = parent.querySelector('#gp');
    
        let course_gp = parseFloat(getGp(cr_marks) * cr_credit).toFixed(2);
        gp.value = (course_gp > 0) ? course_gp : "0";
    
        // for total marks of each semester
        let obtMarks = document.getElementById('obt-marks');
        let percent = document.getElementById('percent');
        let marks = document.querySelectorAll('#marks');
        let total_marks = 0, numOfCourses = 0, pc = 0;
        
        marks.forEach(m => {
          let num = parseInt(m.value, 10);
          if(num && num != 0){
            numOfCourses += 1;
            total_marks += num;
          }
        })
        numOfCourses *= 100;
        pc = parseFloat((total_marks/numOfCourses)*100).toFixed(2);
    
        percent.innerHTML = (pc > 0) ? pc : "0.00";
        obtMarks.innerHTML = total_marks;
    
        // for cgpr of each semester
        let cgpr = document.getElementById('cgpr');
        let gpa = document.querySelectorAll('#gp');
        let credits = document.querySelectorAll('#credit');
        let total_gp = 0, total_credit = 0;
        
        gpa.forEach(e => {
          let each_gp = parseFloat(e.value);
          if (each_gp && each_gp != 0){
            total_gp = total_gp + each_gp;
          }
        });
        credits.forEach(c => {
          let each_cr = parseInt(c.value, 10);
          if(each_cr && each_cr != 0){
            total_credit += each_cr;
          }
        });
        let total_cgpr = parseFloat(total_gp / total_credit).toFixed(2);
        cgpr.innerHTML = (total_cgpr>0) ? total_cgpr : "0.00";
    }
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