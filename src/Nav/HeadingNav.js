import { NavLink } from "react-router-dom";
import './style.css'

function HeadingNav() {

  return (
    <ul>
      <li>
        <NavLink  end to="/">Home</NavLink>
      </li>
      <li>
        <NavLink  to="/todo">Todo app</NavLink>
      </li>
    </ul>
  );
}

export default HeadingNav;
