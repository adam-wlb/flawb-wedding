import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChurch,
  faHotel,
  faCalendarDay,
  faBookOpen,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

import Paths from "../helpers/paths";

const NavBar = () => (
  <div className="Navbar">
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <FontAwesomeIcon icon={faHome} size="lg" />
                  <Link to={Paths.HOME}>{"Home"}</Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faBookOpen} size="lg" />
                  <Link to={Paths.ABOUT_US}>{"About Us"}</Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faChurch} size="lg" />
                  <Link to={Paths.VENUE}>{"Venue"}</Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faHotel} size="lg" />
                  <Link to={Paths.ACCOMODATION}>{"Accomodation"}</Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faCalendarDay} size="lg" />
                  <Link to={Paths.SCHEDULE}>{"Schedule"}</Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faGift} size="lg" />
                  <Link to={Paths.GIFTS}>{"Gifts"}</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
