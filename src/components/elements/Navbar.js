import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md z-2">
    <div className="container-fluid">
        <Link className='navbar-brand' to=''>
            <img src="image/logo.svg" alt="logo" width={50} />
            &nbsp;&nbsp;GPA Calculator
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className='nav-link active' to='/'>Calculate GPA</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/scale'>GPA Scale</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to=''>Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to=''>FAQ</Link>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar;