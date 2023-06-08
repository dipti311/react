import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">dipti</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users">
            <li>
              <SupervisedUserCircleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/users/new">
            <li>
              <SupervisedUserCircleIcon className="icon" />
              <span>Add New</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
