import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import SemesterForm from './SemesterForm';
import CourseRow from './CourseRow';
import ReportTable from './ReportTable';
import { getGp, sumOfCgpa, getLocalData } from './GpScale';

class GpaSection extends React.Component {
    state = {
      numChildren: 4
    }
  
    render () {
      const children = [];
  
      for (var i = 1; i <= this.state.numChildren; i += 1) {
        // if(children.length < 8){
          children.push(<CourseRow key={i} id={'form-row-'+i} calculateGP={this.onCalculateGP} removeChild={this.onRemoveChild} />);
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
  
  const ParentComponent = props => {
    const [items, setItems] = useState(getLocalData());

    let semNum = (items.length > 0) ? ((items[items.length-1].no)+1) : 1;
    let cgpa = (items.length > 0) ? (sumOfCgpa(items)/items.length).toFixed(2) : "0.00";

    const addToReport = () => {
      const semester = {};

      let form = document.getElementById('gpa-form-elem');
      let x = document.getElementById('obt-marks');
      let y = document.getElementById('percent');
      let z = document.getElementById('cgpr');

      semester.no = semNum;
      semester.marks = parseInt(x.innerHTML, 10);
      semester.percent = parseFloat(y.innerHTML);
      semester.cgpr = parseFloat(z.innerHTML);

      if(semester.marks > 0 && semester.cgpr > 0){
        setItems([... items, semester]);
        form.reset();
        x.innerHTML = "0";
        y.innerHTML = "0.00";
        z.innerHTML = "0.00";    
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Please fill out the form first!',
          confirmButtonText: 'Okay!'
        })
      }
    };

    useEffect(() => {
      localStorage.setItem("gpa-report", JSON.stringify(items));
    }, [items]);
    
    return (
      <>
      <div className='row'>
        <div className='col-lg-7 bg-body shadow rounded p-3 mx-4 my-2 h-100'>
          <SemesterForm semNo={semNum} children={props.children} addChild={props.addChild} removeChild={props.removeChild} report={addToReport} />
        </div>
        <div className='col-lg-4 bg-body rounded shadow p-3 mx-4 my-2 ms-auto h-100'>
          <ReportTable localdata={items} cgpa={cgpa} />
        </div>
      </div>
    </>
  )};

export default GpaSection