import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { UserCard } from "../../components/userCard/UserCard";

const List = (props) => {
  console.log(props);
  return (
    <div className="list">
      <Sidebar />
      <div className="listcontainer">
        <Navbar />
        {/* <Datatable/> */}

        {props.userData.map((item, index) => {
          return <UserCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};
export default List;
