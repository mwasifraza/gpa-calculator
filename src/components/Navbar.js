import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src="image/logo.svg" alt="logo" width={50} />
            &nbsp;&nbsp;GPA Calculator
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Calculate GPA</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">GPA Scale</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">FAQ</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar;