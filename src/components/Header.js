import React from 'react';
import Footer from './elements/Footer';

function validateName(){
    let fullname = document.querySelector('.form-control').value;
    let iconCheck = document.querySelector('.check');
    let iconTimes = document.querySelector('.times');
    let btn = document.querySelector('.btn');

    fullname = fullname.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    // (typeof fullname === "string")

    if(/^[a-zA-Z\s]+$/.test(fullname) && fullname.length >= 4 && fullname.length <= 20){
        iconCheck.classList.remove('hide');
        iconTimes.classList.add('hide');
        btn.removeAttribute('disabled');
    }else{
        iconCheck.classList.add('hide');
        iconTimes.classList.remove('hide');
        btn.setAttribute('disabled','disabled');
    }
};

const Header = () => {
  return (
    <>
    <div className='container'>
        <div className='row align-items-center header'>
            <div className='header-child'>
                <nav className='navbar'>
                    <a className="navbar-brand" href="#">
                        <img src="image/logo.svg" alt="logo" width={50} />
                        &nbsp;&nbsp;GPA Calculator
                    </a>
                </nav>
                <div className='header-body p-2'>
                    <div className='box'>
                        <h1>What's your name?</h1>
                        <div className='name-field'>
                            <input type="text" name="fullname" className='form-control' onKeyUp={() => {validateName()}} placeholder='John Doe, etc' />
                            <span className='icon check hide'><i className="fas fa-check-circle"></i></span>
                            <span className='icon times hide'><i className="fas fa-times-circle"></i></span>
                        </div>
                    </div>
                    <button className='btn btn-outline-primary px-5 mt-5' type="button" disabled>Continue</button>
                </div>
                <Footer />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;