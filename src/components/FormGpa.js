import React from 'react';
import FormGpaOneRow from './FormGpaOneRow';

class FormGpa extends React.Component {
    state = {
      numChildren: 4
    }
  
    render () {
      const children = [];
  
      for (var i = 1; i <= this.state.numChildren; i += 1) {
        // if(children.length < 8){
          children.push(<FormGpaOneRow key={i} id={'form-row-'+i} removeChild={this.onRemoveChild} />);
        // }
      };
  
      return (
        <ParentComponent addChild={this.onAddChild}>
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
  }
  
  const ParentComponent = props => (
    <div className='bg-body shadow rounded p-3'>
        <form id='gpa-form-elem'>
            <h3>Semester 01</h3>
            <hr />
            {props.children}
        </form>
        <div className='row mt-4'>
            <div className='col-md-4 d-flex align-items-center'>
                <h6 className='mb-0'>Semester 01 GPA: <span>0.00</span></h6>
            </div>
            <div className='col-md-4'>
                <button type="button"  onClick={props.addChild} className='btn rounded-0 bg-my-secondary' id='add-course'>
                    <i className='fas fa-plus'></i> Add Course
                </button>
            </div>            
        </div>
    </div>
  );

export default FormGpa