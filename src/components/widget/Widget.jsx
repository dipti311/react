import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
const Widget = ({ userListLength, type }) => {
  let data;
  const totaluser = userListLength;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="icon" />,
      };
      break;
    case "createuser":
      data = {
        title: "create",
        icon: <AddCircleOutlineOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{totaluser}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpOutlinedIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};
export default Widget;
