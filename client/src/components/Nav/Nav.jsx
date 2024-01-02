import { NavProfileIcon, CourseIcon, HomeIcon } from "../ui/icons";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <NavLink className="nav__link nav__link--homeIcon" to="/">
            <HomeIcon />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link nav__link--CourseIcon" to="/course">
            <CourseIcon />
            <span>Course</span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className="nav__link nav__link--profileIcon"
            to="/profilePage"
          >
            <NavProfileIcon />
            <span>Account</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
