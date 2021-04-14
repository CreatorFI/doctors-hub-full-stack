import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link me-5 active" to ="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link me-5 active" to ="/appointment">Appointments</Link>
              </li>
              <li class="nav-item">
                <Link to ="/dashboard/appointment" className="nav-link me-5 active text-brand"> Dashboard</Link>
              </li>
              <li class="nav-item">
              <Link to ="/doctors" className="nav-link me-5 active text-white">Doctors</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white" aria-current="page" href="#">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white" href="#">
                  Contact US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
