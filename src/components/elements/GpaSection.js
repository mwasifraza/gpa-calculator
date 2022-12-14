import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import SemesterForm from './SemesterForm';
import ReportTable from './ReportTable';
import { sumOfObj, getLocalData } from './IncFormulas';

  
const GpaSection = () => {

  const [items, setItems] = useState(getLocalData());
  let semNum = (items.length > 0) ? ((items[items.length-1].no)+1) : 1;

  const totals = {};
  totals.obt  = (items.length > 0) ? (sumOfObj(items, "marks")) : "0";
  totals.pc   = (items.length > 0) ? (sumOfObj(items, "percent")/items.length).toFixed(2) : "0";
  totals.cgpa = (items.length > 0) ? (sumOfObj(items, "cgpr")/items.length).toFixed(2) : "0.00";

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

    // if gp of any course is 0, it will throw an error and report will not be updated.
    let gp_check = document.querySelectorAll('#gp');
    let gp_validate = true;
    gp_check.forEach(e => { if(e.value === "0") gp_validate = false; })

    if(semester.marks > 0 && semester.cgpr > 0 && gp_validate){
      setItems([...items, semester]);
      form.reset();
      x.innerHTML = "0";
      y.innerHTML = "0.00";
      z.innerHTML = "0.00";    
    }else{
      Swal.fire({
        icon: 'error',
        iconColor: '#ee6c4d',
        title: 'Something went wrong!',
        text: 'Please fill out the required fields!',
        confirmButtonText: 'Okay!',
        confirmButtonColor: '#ee6c4d',
        buttonsStyling: false,
        customClass: {confirmButton: 'my-btn-primary-1 rounded-2 px-4 py-1 shadow-none'}
      })
    }
  };

  const removeMyDetails = () => {
    if(items.length > 0){
      setItems([]);
      Swal.fire({
          icon: 'success',
          title: 'Deleted Successfully!',
          showConfirmButton: false,
          timer: 1500
      })
    }
  }

  useEffect(() => {
    localStorage.setItem("gpa-report", JSON.stringify(items));
  }, [items]);
  
  return (
    <>
    <div className='row'>
      <div className='col-lg-7 col-sm-12 bg-body shadow rounded p-3 my-2 h-100'>
        <SemesterForm semNo={semNum} report={addToReport} />
      </div>
      <div className='col-lg-4 col-md-8 col-sm-12 bg-body rounded shadow p-3 my-2 ms-lg-auto me-lg-0 mx-md-auto h-100'>
        <ReportTable localdata={items} totals={totals} remove={removeMyDetails}/>
      </div>
    </div>
  </>
)};

export default GpaSection