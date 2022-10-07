import React from 'react';
import { Link } from "react-router-dom";

const pglink = [
    { page: "Calculate GPA", link: "/" },
    { page: "GPA Scale", link: "/scale" },
    { page: "FAQ", link: "" }
]

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
                {pglink.map((el, key) => {
                    let active = window.location.pathname === el.link ? "active" : "";
                    return(
                        <li className="nav-item" key={key}>
                            <Link className={`nav-link ${active}`} to={ el.link }>{ el.page }</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar;