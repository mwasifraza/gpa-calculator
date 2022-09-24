import React from 'react';

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
                <div className='footer py-2 px-3'>
                    <ul className='header-socials'>
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fab fa-github"></i></a></li>
                    </ul>
                    <div className='d-flex align-items-center'>
                        <h6><i className='far fa-copyright'></i> 2022 | Designed by <a href='#'>Wasif Raza</a></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;