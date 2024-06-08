import React from 'react'

const Footer = () => {
  return (
    <>
    
    {/* Footer */}
    <footer className="text-center text-lg-start footermain" style={{backgroundColor:'rgb(45, 127, 127)' , color:'white'}}>
    {/* Section: Social media */}
    <section className="d-flex">
      {/* Left */}
      {/* <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div> */}
      {/* Left */}
      {/* Right */}
    <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center flex-wrap mb-4">
    {/* Facebook */}
    <a
      data-mdb-ripple-init=""
      className="btn text-white btn-floating m-1 twitter"
      style={{ backgroundColor: "#3b5998"}}
      href="#!"
      role="button"
    >
      <i className="fab fa-facebook-f" />
    </a>
    {/* Twitter */}
    <a
      data-mdb-ripple-init=""
      className="btn text-white btn-floating m-1"
      style={{ backgroundColor: "#55acee" }}
      href="#!"
      role="button"
    >
      <i className="fab fa-twitter" />
    </a>
    {/* Google */}
    <a
      data-mdb-ripple-init=""
      className="btn text-white btn-floating m-1"
      style={{ backgroundColor: "#dd4b39" }}
      href="#!"
      role="button"
    >
      <i className="fab fa-google" />
    </a>
    {/* Instagram */}
    <a
      data-mdb-ripple-init=""
      className="btn text-white btn-floating m-1"
      style={{ backgroundColor: "#ac2bac" }}
      href="#!"
      role="button"
    >
      <i className="fab fa-instagram" />
    </a>
    {/* Linkedin */}
    <a
      data-mdb-ripple-init=""
      className="btn text-white btn-floating m-1"
      style={{ backgroundColor: "#0082ca" }}
      href="#!"
      role="button"
    >
      <i className="fab fa-linkedin-in" />
    </a>
    {/* Github */}
    <a
      data-mdb-ripple-init=""
      className="btn text-white btn-floating m-1"
      style={{ backgroundColor: "#333333" }}
      href="#!"
      role="button"
      >
      <i className="fab fa-github" />
    </a>
    </section>
    {/* Section: Social media */}
    </div>

      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              JobHunt
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
               &nbsp; Jobhunt@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div className="text-center p-4">
      © JobHunt , All Rights Reserved.
    </div>
    {/* Copyright */}
    </footer>
    {/* Footer */}
    </>
  )
}

export default Footer