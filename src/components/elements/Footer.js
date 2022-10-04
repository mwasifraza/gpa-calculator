import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer d-flex flex-md-row flex-column align-items-center justify-content-between py-2 px-3'>
        <ul className='header-socials d-flex m-0 p-0'>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fab fa-github"></i></a></li>
        </ul>
        <div className='d-flex align-items-center'>
            <h6><i className='far fa-copyright'></i> 2022 | Designed by <a href='#'>Wasif Raza</a></h6>
        </div>
    </div>
    </>
  )
}

export default Footer