
export const getGp = m => {
    if(m >= 90 && m <= 100) return 4;
    else if(m >= 85 && m <= 89) return 4;
    else if(m >= 80 && m <= 84) return 3.8;
    else if(m >= 75 && m <= 79) return 3.4;
    else if(m >= 71 && m <= 74) return 3;
    else if(m >= 68 && m <= 70) return 2.8;
    else if(m >= 64 && m <= 67) return 2.4;
    else if(m >= 61 && m <= 63) return 2;
    else if(m >= 57 && m <= 60) return 1.8;
    else if(m >= 53 && m <= 56) return 1.4;
    else if(m >= 45 && m <= 52) return 1;
    else return 0;
}

export const sumOfObj = (arr, key) => {
    let num = 0;
    arr.forEach(x => {
        num += x[key]
    })
    return num;
}

export const getLocalData = () => {
    let data = localStorage.getItem("gpa-report");
    if (data){ return JSON.parse(data); }
    else{ return [] };
}

// all calculations
export const CalculateGP = (id) => {
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