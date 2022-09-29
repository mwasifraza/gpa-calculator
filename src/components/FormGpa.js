import React, { useState } from 'react';
import FormGpaOneRow from './FormGpaOneRow';
import getGp from './Calculation';

class FormGpa extends React.Component {
    state = {
      numChildren: 4
    }
  
    render () {
      const children = [];
  
      for (var i = 1; i <= this.state.numChildren; i += 1) {
        // if(children.length < 8){
          children.push(<FormGpaOneRow key={i} id={'form-row-'+i} calculateGP={this.onCalculateGP} removeChild={this.onRemoveChild} />);
        // }
      };
  
      return (
        <ParentComponent addChild={this.onAddChild} removeChild={this.onRemoveChild}>
          {children}
        </ParentComponent>
      );
    }
  
    onAddChild = () => {
      this.setState({
        numChildren: this.state.numChildren + 1
      });
    }

    onRemoveChild = (e) => {
      this.setState({
        numChildren: this.state.numChildren - 1
      });
      // document.getElementById(e).remove();
    }

    onCalculateGP = (id) => {
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
  }
  
  const ParentComponent = props => (
    <div className='bg-body shadow rounded p-3'>
        <form id='gpa-form-elem'>
            <h3>Semester 01</h3>
            <hr />
            {props.children}
        </form>
        <div className='row mt-4'>
            <div className='col-md-4'>
                <h5 className='mb-0'>Obtained Marks: <span id='obt-marks'>0</span></h5>
            </div>
            <div className='col-md-4'>
                <h5 className='mb-0'>Percentage: <span id='percent'>0.00</span>%</h5>
            </div>
            <div className='col-md-4'>
                <h5 className='mb-0'>GPA: <span id='cgpr'>0.00</span></h5>
            </div>
        </div><hr />
        <div className='row'>
            <div className='col-md-4'>
                <button type="button" onClick={props.addChild} className='btn rounded-0 shadow-none btn-secondary w-100' id=''>
                  {/* <i className='fas fa-plus'></i> */}
                  Add Course
                </button>
            </div>            
            <div className='col-md-4'>
                <button type="button" onClick={props.removeChild} className='btn rounded-0 shadow-none mx-1 btn-secondary w-100' id=''>
                  Remove Course
                </button>
            </div>            
            <div className='col-md-4'>
                <button type="button" className='btn rounded-0 shadow-none mx-1 btn-secondary w-100' id=''>
                  Add to Report
                </button>
            </div>            
        </div>
    </div>
  );

export default FormGpa