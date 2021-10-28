import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={`container-fluid mb-3 py-3 ${classes.header}`}>
      <div>
        <Link to="/">
          <span className={`${classes.logo} py-3`}>Ducks</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Add New Duck Data</Link>
          </li>
          <li>
            <Link to="/ducks">All Duck Data</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
